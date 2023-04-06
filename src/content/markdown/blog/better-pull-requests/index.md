---
title: Guidelines for Better Pull Requests
description: 7 tips and tricks for better pull requests to improve the feedback you get on your work and elevate the overall quality of the code and product.
date: "2020-08-12T10:00:00.000Z"
devToLink: https://dev.to/kenneth_skovhus/guidelines-for-better-pull-requests-3bho
---

Pull requests play a crucial role in ensuring quality code and efficient collaboration within software development teams. In this blog post, we'll explore 7 guidelines to help you create better pull requests that will enhance your workflow, streamline feedback, and elevate the quality of your projects.

### Background

During my work to align our development efforts at [Leo Innovation Lab](https://leoinnovationlab.com/) I stumbled upon [10 tips for better Pull Requests by Mark Seemann (2015)](http://blog.ploeh.dk/2015/01/15/10-tips-for-better-pull-requests/). The blog post aligned well with our perception of a good pull request (PR) and was a great starting point for discussions.

Below is my iteration of the original post. This is a condensed version with a focus on automation, tooling, context, and my personal learnings.

The goal of these guidelines is to make the pull request review process easier and will likely:

- improve the feedback you get on your work
- reduce the risk that your pull request will be rejected or become stale
- elevate overall the quality of the code and product.

## Guidelines

### 1. A single concern per pull request

> The more concerns you address in a single Pull Request, the bigger the risk that at least one of them will block acceptance of your contribution. Do only one thing per Pull Request. It also helps you make each Pull Request smaller.
>
> – Mark Seemann

If you often clutter PRs with multiple concerns then ask yourself why. Maybe your CI setup is slow? Maybe merging is cumbersome? In any case, start by fixing the underlying problems to enable you to **do only one thing and make your PRs small**.

What is a small PR? A good rule of thumb is to limit the scope of your PR to a maximum of a few days of work, preferably less. For instance, if you're fixing a bug, make sure the PR only addresses that specific issue, rather than including unrelated improvements or refactoring. This also gives a great sense of progress. And usually you can break work up into smaller daily deliverables.

### 2. Short-lived feature branches

Avoid any long-lived feature branches. Getting your changes into the main branch as quickly as possible is often the most productive. It might require that you invest in setting up a system for supporting [feature toggles](https://martinfowler.com/articles/feature-toggles.html).

### 3. Utilize proper tooling

A reviewer should not spend any time nitpicking over style, ensuring that tests pass or figuring out if the code coverage dropped. Instead you should **invest in tooling and automate any verification steps**. Block any merging until your CI server is happy and let your reviewers focus on more interesting topics than nitpicking over line width or spinning up the project on their local machine.

### 4. Add appropriate context

Adding context for the suggested change is important for the review process. This also serves for future reference when someone is trying to understand why a change was made.

Include the following in your PR description:

- link to bug ticket or issue (if a link is missing this is usually an indicator that the work is not planned)
- a description of the suggested change
- relevant design considerations and alternative solutions considered
- checklist with TODOs if the pull request is a draft
- if the change can be represented visually, then add a screenshots/gif/video showing how the state before and after the change. Note that this also applies for a backend change (e.g. diff the GraphQL endpoint, show a database optimization using `EXPLAIN` or similar)

I recommend using a **pull request template** to guide and ensuring that the relevant fields are filled out.

### 5. Document your code

Strive for self-documenting code (e.g. using clear and consistent naming, types and function signatures). But if you need to explain the code logic in the PR description, then it probably calls for better code comments.

Code comments should document the why, not the how. Commit messages is also a great place for additional context.

### 6. Write well

Use correct spelling, grammar, and punctuation in code, code comments, [commit messages](https://chris.beams.io/posts/git-commit/), and pull requests. If you don't, your prose (and code) is harder to understand for the reviewers and future maintainers. Note that most code editors can be configured to help you with these concerns.

### 7. Avoid commit thrashing

When a PR is in review, please avoid rewriting the history on the branch (e.g. amending, squashing, or rebasing in general) and address any review comments in new commits.

If you need to update the branch then avoid trashing the commit history with `Merge branch 'master' into MY-BRANCH` commits. This can be done by using **rebase instead of merging** (e.g. `git pull --rebase origin master` if you are using git).

## Summary

In summary, creating better pull requests involves focusing on a single concern, keeping feature branches short-lived, utilizing proper tooling, providing context in your PR, and documenting your code effectively. By following these guidelines, you'll improve your collaboration with your team and elevate the overall quality of your projects."
