---
title: What about requestAnimationFrame()
subtitle: A layman guide to requestAnimationFrame
date: 2022-01-02
slug: requestanimationframe-guide
author: Anes Marzooki
tags: ['']
---

## Key notes

- Anytime we have an animation to run in the browser, we need to consider using
  the `requestAnimationFrame()` method.

- `requestAnimationFrame()` insures that an animation will run before the
  browser performs the next repaint. This allows you to execute code on the
  next screen repaint.

- And in case where it's running in background tabs or hidden the animation is
  paused for better performance.

- `requestAnimationFrame()` is optimized to run 60 frames per second.

## Syntax

Using the method is fairly simple, it takes a callback function
that contains the code to run:
`requestAnimationFrame(callback)`

- The callback is passed a single argument(_timestamp_) indicating the
  exact point in time **requestAnimationFrame()** was called.

- **requestAnimationFrame()**'s return value is the request id, a non-zero
  integer, that can be passed to `cancelAnimationFrame()` to cancel the
  callback request.

## Concept and usage

In the below example will use `requestAnimationFrame()` to animate an element:

```javascript
const elmt = document.querySelector('#elmt-to-animate');
let elmtY = 0;

requestAnimationFrame((timestamp) => {
  elmtY += 10;
  elmt.style.top = `${elmtY}px`;
});
```

One thing to note from the above example is that we're calling `requestAnimationFrame()`
one time, that's not much of an animation.

We want to have multiple requests to embrace the powers of `requestAnimationFrame()`.
That's why we'll be using it recursively:

```javascript
const elmt = document.queryn('#elmt-to-animate');
let elmtY = 0;

const animate = (timestamp) => {
  elmtY += 10;
  elmtY.style.top = `${elmtY}px`;

  requestAnimationFrame(animate); // recursive call
};

requestAnimationFrame(movediv);
```

Traditionally, we'd use `setTimeOut()` or `setInterval()` to achieve some sort
of movement or simply an animation, by running the animation function for/after
a set amount of time.

Using `setTimeout()`/`setInterval()` have its drawbacks, check these out:

- [setTimeout timing precision](https://stackoverflow.com/questions/51916637/settimeout-timing-precision)
- [setTimeout inaccuracy](https://stackoverflow.com/questions/21097421/what-is-the-reason-javascript-settimeout-is-so-inaccurate)
- [more on creative.js](http://creativejs.com/resources/requestanimationframe/index.html)

`setTimeout` results in an unnecessary repaint of the browser which causes
a layout thrashing.

So it's better to opt for `requestAnimationFrame()` for better performance.
