---
title: "Addressing Client/Server Compatibility in tRPC"
description: Explores the compatibility pitfalls and offers a solution for overcoming them using immutable auto-versioned server instances.
date: "2023-03-20T20:00:00.000Z"
draft: true
---

The modern world of application development brings frontend and backend environments closer together with libraries and frameworks like [tRPC](https://trpc.io/), [Remix](https://remix.run/), [Next.js](https://vercel.com/solutions/nextjs). However, achieving seamless client/server compatibility can be elusive as stale web or mobile applications will eventually make calls to a newer version of the server, leading to compatibility issues.

In this blog post, we will examine a strategy for maintaining client/server compatibility in tRPC by utilizing immutable auto-versioned server functions. This approach was crafted for the [Pleo.io](https://www.pleo.io/) web and mobile applications, delivering an excellent developer and end-user experience.

## The Challenge: Client/Server Compatibility

I'm a huge fan of removing the boundary between the frontend and backend environment, as seen in libraries like [tRPC](https://trpc.io/). One of the main selling points is "End-to-end typesafe APIs made easy", but this doesn't hold if you are not mindful about deployment or keeping your client/server versions in sync – a task that's far from trivial.

The magnitude of the issue can vary from detectable API failures to subtle UI problems due to data shape changes or even data inconsistencies.

### Approaches

Various frameworks and tools tackle the compatibility challenge differently. For example, GraphQL recommends (avoiding breaking changes by making it backward compatible)[(https://graphql.org/learn/best-practices/#versioning)]. Next.js (automatically loads the latest version)[https://nextjs.org/docs/deployment#automatic-updates] in the background when routing, but API routes (used for actions/forms) are not automatically versioned. Remix does not handle automatic upgrades – any action on the page will break if the client is outdated and the loader is incompatible. In the case of tRPC, the community suggests keeping the client/server in sync.


### General Strategies for Addressing Compatibility

There are several general strategies to resolve the client/server version compatibility issue:

- **Enforce clients to be in sync** with the latest server. We cannot guarantee this, but we can nudge the user to reload their browser, update when the user navigates, and add a reload call to action in case of API failures for forms/actions in the application.
- **Version** (manually or automated) the endpoints and gracefully keep old versions around until clients have migrated to the new endpoints. Manual versioning is standard practice but doesn't fit well with tRPC, Next.js or Remix, where the actual endpoints are abstracted away.
- **Maintain backward compatible for a grace period** until we expect the clients to be updated. Either the developer manually clean up old endpoints or you enforce this by a custom type checker build time (e.g. the input and output DTOs are a superset of previous versions).

Each strategy has tradeoffs regarding infrastructure complexity, ease of rollback, and friction for developers and end-users.


## Solution: Immutable Auto-Versioned tRPC Servers

For us, the ideal solution for both end-users and developers involves auto-versioned endpoints that gracefully support outdated application instances while maintaining the abstraction that co-located client and server code is synchronized. This can be implemented using serverless services like Cloudflare Workers or AWS Lambda.

For every deploy we:
1) Calculate a stable hash (e.g. version) of the server source code, configuration, deploy script and relevant environment variables
2) Verify if any deployed function matches the hash (if so, then skip to step 4)
3) Create a new function with a unique URL
4) Bake the function's URL into your web or mobile application

That's it. By employing immutable auto-versioned server instances, we keep things running smoothly for users–and maintains a great developer experience. 🥂

Want to see some code? [Here is an early prototype](https://github.com/skovhus/auto-versioned-trpc-aws-lambda) using the node.js AWS SDK.
