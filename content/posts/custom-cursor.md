---
title: How to custom cursor (Part1)
subtitle: Setting up a custom cursor in a react.
date: 2022-01-02
slug: custom-cursor-part-1
author: Anes Marzooki
tags: [""]
---

The trend of custom cursor in personal websites is still going, and having a
customized pointer on a page can be a fun experience for the users(not so for the developer), and with
some healthy amount of micro interactions, hopefully we can awe our visitors to
stick around much longer and interact with as much elements on the page as possible.

Check out some the websites featured on Awwwards for the last 3 years, and
you'll get expose to a myriad of ways that people have found to implement
custom cursors on their websites.

I took some inspiration from different sources, and after some unhealthy amount
of coffee, I finally made it work and added a custom cursor to my personal
website.

## So what's the big deal?

Alright, so basically at its core, a custom cursor is an element which
coordinates get updated to follow the mouse's position.

It can be an **SVG**, an **image**, a styled **div**...anything really, that
doesn't matter right now.

The idea is to have an eventListener attach to the document or the window that
triggers the movement of the cursor element by changing the `x` and `y` values.

```javascript
window.onmosuemove = (e) => {
  cursor.style.left = `${e.pageX}px`
  cursor.style.top = `${e.pageY}px`
};
```

That the idea, but before we continue we need to understand the difference
between`pageX/Y` and `clientX/Y`.

## pageX and clientX

![clienXvsPageX](./clientx_pagex.png)

In layman's term:
* `pageX/Y` returns coordinates relatively to the `<html>` element.
* `clientX/y` returns coordinates relatively to the viewport.

Check this [stackoverflow](https://stackoverflow.com/questions/6073505/what-is-the-difference-between-screenx-y-clientx-y-and-pagex-y) thread.

## Now what?

This concludes part one, in part two we'll go deeper into the rabbit's hole,
and we'll emerge with a react component that's both beautiful and marvelous
that gives us an awesome implementation of the custom cursor anywhere we want.

See you on the other side.

[demo](/demos/demo1)


