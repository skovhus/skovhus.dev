---
title: Moving Linear from styled‑components to StyleX
description: "How we are moving toward stricter styling contracts, less runtime work, and a more predictable foundation for Linear’s UI."
publishedAt: "2026-06-23"
---

I’ve spent more tokens on this migration than I’d like to admit.

Over the past few months, we’ve been migrating [Linear](https://linear.app/)’s React applications toward [StyleX](https://stylexjs.com/) using an increasingly repeatable agent-assisted workflow. The main reason for the migration is performance. Runtime CSS-in-JS means users pay for style generation and rule injection while the client renders.

But performance is only half the story.

styled-components served Linear surprisingly well. It kept styles close to components, gave us the full power of CSS, and made it easy to move quickly when a product surface needed something specific.

That freedom has a cost. CSS already makes styling at a distance easy, and `styled(Button)` makes it normal to reopen a component from the outside, instead of making the component’s styling contract explicit. Linear still feels cohesive because we care deeply about the UI, but caring only scales so far when it’s easy to override anything from anywhere.

StyleX is the next step for us: move styling work off the render path and build stricter foundations for the next phase.


## The tipping point

What pushed us over the edge was styled-components being put into [maintenance mode](https://opencollective.com/styled-components/updates/thank-you). After upgrading to React 18, we felt that directly: React introduced `useInsertionEffect` to help CSS-in-JS libraries avoid performance issues, but styled-components never adopted it.

While tracing the stalled [PR to adopt `useInsertionEffect`](https://github.com/styled-components/styled-components/pull/4332), I connected with its author, Cody Olsen at Sanity, and we ended up testing their optimized fork. Sanity’s [write-up](https://www.sanity.io/blog/cut-styled-components-into-pieces-this-is-our-last-resort) frames it as a “last resort” — the fork is a lifeboat, not a long-term plan.


## What we wanted from the next system

This migration away from styled-components was guided by a few non-negotiables:

- **Minimal runtime:** the bulk of style generation should happen at build time, not while the app renders.
- **Stronger encapsulation:** components should have clear styling contracts, and styling at a distance should be deliberately difficult. Styling at a distance is a maintenance nightmare, and combinator selectors such as `> *` can also be extremely expensive at scale (see [Maciek’s post about it](https://x.com/penzington/status/2066958532096782798?s=20)).
- **Deterministic resolution:** style merging should be predictable across files without relying on specificity games.
- **Healthy ecosystem:** the library should be actively maintained, compatible with modern React patterns, and likely to remain a good bet over the coming years.
- **Great developer/agent experience:** the system should make common cases simple, and give us pragmatic escape hatches for tricky ones. Styles should continue to live close to the components they belong to.


## Why StyleX

We looked at most React-compatible styling libraries. The closest alternative was [vanilla-extract](https://vanilla-extract.style/). It has solid static extraction and type safety, but the API felt fragmented and the need for separate styling files didn’t match how we prefer to work.

StyleX keeps styles local to components, gives us a small API, deterministic style resolution, type-safe styling contracts, and strict guardrails that make it harder to restyle components from the outside. It’s also actively maintained by Meta, used across most of their web surfaces, and adopted by companies like Figma and Cursor.

The strictness is not free. Migrating from the full flexibility of CSS template literals to a constrained atomic system means some patterns become harder: parent-dependent selectors, global selectors, and component restyling through wrappers.

But that is also the point. The patterns that are painful to migrate are often the same patterns that made styling harder to reason about at scale.


## Putting agents to work

When starting this project in January 2026, I really wished coding agents could just migrate our codebase automatically (oh, I tried). But styled-components hands you a Turing-complete language, the full power of CSS, and a completely open API. The number of ways people express the same intent is enormous, and it’s too easy to produce output that looks right but subtly isn’t.

And the fact that Linear doesn’t have a design system also made the migration a lot more challenging. We have shared components, with wide-open APIs rather than clear styling contracts. A lot of the migration cost is paying that down: removing some of that flexibility, tightening the APIs, and making components harder to restyle from the outside.

A deterministic codemod felt like a good investment: same input, same output. The last time I built a bigger codemod was 10 years ago with [`jest-codemods`](https://github.com/skovhus/jest-codemods), which moved test files between testing frameworks. [`styled-components-to-stylex-codemod`](https://github.com/skovhus/styled-components-to-stylex-codemod) is much more complex. It started with tons of test cases and a lot of architecture. Then I let agents loose, and it kept on growing.

The codemod is now at 500+ PRs, with roughly 100,000 lines of migration tooling, an [online playground](https://skovhus.github.io/styled-components-to-stylex-codemod/), cross-file selector handling, and regression coverage for most edge cases.


## Migration approach

The migration has to be incremental. styled-components and StyleX will coexist for a while, and we do not want to freeze product work while we shift the styling library that powers our applications.

Our approach:

- **Define the styling foundation first.** Before the codemod could do useful work, we had to define the StyleX variables, constants, and shared primitives that migrated components should point to. Linear has an elaborate nested runtime theming setup, not a simple flat token file, so we also added some tooling to support this using scoped StyleX variables provided by a custom `ThemeProvider`.

- **Spawn agents with clear scopes.** Give agents a narrow scope, a codemod runner, examples, validation scripts, and a clear checklist. Agents are much more useful when they can inspect the rendered UI and compare generated CSS against the original, but visual correctness is still the hard part. Complex hover states, theming branches, and small layout differences still need careful manual testing.

- **Start with leaf nodes.** We migrate components that don’t wrap or restyle other styled-components first. Smaller diffs, fewer cascade interactions, and we learn in lower-risk parts of the tree before moving into shared primitives.

- **Lint aggressively.** Custom lint rules make the desired path obvious and catch old patterns before they spread. Our adoption of [Oxlint](https://oxc.rs) really paid off: it’s easy and fast to extend with custom rules as regressions appear.

- **Escape hatches.** We use CSS Modules as a scoped, explicit escape hatch for problems that are still CSS-shaped: truly global selectors and third-party DOM restyling.


## Progress

At the time of writing, we’ve converted just over 58% of files, but the results so far are encouraging. When eliminating runtime CSS generation and injection, we’re seeing roughly 30% faster renders when navigating between pages.

![Live progress of the StyleX adoption.](https://storage.googleapis.com/static.linear.app/dev-reports/style-count-history.svg)

Honestly, this has been a fiddly project with plenty of styling regressions along the way. But it is the right direction for us: it speeds up the application while making changes safer as we grow.

This project also gave me some comfort: agents can do an astonishing amount of work, but humans are still very much needed to notice broken hover states, and build the systems that make agents productive.
