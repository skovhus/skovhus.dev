---
title: Joining Linear
description: Reflection on why I joined Linear and how the first months have been.
date: "2023-10-16T23:00:00.000Z"
featuredImage: "/blog/triage-responsibility.webp"
---

I recently joined [Linear](https://linear.app) on their mission bringing magic back to software.

![](/blog/triage-responsibility.webp)

After shipping my first [changelog headline feature](https://linear.app/changelog/2023-10-12-triage-responsibility), it's a good time to reflect on why I joined Linear and how the first months have been.

### Where it all started

Childhood memories. Huge monitors. The hum of dial-up modems filled the air, orchestrating a symphony just to get online. I was captivated by the magic of computers and software from an early age.

I later found my happy place working with really talented and passionate people in smaller settings and start-ups. I worked in various roles from backend, frontend, mobile, and leadership in companies like Issuu, Leo Innovation Labs, Electricity Maps and Pleo.

I’ve always strived to combat all the subpar software solutions out there by building tools and systems that people would love to use.

So, three years ago (fall 2020), when I first tried Linear, I was naturally captivated. The extremely high standard of excellence and pure craftsmanship shone through – it was not just a great tool, but a better way to build software. The application demonstrated how magical a well-crafted piece of software can feel.

I spontaneously wrote a job application after reading the [Linear README](https://linear.app/readme) (December 2021), but it ended up hanging forever in a tab. I was really happy when they reached out a year later...


### The work trial

My interview process with Linear ended up in a one-week paid work trial (June 2023). While a paid work trial represents a significant commitment from both parties, it proved to be extremely valuable to see the company from the inside (culture, people, codebase) and to  feel I could contribute from day one; imposter syndrome is real when joining such a talented team.

Initial observations from my trial week: It became clear how much I’ve missed building products, and being empowered to contribute to the entire stack from the database, UI, and overall product direction. As Linear does not have any dedicated product managers, everyone takes on PM duties, talks to users and drives projects forward.

On the third day of my work trial I shipped a new database entity, GraphQL resolver and UI to production. This is a testimony to the extremely empowering Linear sync engine and tooling. I recommend watching or hearing the [devtools FM show with Tuomas Artman](https://www.youtube.com/watch?v=Vk15EYX6C8g) about the sync engine.

Another enabler is the heavy use of feature flagging (+ great tooling) which opens up for a ton of experimentations and enabled Linear to start using the triage responsibility feature I built.


### The first months

I joined Linear in August, and started fixing smaller bugs to familiarize myself with the codebase and product, dived into customer feedback. After a few weeks I restarted the triage responsibility project and we quickly rolled the feature out to a smaller set of beta customers.

Some observations from my first time:
- Everyone is extremely focused on the ball and the mission.
- The amount of abstractions in the codebase is the highest that I’ve ever seen. They rarely leak and are a force multiplier for all the features we ship.
- The amount of automated tests is much lower than you would expect, but monitoring and rollback tooling makes this less of a problem.
- Mono-repo tooling FTW.
- Craft is not about perfection. We want to push things out quickly, but also improve them quickly through smaller iterations. More on that in [Lenny's Podcast](https://www.lennyspodcast.com/inside-linear-building-with-taste-craft-and-focus-karri-saarinen-co-founder-designer-ceo/) called "Inside Linear: Building with taste, craft, and focus".
- A small effective team can do wonders.


### Wrapping up

I have a sense that Linear could be the place where I’ll do some of the best work of my career. And that's a great feeling to have.

Thanks for reading along.

