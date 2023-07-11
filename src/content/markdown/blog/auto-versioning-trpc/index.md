---
title: "Addressing Client/Server Compatibility in tRPC"
description: Strategies for seamless client/server compatibility in tRPC, empowering developers to overcome version skew and deliver exceptional user experiences.
date: "2023-03-20T20:00:00.000Z"
draft: true
---

The modern world of web application development brings frontend and backend environments closer together with libraries and frameworks like [tRPC](https://trpc.io/), [Remix](https://remix.run/), [Next.js](https://vercel.com/solutions/nextjs). However, achieving seamless client/server compatibility can be elusive, as stale web or mobile applications will eventually make calls to a newer version of the server, leading to potential compatibility issues. This is also known as [version skew](https://www.industrialempathy.com/posts/version-skew/).

In this blog post, we will examine a strategy for maintaining client/server compatibility in tRPC by utilizing immutable auto-versioned server functions. This approach was crafted for the [Pleo.io](https://www.pleo.io/) web applications, delivering an excellent developer and end-user experience.

## The Challenge: Client/Server Compatibility

I'm a huge fan of removing the boundary between the frontend and backend environment, as seen in libraries like [tRPC](https://trpc.io/). One of the main selling points is "End-to-end typesafe APIs made easy", but this doesn't hold if you are not mindful about deployment or keeping your client/server versions in sync – a task that's far from trivial.

The magnitude of the issue can vary from detectable API failures to subtle UI problems due to data shape changes or even data inconsistencies.

### Approaches

Various frameworks and tools tackle the compatibility challenge differently. For example, GraphQL recommends [avoiding breaking changes by making it backward compatible](https://graphql.org/learn/best-practices/#versioning). Next.js only recently introduced a beta of a new [skew protection feature](https://vercel.com/blog/version-skew-protection), but also [automatically update to the latest version](https://nextjs.org/docs/deployment#automatic-updates) in the background when routing, but API routes (used for actions/forms) are not automatically versioned. Remix does not handle automatic upgrades – any action on the page will break if the client is outdated and the loader is incompatible. For tRPC, it is suggested by the community to keep the client and server in sync.


### Strategies for Addressing Compatibility Issues

There are several general strategies to resolve the client/server version compatibility issue:

- **Enforce clients to be in sync** with the latest server. We cannot guarantee this, but we can nudge the user to reload their browser, update when the user navigates, and add a reload call to action in case of API failures for forms/actions in the application. For mobile application using React Native we can use [CodePush](https://github.com/microsoft/react-native-code-push), although there will always be a bit of lag between clients upgrading.
- **Maintain backward compatible for a grace period** until we expect the clients to be updated.
- **Manually or automatically version** the API endpoints and gracefully keep old versions around until clients have migrated to the new endpoints. Manual versioning is standard practice but isn't suitable for tRPC, Next.js or Remix, where the actual endpoints are abstracted away.

Each strategy has tradeoffs regarding infrastructure complexity, ease of rollback, and friction for developers and end-users.

Let us explore two of the most promising strategies in more detail.

## Solution: Backwards Compatibility

Maintaining backwards compatibility is a fairly standard solution and doesn't require any special infrastructure setup (i.e. multiple server versions).

However, without any custom build time tooling it introduces some friction for the developer that needs to:
- maintain backwards compatibility
- clean up old procedures or fields in input/output DTOs

This can be mitigated by building a custom validation script that would compare the latest server code with an older version (e.g. from a week ago depending on the grace period). The script would ensure:
- the latest server code compatible with the older version (e.g. input and output DTOs are a superset of previous versions, existing procedures are not removed)
- inform the developer if some deprecated code should be remove

Even though this approach is viable, it still introduces some friction for the developer and requires custom build time tooling. I would like to explore this option in more detail, but for now, let's look at another solution.

## Solution: Auto-Versioning

To avoid any friction for the developer, we opted for making our tRPC server code immutable and auto-versioned. It requires some custom infrastructure setup, but it allows for a great developer experience and a seamless end-user experience – especially for web applications.

This can be implemented using serverless services like Cloudflare Workers or AWS Lambda. The solution shares similarities with Next.js' [new skew protection feature](https://vercel.com/blog/version-skew-protection), but we recommend keeping the version active for longer than 24 hours to ensure compatibility with running applications.

For every deploy we:
1) Calculate a stable hash (e.g. version) of the server source code, configuration, deploy script and relevant environment variables
2) Verify if any deployed function matches the hash (if so, then skip to step 4)
3) Create a new function with a unique URL
4) Bake the function's URL into your web or mobile application

That's all. 🥂

Want to see some code? [Here is an early prototype](https://github.com/skovhus/auto-versioned-trpc-aws-lambda) using the node.js AWS SDK.

## A Word of Caution for Mobile Applications

The design choice of making the server code immutable and auto-versioned has some tradeoffs. What if server business logic really needs to be updated? What if the database schema or the underlying API services changes? The turnaround time for these changes depends on the time it takes for clients to upgrade. For web applications, it's usually a matter of days, but for mobile applications, it can be months or worse (even when using CodePush for most changes).

For mobile applications using tRPC I would not adopt the immutable auto-versioned setup. Instead I suggest exploring the custom build time tooling described above which would enable a more graceful migration path for mobile applications while allowing updating the underlying server code.
