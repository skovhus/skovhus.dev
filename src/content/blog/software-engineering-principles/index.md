---
title: My Software Engineering Principles
date: "2020-01-08T12:00:00.000Z"
description: To make it easier to understand my modus operandi, I've compiled a list of high-level technical principles and beliefs that I operate by.
---

To make it easier to understand my modus operandi, I've compiled a list of *high-level technical principles and beliefs that I operate by*.

These principles are not meant to be exhaustive, and they are definitely subject to change while I gain new perspectives and (hopefully) get wiser. I got inspired to write this post after reading the [principles of the React team](https://react.christmas/2019/24).


## People first, technology second

Technology's ultimate purpose is to advance humanity. If we do not put the human first in everything we do, then what is the point?

We can easily get carried away solving problems and forgetting about the users – the why. I believe all technologists will benefit from understanding user-centered and human-centered design.

Before I studied computer science, I worked as a technical illustrator and later as a freelance web designer. I was always fascinated by human-computer interaction. Reading *Designing Web Usability* (1999) by Jakob Nielsen was a real eye-opener. Later in life, working together with really skilled UX designers changed how I approach problems.

Recommended material:
- [Offscreen](https://www.offscreenmag.com/) is my favorite print magazine on how we shape technology and how technology shapes us
- Donald Norman's classic best-selling book *The Design of Everyday Things* studies fundamental principles of great and meaningful design.
- Steve Jobs' [response](https://www.youtube.com/watch?v=dI93BvrBxQ0) from 1997, just returned to Apple, as a response to a tech-focused insult: *"You've got to start with the customer experience and work backward to the technology. You can’t start with the technology and try to figure out where you’re going to sell it."*



## The only constant is change

The greek philosopher Heraclitus knew it ~2500 years ago: *"Everything changes and nothing stands still"*.

Although a common metaphor, software is nothing like construction engineering and architecture. Code is organic, it evolves, and needs constant maintenance. I like the [analogy](https://www.artima.com/intv/garden.html) that software development resembles gardening. We are gardeners constantly dealing with things evolving.

To optimize a codebase for change:
- Keep things simple
- Prefer boring explicit code
- Invest in documentation, automation, and tests
- Encapsulate hard decision (or decisions likely to change) from other components in the system
- Prefer products over [projects](https://martinfowler.com/articles/products-over-projects.html)
- Write code that is easy to delete, not easy to extend [(recommended reading)](https://programmingisterrible.com/post/139222674273/write-code-that-is-easy-to-delete-not-easy-to).



## Ask open questions

Incorporate asking questions into your daily routine – both around the technologies used and the problem you are solving:
- What problem are we trying to solve?
- Is this even worth doing at all?
- Is there a simpler way?

Besides, spend your time understanding the technical details of the tools you use. Eventually, the details will leak through.

If there are multiple solutions to a problem, make pros and cons list and share them with your team members.



## Build-Measure-Learn

Requirements and your perspective will change as soon as you ship your product/software (or simply show it to users). So avoid gold-plating your design or code, and get your solution in front of real users as fast as possible. Rather fail fast than waste time.

> In most projects, the first system built is barely usable... Hence plan to throw one away; you will, anyhow.
>
> – Fred Brooks, The Mythical Man-Month (1975)

So build quick prototypes, cut down on scope, and plan to throw code and designs away. Shorten the build-measure-learn cycle.


## Pick your battles

Gandalf was right. Time is our most scarce resource, and we should prioritize wisely. It means picking *meaningful* battles that we have a chance winning.

A lot of time can easily be wasted on nitpicking, while important issues are completely ignored. I love the [bike-shed analogy](http://phk.freebsd.dk/sagas/bikeshed/) by Poul-Henning Kamp as a classic example of Parkinson's law of triviality.



## Prefer duplication over the wrong abstraction

*"Don’t Repeat Yourself"* is often misunderstood. Although programming is about avoiding work, prematurely sharing code can be really expensive. Although the code and functionality look the same, the requirements or direction might differ.

Recommended material:
- Sandi Metz [*The Wrong Abstraction*](https://www.sandimetz.com/blog/2016/1/20/the-wrong-abstraction).
- Joe Spolsky [*The Law of Leaky Abstractions*](https://www.joelonsoftware.com/2002/11/11/the-law-of-leaky-abstractions/). "All non-trivial abstractions, to some degree, are leaky".



## Invest in safety nets

*"We don't have time to write tests"* means you spend too much time bug fixing because you don't have enough safety nets. Have enough safety nets to not be afraid to deploy to production when merging your main branch. In case you end up breaking production, then ensure to facilitate a postmortem identifying root causes, learn from your mistakes, and figure out new safety nets to implement.

Safety nets checklist:
- A bunch of automated unit and integration tests
- A few automated end-to-end system tests
- Documented manual procedures and test protocols (if needed)
- Infrastructure as code
- Ensure proper monitoring and alarms
- Process for incident [postmortems](https://landing.google.com/sre/sre-book/chapters/postmortem-culture/).


## Cross-functional teams

Splitting teams based on competences, or where in the stack their code runs, is easy, but counter-productive and sub-optimal. It introduces an overhead in terms of communication and requirements specifications. The most effective teams I've ever worked in, where all diverse cross-functional (design, UX, frontend, backend, product, domain experts).


## Give back to the OSS community

Most software companies rely heavily on Open Source Software (OSS). Just enumerate all the different projects you depend on!

In 2017 my [new year's resolution](https://speakerdeck.com/skovhus/making-open-source-my-new-years-resolution) was to give back to the OSS community. It has been a great ride so far. Heck, one might say that this blog post is a continuation of that.

I'm not expecting anyone to spend their weekends and late evenings on this. But why not convince your employer to contribute? Get reserved time for reporting bugs, triaging issues, doing pull requests, sharing knowledge in blog posts and talks, open-sourcing some useful homegrown system, or simply sponsor projects you depend upon.


## What are your engineering principles?

These are some of the high-level engineering principles I operate by when building software.

Do you, or your team have a set of principles? I would love to hear about them.
