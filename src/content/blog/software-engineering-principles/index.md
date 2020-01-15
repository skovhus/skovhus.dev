---
title: Software Engineering Principles
date: "2020-01-13T20:00:00.000Z"
description: A list of the high-level technical principles and beliefs that I operate by when building software. Lots of links and references.
---

After reading the [principles of the React team](https://react.christmas/2019/24) I got inspired to write this post on the *high-level technical principles and beliefs that I operate by*.

These 8 principles are not meant to be exhaustive, and although I have gathered these over the last 20 years, they are definitely subject to change while I gain new perspectives and (*hopefully*) get wiser. I have added a bunch of links and recommendations, that I hope you find inspiring. ☕️



## People first, technology second

Technology's ultimate purpose is to advance humanity. If we do not put the human first in everything we do, then what is the point?

Before I studied computer science, I worked as a technical illustrator and later as a freelance web designer. I was always fascinated by human-computer interaction. Reading *Designing Web Usability* (1999) by Jakob Nielsen was a real eye-opener. Later in life, working together with really skilled UX designers and product owners changed how I approach problems.

We can easily get carried away solving problems and forgetting about the users. I believe all technologists will benefit from understanding user-centered and human-centered design.

Recommended material:
- [Offscreen](https://www.offscreenmag.com/) is my favorite print magazine on how we shape technology and how technology shapes us
- Donald Norman's classic best-selling book *The Design of Everyday Things* studies fundamental principles of great and meaningful design.
- Steve Jobs, just returned to Apple in 1997, as a [response](https://www.youtube.com/watch?v=dI93BvrBxQ0) to a tech-focused insult: *"You've got to start with the customer experience and work backward to the technology. You can’t start with the technology and try to figure out where you’re going to sell it."*.



## The only constant is change

The greek philosopher Heraclitus knew it 2500 years ago: *"Everything changes and nothing stands still"*.

Although a common metaphor, software is nothing like construction engineering or architecture. Code is organic, it evolves, and needs constant maintenance. I love the [analogy](https://www.artima.com/intv/garden.html) that software development resembles gardening. We are gardeners constantly dealing with things changing. And most changes do not turn out the way you expected.

To optimize a codebase for change:
- Keep things simple
- Prefer boring, explicit code
- Invest in documentation, automation, and tests
- Encapsulate code that is likely to change (e.g. vendor-dependent modules, business rules, and implementation details)
- Make ownership clear, and consider [product-mode over projects](https://martinfowler.com/articles/products-over-projects.html)
- Write code that is easy to delete, not easy to extend [(recommended reading)](https://programmingisterrible.com/post/139222674273/write-code-that-is-easy-to-delete-not-easy-to).



## Don't jump too quickly into solution mode

Solving problems is fun – usually more fun than planning. But you might find yourself jumping into solution-mode before understanding the problem. Instead, incorporate asking questions:
- What problem are we trying to solve?
- What ideas do we have to solve it?
- What are the positive and negative implications?
- Are there simpler solutions to the problem?
- What are our core assumptions?
- What are the technical details of the technologies used?

Be curious and come up with more open questions! I find it so rewarding to solve the right problem in a lean and simple way, and to avoid wasting time on the wrong path.



## Build-Measure-Learn

Requirements and your perspective will change as soon as you ship your solution (or simply show it to users). So avoid gold-plating your design or code, and get your solution in front of real users as fast as possible. Rather fail fast than waste time.

> In most projects, the first system built is barely usable... Hence plan to throw one away; you will, anyhow.
>
> – Fred Brooks, The Mythical Man-Month (1975)

Build quick prototypes, cut down on scope, and plan to throw code and designs away. Shorten the build-measure-learn cycle.



## Prefer duplication over the wrong abstraction

*"Don’t Repeat Yourself" (DRY)* is often misunderstood. Although programming is often about being lazy and avoiding repetition, prematurely sharing code can be really expensive. Even if the code and functionality look the same at the time, the requirements or direction might differ down the line.

Recommended material:
- Sandi Metz [*The Wrong Abstraction*](https://www.sandimetz.com/blog/2016/1/20/the-wrong-abstraction)
- Joe Spolsky [*The Law of Leaky Abstractions*](https://www.joelonsoftware.com/2002/11/11/the-law-of-leaky-abstractions/). "All non-trivial abstractions, to some degree, are leaky"
- Dan Abramov [*Goodbye Clean Code*](https://overreacted.io/goodbye-clean-code/).



## Invest in safety nets

*"We don't have time to write tests"* means you spend too much time bug fixing because you don't have the necessary safety nets. Have enough safety nets to not be afraid to deploy to production when merging your main branch. In case you end up breaking production, make sure to identify root causes, learn from your mistakes, and figure out new safety nets to implement.

Safety nets checklist:
- A bunch of automated unit and integration tests
- A few automated end-to-end system tests
- Documented manual procedures and test protocols (if needed)
- Infrastructure as code
- Ensure proper monitoring and alarms
- Process for incident [postmortems](https://landing.google.com/sre/sre-book/chapters/postmortem-culture/).



## Cross-functional teams

Splitting teams based on competence, or where in the stack their code runs, is easy, but often counter-productive. It introduces an overhead in terms of communication and requirements specifications. The most effective teams I have worked in, where all diverse and cross-functional (design, UX, frontend, backend, product, domain experts).



## Give back to the OSS community

Most software companies rely heavily on Open Source Software (OSS). Just enumerate all the different projects you depend on!

In 2017 my [new year's resolution](https://speakerdeck.com/skovhus/making-open-source-my-new-years-resolution) was to give back to the OSS community. It has been a great ride so far. Heck, one might say that this blog post is a continuation of that.

I do not expect anyone to spend their weekends and late evenings on open source. But why not convince your employer to contribute? Get time reserved for reporting bugs, triaging issues, doing pull requests, sharing knowledge in blog posts and talks, open-sourcing some useful homegrown system, or simply sponsor projects you depend upon.



### What are your engineering principles?

These are some of the high-level engineering principles I operate by when building software – I hope you found them useful.

Do you, or your team have a set of principles? I would love to hear about them.

---

*Thanks to [Maciek Pekala](https://twitter.com/penzington) for reviewing this post.*
