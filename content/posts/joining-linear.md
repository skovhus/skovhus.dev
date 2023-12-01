---
title: Joining Linear
description: Reflection on my first 4 months at Linear.
publishedAt: "2023-12-01"
featuredImage: "/blog/triage-responsibility.webp"
---

Today I hit my four-month mark at [Linear](https://linear.app). A moment to pause, look back, and reflect on the journey so far and why I joined Linear on our mission to bring back the magic of software.


### Where it all started

Let’s rewind to the beginning. Childhood memories of bulky monitors. The hum of dial-up modems filled the room, orchestrating a symphony to push us into an online world. A magical world of connectivity, community, knowledge, and a canvas that allowed us to build yet another Red Hot Chili Peppers fan page on GeoCitities. I wanted to build experiences using software.

I later found my happy place working with really talented and passionate people in smaller settings and start-ups. I worked in various roles from backend, frontend, mobile, and leadership in companies like Issuu, Leo Innovation Labs, Electricity Maps and Pleo.

I’ve always aimed to challenge the subpar software solutions out there by building tools and systems that people would love to use. I wish to bring excitement and quality back into the digital tools we use.

So, three years ago (fall 2020), when I first tried Linear, I was instantly captivated. The extremely high standard of excellence and pure craftsmanship shone through. It was not just a great tool, it was a better way to build software. The application demonstrated how magical a well-crafted piece of software can feel.

I spontaneously wrote a job application after reading the [Linear README](https://linear.app/readme) in December 2021, but due to other opportunities I ended up not sending it. A year later it was Linear who reached out to me. I was thrilled.


### The work trial

My interview process with Linear ended up in a one-week paid work trial (June 2023). While a paid work trial represents a significant commitment from both parties, it proved to be extremely valuable to see the company from the inside (culture, people, codebase) and to feel I could contribute.

Initial observations from my trial week: It became clear how much I had missed building products, and being empowered to contribute to the entire stack from the database, UI, and product.

By the third day of my work trial, I had shipped a new database entity, GraphQL resolver and UI to production. This is a testimony to the extremely empowering Linear sync engine and tooling. I recommend watching the [devtools FM show with Tuomas Artman](https://www.youtube.com/watch?v=Vk15EYX6C8g) about this topic.

Another enabler is the extensive use of feature flagging, coupled with excellent tooling. This approach allows for extensive experiments and allowed the Linear team to use the *triage responsibility* feature I developed after my trial ended.


### The first months

I joined Linear in August this year, and started fixing smaller bugs to familiarize myself with the codebase and product, dived into customer feedback. After a few weeks, I restarted the triage responsibility project and we quickly rolled the feature out to a smaller set of beta customers.

In the beginning of October we launched the feature publicly and promoted it in our [changelog](https://linear.app/changelog/2023-10-12-triage-responsibility). It was a great feeling to see the feature in the hands of our customers and to experience the positive feedback.

![](/blog/triage-responsibility.webp)

Some observations from my first time:
- Everyone is extremely focused on the ball and the mission.
- The amount of abstractions in the codebase is the highest that I’ve ever seen. They rarely leak and are a force multiplier for all the features we ship.
- The amount of automated tests is much lower than I expected, but monitoring and rollback tooling makes this less of a problem.
- Mono-repo tooling FTW.
- Craft is not about perfection. We want to push things out quickly, but also improve them quickly through smaller iterations. More on that in [Lenny’s Podcast](https://www.lennyspodcast.com/inside-linear-building-with-taste-craft-and-focus-karri-saarinen-co-founder-designer-ceo/) called "Inside Linear: Building with taste, craft, and focus".
- A small effective team can do wonders.


### Wrapping up

I have a sense that Linear could be the place where I’ll do some of the best work of my career. That feels pretty good!

Thanks for reading along.

---

_And thanks to [Julian Lehr](https://julian.digital/) for reviewing this post._
