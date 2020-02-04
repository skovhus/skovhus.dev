---
title: React PropTypes to Flow codemod
description: I’m presenting how to automatically convert your existing codebase using React PropTypes to use more powerful Flow annotations.
date: "2017-04-11T15:00:00.000Z"
featuredImage: "./flow-unsplash.jpg"
---

_I’m presenting how to automatically convert your existing codebase using React PropTypes to use more powerful Flow annotations. If you already seen why this is valuable, you can skip down to the next section._ 👇🏻

![Eye candy, because you deserve it (unsplash.com/@thekorus)](./flow-unsplash.jpg)

If React were Facebook’s gateway drug to declarative and composable UI, React PropTypes introduced a lot of people to type checking.

PropTypes documents a given component’s props and gives runtime validation of props during development. I find them really helpful, but they also have [several shortcomings](http://technologyadvice.github.io/eradicate-runtime-errors-in-react-with-flow/). Most notably we should aim to catch errors before opening our browser. Say hello to static type checking.

To statically type-check an application, you can use JavaScript extensions like [Flow](https://flow.org/) or [TypeScript](https://www.typescriptlang.org/). In this blog post I’m focusing on Flow, but the same approach can be applied to TypeScript.

## No doubt (to me): Static type checking (using Flow or TypeScript) at build time is vastly superior to runtime validation.

If you are new to Flow, the [new documentation is really good](https://flow.org/). After setting up Flow you can now start type annotating your components state and props. For a simple component it might look like:

```javascript
/* 1) Using good old PropTypes */
function Button({ message }) =>
  <button>{message}</button>;

Button.propTypes = {
  message: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.instanceOf(Message)
  ]).isRequired,
};

/* 2) Using Flow annotations */
type Props = {
  message: string | number | Message,
};

function Button({ message }: Props) =>
  <button>{message}</button>;
```

So far so good. But transitioning an existing codebase to use Flow annotations instead of PropTypes can be tedious... However this is a perfect task for a codemod!

## Time to mod the code

To automate the conversion of React PropTypes to Flow annotations, we are using another tool popularized by Facebook: [jscodeshift](https://github.com/facebook/jscodeshift) (JavaScript codemod toolkit).

If the concept of automated refactoring with codemods is new to you, I’ll promote a meetup talk I did: ["Introduction to automated refactoring with JS codemods (Copenhagen.js Meetup, December 2016)"](https://www.youtube.com/watch?v=eMI0UBav8Q4):

[![Introduction to automated refactoring with JS codemods (Copenhagen.js Meetup, December 2016)](https://img.youtube.com/vi/eMI0UBav8Q4/0.jpg)](https://www.youtube.com/watch?v=eMI0UBav8Q4)



Enough talk. Time to get rid of the PropTypes! Turns out [Billy Vong](https://github.com/billyvg) already did a lot of the hard work for us with [codemod-proptypes-to-flow](https://github.com/billyvg/codemod-proptypes-to-flow).

So to automatically convert all components in a folder my-components:

- `git clone https://github.com/billyvg/codemod-proptypes-to-flow`
- `jscodeshift -t codemod-proptypes-to-flow/src/index.js my-components`
- Look no PropTypes! (Although `createClass`, imported and custom PropTypes validators are not supported — yet!)

I’ve successfully used this codemod for multiple projects, and it eased the transition remarkably. Now Flow starts finding errors while you write code instead of when the code is executed! 🍷 🙌🏻

---

Notice that there are cases where you want to keep your PropTypes (possible alongside Flow annotations):
- PropTypes in library code can help consumers and document an interface
- If you have no automated tests validating your flow definitions of any external resources (like an API), PropTypes can be really helpful. For this I would recommend using [babel-plugin-flow-react-proptypes](https://github.com/brigand/babel-plugin-flow-react-proptypes) to add PropTypes at build time
- PropTypes are still great for learning material on React (no need to burden new people with Flow/TypeScript)
- PropTypes can be more flexible than what the Flow type-checker currently supports (e.g. [validating a number is in a particular range](https://twitter.com/Daniel15/status/851232924225556480))

---

*Thanks to [Maciek Pekala](https://twitter.com/penzington) and [Mads Hartmann](https://twitter.com/Mads_Hartmann) for reviewing this post.*

*This blog post was originally posted on [medium/netscape](https://medium.com/netscape/react-proptypes-to-flow-codemod-9757f5ec5381).*
