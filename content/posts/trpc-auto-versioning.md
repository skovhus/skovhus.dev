---
title: "Addressing Client/Server Compatibility in tRPC"
description: One of the main selling points of tRPC is "End-to-end typesafe APIs made easy", but this doesn't hold if you are not mindful about keeping your client/server versions in sync.
publishedAt: "2023-07-12"
devToLink: https://dev.to/kenneth_skovhus/addressing-clientserver-compatibility-in-trpc-9le
---

I'm a huge fan of removing the boundary between the frontend and backend environment, as seen in libraries like [tRPC](https://trpc.io/) and web application frameworks like [Remix](https://remix.run/) and [Next.js](https://vercel.com/solutions/nextjs).

![tRPC removing the boundaries between the frontend and backend environment.](/blog/trpc.png)

One of the main selling points of tRPC is "End-to-end typesafe APIs made easy", but this doesn't hold if you are not mindful about keeping your client/server versions in sync. Stale web or mobile applications will eventually make calls to a newer version of the server, leading to potential compatibility issues. This is also known as [version skew](https://www.industrialempathy.com/posts/version-skew/).

The magnitude of the issue can vary from detectable API failures to subtle UI problems or even data inconsistencies.

In this blog post, I'll share the solution we came up with when addressing this issue for the tRPC-powered Backend-For-Frontend setup at [Pleo.io](https://www.pleo.io/).

## Library Guidelines & Best Practices

Frameworks and tools tackle the compatibility challenge differently. For example, GraphQL recommends [making all changes backward compatible](https://graphql.org/learn/best-practices/#versioning). Next.js only recently introduced a beta of a new [skew protection feature](https://vercel.com/blog/version-skew-protection), but also [automatically update to the latest version](https://nextjs.org/docs/deployment#automatic-updates) in the background when routing, but API routes (used for actions/forms) are not automatically versioned. Remix does not handle automatic upgrades — any action on the page will break if the client is outdated and the loader is incompatible. For tRPC, it is suggested by the community to keep the client and server in sync.


## General Strategies

There are several general strategies to resolve the client/server version compatibility issue:

- **Enforce clients to be in sync** with the latest server. We cannot guarantee this, but we can nudge the user to reload their browser, update when the user navigates, and add a reload call to action in case of API failures for forms/actions in the application. For mobile applications using React Native we can use [CodePush](https://github.com/microsoft/react-native-code-push), although it does introduce some lag and doesn't ensure all clients to upgrade.
- **Maintain backward compatibility for a grace period** until we expect the clients to be updated.
- **Manually or automatically version** the API endpoints and gracefully keep old versions around until clients have migrated to the new endpoints. Manual versioning is standard practice but isn't suitable for tRPC, Next.js, or Remix, where the actual endpoints are abstracted away.

Each strategy has tradeoffs regarding infrastructure complexity, ease of rollback, and friction for developers and end-users.

Let us explore two of the most promising strategies in more detail.

## Solution: Backward Compatibility

Maintaining backward compatibility is a fairly standard solution and doesn't require any special infrastructure setup (i.e. multiple server versions).

However, without any custom build time tooling it introduces some friction for the developer that needs to:
- maintain backward compatibility
- clean up old procedures or fields in input/output DTOs

This can be mitigated by building a custom validation script that would compare the latest server code with an older version (e.g. from a week ago depending on the grace period). The script would ensure:
- the latest server code compatible with the older version (e.g. input and output DTOs are a superset of previous versions, and existing procedures are not removed)
- inform the developer if some deprecated code should be removed

Even though this approach is viable, it introduces some friction for the developer and requires custom tooling.

## Solution: Auto-Versioning

To avoid any friction for the developer, we opted for making our tRPC server code immutable and auto-versioned. It requires some custom infrastructure setup, but it allows for a great developer experience and a seamless end-user experience — especially for web applications.

![Traffic pattern of an auto-versioned immutable tRPC service. The coloring shows new deployments slowly taking over traffic. Notice the long tail caused by stale web clients.](/blog/bff-traffic.png)

This can be implemented using serverless services like Cloudflare Workers or AWS Lambda. The solution shares similarities with Next.js' [new skew protection feature](https://vercel.com/blog/version-skew-protection), but we recommend keeping the version active for longer than 24 hours to ensure compatibility with running applications.

For every deployment we:
1) Calculate a stable hash (e.g. version) of the server source code, configuration, deploy script, and relevant environment variables
2) Verify if any deployed function matches the hash (if so, then skip to step 4)
3) Create a new function with a unique URL
4) Bake the function's URL into your web or mobile application

That's all. 🥂

Want to see some code? [Here is an early prototype](https://github.com/skovhus/auto-versioned-trpc-aws-lambda) using the node.js AWS SDK.

## A Word of Caution for Mobile Applications

The design choice of making the server code immutable and auto-versioned has some tradeoffs. What if server business logic needs to be updated? What if the database schema or the underlying API services changes? The turnaround time for these changes depends on the time it takes for clients to upgrade. For web applications, it's usually a matter of days, but for mobile applications, it can be months or worse (even when using CodePush).

I would still recommend using auto-versioned servers for tRPC-enabled mobile applications, but I suggest relaxing the immutability requirement by making it easy to update the server code of existing server versions.
