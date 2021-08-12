---
title: Migrating from Flow to TypeScript using flow-to-ts
date: "2020-02-09T12:00:00.000Z"
description: Over the last couple of years, I have been migrating several codebases from Flow to TypeScript with minimal effort. In this post, I will describe my motivation and the approach I would recommend.
devToLink: https://dev.to/kenneth_skovhus/migrating-from-flow-to-typescript-using-flow-to-ts-532p
featuredImage: "/blog/flow-to-typescript-migration.jpg"
---

Over the last couple of years, I have been migrating several codebases from [Flow](https://flow.org/en/) to [TypeScript](https://www.typescriptlang.org/) with minimal effort. In this post, I will describe my motivation and the approach I would recommend.

_TL;DR I recommend migrating using the [flow-to-ts](https://github.com/Khan/flow-to-ts) codemod by Khan Academy._

## Motivation

I started using Flow shortly after it was open sourced by Facebook in [2014](https://engineering.fb.com/web/flow-a-new-static-type-checker-for-javascript/). It supports many of the same features as TypeScript (open sourced by Microsoft 2012) but focuses on being a static type checker where TypeScript is also a compiler. I originally picked it over TypeScript due to the momentum in the React community and the easy gradual migration path for existing code.

But as the TypeScript community and tooling have been rapidly improving, I decided to abandon the Flow ship. This also seems to be a trend in the open source community (example: [Jest](https://github.com/facebook/jest/issues/7807), [Yarn](https://dev.to/arcanis/introducing-yarn-2-4eh1), and [Expo](https://github.com/expo/expo/issues/2164)).

My primary motivation for moving to TypeScript:

- TypeScript seems more **well-maintained** and more people working on it: In January 2020 TypeScript had 29 contributors, Flow had 14 contributors, and there were 156 pull requests merged compared to no Flow pull requests merged
- in my experience, it is easier to onboard new people to a TypeScript codebase as it is **more widely used and the online material is vast**
- in most **editors** (notably Microsoft' Visual Studio Code) TypeScript shines: auto import, refactoring, quick error reporting out of the box
- more **third-party types** are available (estimated to roughly 8X)
- more **libraries are written in TypeScript** (naturally improving the quality of the interface types compared to reverse engineering the types)
- too often I've discovered **Flow silently bailing** out type checking, I have not experienced this with TypeScript
- although Flow should be more [_sound_ by design](https://github.com/facebook/flow/issues/7365#issuecomment-454956694), I uncovered **type-related bugs** after migrating a codebase from Flow (maybe related to Flow silently bailing out type checking)
- **installing types using npm** / [DefinitelyTyped](https://github.com/DefinitelyTyped/DefinitelyTyped) makes a lot of sense compared to [flow-typed](https://github.com/flow-typed/flow-typed) where type definitions are checked into your repository (and you forget to update them)
- the feature sets and syntax are very comparable, so **migration is easy** (see this great [comparison](https://github.com/niieani/typescript-vs-flowtype))
- I have experienced **Flow running out of memory** when type checking a React Native projects. It was a real defeat that I needed to disable type-checking on CI as we ran out of memory. 🤦🏼‍♂️

## Approach

I tried out a bunch of different tools (codemods), that automates the refactoring from Flow to TypeScript. If the concept of automated refactoring with codemods is new to you, you might find [a talk I gave on the topic](https://www.youtube.com/watch?v=eMI0UBav8Q4) interesting.

The best migration tool I have found is Khan Academy's [flow-to-ts](https://github.com/Khan/flow-to-ts). From their README:

> The goal of this project is to provide a tool that can translate 95% of Flow to TypeScript while maintaining a high percentage of the existing type information.

**⚠️ A word on code reviews**: You will end up changing most files in your project, so it will be difficult to review. To make this process as easy as possible, I recommend that you make a separate commit for each of the following steps.

### Step 1: Prepare your codebase

Before running flow-to-ts I recommend preparing your codebase for type-checking using TypeScript.

1. Remove any checked-in types (typically in a flow-typed folder) and config:

```bash
rm -rf flow-typed .flowconfig
```

2. Install the TypeScript package:

```bash
yarn add --dev typescript
# or
npm install --save-dev typescript
```

3. Remove the Flow package:

```bash
yarn remove flow-bin
# or
npm remove flow-bin
```

4. Setup a tsconfig.json file for configuring TypeScript. There are many ways to do this, but running `npx tsc --init` is a good start. [Read more](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html) about the configuration file.

5. Update your linter to support TypeScript. I would recommend using [TypeScript ESlint](https://github.com/typescript-eslint/typescript-eslint)

6. Update your build setup to support TypeScript. Here are a few pointers for some popular setups:
   - [Create React App](https://create-react-app.dev/docs/adding-typescript/)
   - [Babel setup](https://devblogs.microsoft.com/typescript/typescript-and-babel-7/)
   - [Webpack](https://webpack.js.org/guides/typescript/)

### Step 2: Migrate all the things!

1. Run the flow-to-ts code transformation:

```bash
# Replace src with your source folder or a glob
npx @khanacademy/flow-to-ts --write --delete-source src
```

2. [Optional] If you use a code formatter (like [Prettier](https://prettier.io/)) then format your new codebase

3. Commit the changes (e.g. "Migrate to TypeScript using flow-to-ts codemod")

4. This is the most **time-consuming** part: try compiling the project with TypeScript and fix each problem you encounter:

```bash
npx tsc --noEmit -p .
```

Start from the top and move your way through... It will take some time. You probably need to install a bunch of types for your libraries (e.g. `@types/react`).

If you find yourself doing a lot of repetitive fixes, please share these in an issue over at the [flow-to-ts repository](https://github.com/Khan/flow-to-ts) and help improve the codemod.

5. Finally, when everything compiles again, check that you can lint and build your project

6. 🥂

7. [Optional] You can now remove any [Flow suppression comments](https://flow.org/en/docs/config/options/#toc-suppress-comment-regex) (e.g. `$FlowFixMe`)

8. [Optional] Some Flow utility types are replaced by the [utility-types](https://github.com/piotrwitek/utility-types) package. You can get rid of some of them if you like (e.g. `$Keys<T>` can be replaced by `keyof T`).

## How much effort does it take?

It all depends on the quality of your Flow types, the libraries you use, and the size of your codebase.

With the flow-to-ts codemod, you can quickly try out TypeScript on an existing codebase and assess how much work the manual part of the migration would take.

I converted a 30K lines React Native app in a few days. While doing this, I also spend time fixing a few potential bugs that TypeScript uncovered. 🎁

So long Flow! 👋 And thanks for all the checking + healthy competition in the static type space.

---

_Thanks to [Mads Hartmann](https://twitter.com/mads_hartmann) for reviewing this post._
