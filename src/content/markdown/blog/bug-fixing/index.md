---
title: My mental model for fixing software bugs
description: I tried to generalize my mental model for fixing bugs. It boils down to a 4 step process with a strong focus on improving safety nets.
date: "2021-04-30T10:00:00.000Z"
devToLink: https://dev.to/kenneth_skovhus/my-mental-model-for-fixing-software-bugs-367p
featuredImage: "./bug.jpeg"
---

> If debugging is the process of removing software bugs, then programming must be the process of putting them in.
>
> – Edsger Dijkstra

I really enjoy fixing software bugs! The detective work, building up a hypothesis about the underlying root cause, digging through paper trails and turning stones to find the culprit. But what I enjoy the most is the **opportunity to improve the system**. Unfortunately, this last step is sometimes skipped by quickly squashing a bug and then carrying on with other activities.

While a quick fix seems efficient you miss important learnings and a perfect opportunity to:

- clean up technical debt and making your system easier to maintain
- helping co-workers and future you to not commit the same mistake again
- understand the quality of your system's safety nets
- lay the groundwork for spending less time fire fighting and more time developing.

I tried to generalize my mental model for fixing bugs. It boils down to a 4 step process:

1. determine the severity: do we need to do anything about the issue right now?
2. improve safety nets: how can we catch the bug now and avoid similar bugs in the future?
3. the actual fix
4. post-mortem analysis (if applicable)

### Step 1: Determine the severity 🐛

When a bug (or incident) is discovered the first step is to determine the severity. If you are working on fixing an issue that is already triaged or prioritized, you can skip this step and go straight to step 2.

Some questions to consider:

- if the issue revealed itself after a release, should we just roll back or revert?
- is there anything else we can do right now to restore the service(s)?
- do we need to inform anyone about the issue (e.g. product owner, customers or your co-workers)?
- when should the issue be fixed? We should always be mindful to avoid (context switching)[https://blog.doist.com/context-switching/].

### Step 2: Improve safety nets 🚨

How can we enable our system to catch or highlight the issue – now _and_ in the future?

The answer to this question might include adding one or more of the following safety nets:

- improve the linting setup
- introduce or refine a static type
- automated tests (unit, integration, end-to-end)
- add support for feature flags for faster rollbacks
- improve monitoring, alerting or observability
- manual test protocol (should be a last resort).

**Word of caution:** establish these safety nets by working _within the system_ and avoid extensive refactoring that might introduce new regressions.

At the end of this step, we hopefully have a red lamp.

If you feel you don't have time to improve your safety nets before fixing the issue then take a step back. How can you get more time to fix this properly? If the production system is in a really bad state could you revert to a previous version? Could you disable the broken feature by flipping a feature flag? Buy yourself some time to improve the system (hopefully it will pay off).

### Step 3: The fix ✅

Now is the time to fix the code, infrastructure configuration, or what caused the bug or regression. Turning the lamp green is often the easy part.

### Step 4: Post-mortem analysis

You should consider if the severity of the bug merits a post-mortem.

A post-mortem is a blame-free analysis and discussion soon after an incident or event has taken place to learn from the experience. It ensures that an incident is documented, that all contributing root cause(s) are well understood, and, especially, that we learn from the incident and that preventive actions are put in place to reduce the likelihood and/or impact of recurrence.

I recommend that you trigger a post-mortem in case of data loss of any kind, user-visible downtime or degradation, manual developer intervention (e.g. release rollback) or when we lost a substantial amount of time firefighting.

This [guide](https://www.atlassian.com/incident-management/postmortem) seems like a great resource if you want to learn more about incident management using post-mortem.

Happy debugging!

![On September 9, 1947, the world's first computer bug was recorded by Grace Hopper. It was a real-life moth that was causing issues with the computer’s hardware.
](./bug.jpeg)
