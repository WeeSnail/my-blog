---
title: Gatsby document not found on build
subtitle: Fixing gatsby's build error.
date: 2022-01-03
slug: gatby-document-not-found
author: Anes Marzooki
tags: ['']
---

During the build phase of Gatsby, you might be lucky to encounter a `document is not defined` error.

In itself, it's not a big deal if we tried to understand where does it come from.

I was lucky enough to face this error, and not only that, but the culprit was a
third party library that make use of the window object :(

The error message is self explanatory for some of us, but if you'd never had the
chance to work in a node environment then be prepared to spend the next three
hours debating whether Gatsby was a good choice to go with in the first place or not.

## Under the hood

During the build time, `window` and `document` are "foreign" objects to Gatsby.

In Node there's no such thing as `window` or `document` or any browser API for that matter.

In your code, you might've been working with these so called "browser global objects" that work
on ...well, the browser!

And so during Gatsby's build process a code referencing `document` will yield the `document is not defined` error.

So now we know that somewhere in our code we (or a library) are referencing the browser's document object.

## But how to fix?

Well, we can leverage the power of the `useEffect` hook to contain the code
that's using `document` in it's scope, making sure to only run our code when
the document object is nice and ready for changes.

Or we can use an if condition to check whether we have a `document` or not.

```javascript
const isReady = typeof document !== 'undefined';
if (isReady) {
  /* Do something cool with document */
}
```

The third option and the one that fixes my case, is to use Gatsby's node API.

Create a `gatsby-node.js` file if you haven't already, and modify the webpack's configuration.

In my case I wanted to ignore an npm module called splitting:

```javascript
//gatsby-node.js

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === 'build-html' || stage === 'develop-html') {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /splitting/,
            use: loaders.null(),
          },
        ],
      },
    });
  }
};
```
