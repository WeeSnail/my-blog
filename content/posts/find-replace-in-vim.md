---
title: Find and replace in vim
subtitle: Using the substitute command
date: 2021-11-25
slug: vim-find-replace
author: Anes Marzooki
tags: ["vim"]
---
## Finding a word

Vim provides it's own way when it comes to finding and changing words in a file.

You can find the next occurrence of a word if you put the cursor on it and press
`*`, or you can use `/` to search for a specific word in the file.

_(technically speaking files are buffers, potatoe potato! that's a different topic for another day)_.

With the cursor on the word, we can change it by using `caw`, or we can
highlight it and press `c` or `s`.

But what if we want to find all occurrences of 'Foo' in a file and
replace it with 'Bar' in a single command?

Enters the **substitute** command!.

## The Substitute command

The substitute command `:s` short for `:substitute`  allows us to match a
pattern and replace it with a string.

The syntax for the substitute command looks like this:

```vim
:[Range]s/{Search}/{Replace}/[Flag]
```

With the `:` pressed, we enter the command mode where we specify which command to run.
In our case it's the `s` command.

### Example

Say that we want to replace all the occurrences of 'Foo' with 'Bar',
in this case we need to provide the **range** `%` to the command to work on the whole file:

```vim
:%s/Foo/Bar/g
```
### Ranges

From the previous example, we gave the command the range `%`.

In Vim, some commands accept a _line range_ in front of them in the form a
`{number},{number}`. It consists of one or more line separated with comma `,` or semi-colon `;`

For example: `:1,6s/foo/bar/g` will substitute on the lines 1 to 6 (line 6 is included).
If the range is omitted, substitute will work on the current line **only.**

The range that we used before `%`, is a short way of saying from the first line
to the last line: `1,$`.

#### Here are some examples using the range:

* `:s/Foo/Bar/g`: replaces in the current line only.
* `:5,8s/Foo/Bar/g`: replaces in line 5 to 8 (including 8).
* `:.,$s/Foo/Bar/g`: replaces in current line to end of file.

But what about that `g` at the end? that's our flag.

### Flags

The `g` flag instruct the substitute command to replace all occurrences, if omitted,
substitution will only work for the first occurrence.

We can also use other flags like `c`, `i`, and `I`, etc.

* `:%s/Foo/Bar/gc`: prompts for confirmation on each occurrence.
* `:%s/Foo/Bar/gi`: ignores case.
* `:%s/Foo/Bar/gI`: doesn't ignore case.

## Delimiter

The pattern delimiter `/` which surrounds the pattern can be any other
single-byte character, but not an alphanumeric character [ `\`, `"`, `|` ]

Using a different delimiter is useful when we want to find and replace a string
that includes `/`:

For example we want to replace `/usr/bin/` with `/usr/ben/`, we'll use `+` as a
delimiter:
`:%s+/usr/bin/+/usr/ben/+g`.
