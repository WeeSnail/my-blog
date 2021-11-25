---
title: Comments in Gatsby blog
subtitle: How to add comments to a Gatsby blog
date: 2021-11-16
slug: add-comment-to-gatsbyjs-blog
author: Anes Marzooki
tags: ["Gatsby", "Blog", "Guide"]
---

## Gitalk Comment

After setting up this blog, I wanted to spice things up by adding a **comments** section.

From what I've gathered, having a commenting feature on a blog is a _great option
for the readers to
interact with the author and give feedback_.

Searching for the topic, I came across many options for adding comments to a
blog site.  Now, mine is powered by Gatsby, so naturally, I looked at this
[documentation](https://www.gatsbyjs.com/docs/how-to/adding-common-features/adding-comments/)
on adding comments.

From the list suggested by Gatsby's team, two options caught my eye:
[Gitalk](https://gitalk.github.io/) and [Utterances](https://utteranc.es/).

The two options are **Ads-free**, **Open source** ,and **lightweight**, and that's right up my alley.

I wanted something free and easy to maintain so I went with **Gitalk**: _a comment component based on GitHub issues_.

---
## [Gitalk](https://gitalk.github.io/)'s key features

- It's Serverless, meaning that there are no performance drawbacks.
- Comments are stored as GitHub issues so you have full control.

---
## Configuration

The Gitalk's documentation recommends creating a separate repository to manage the comments.
I don't need that, I can just use the blog's repository, as its issues section is practically irrelevant.

There are two ways to implement gitalk:

- Using gitalk on its own.
- Using a gatsby plugin.
I went with the latter option.

---

## Step 1: Create a GitHub Application

If you don't have a GitHub application for the blog, you need to [create](https://github.com/settings/applications/new) one.
- Provide an **Application name**.
- A **Homepage URL** (*which should be the URL of the blog*).
- A **Description**.
- And an **Authorization callback URL** (*which should also be the URL of the blog*).

---
## Step 2: Generate a Client ID and a Client Secret

- Click 'Register application' and generate a **Client ID** and a **Client Secret**.
- Add entries for `CLIENT_ID` and `CLIENT_SECRET` to your `.env` file.
```js
CLIENT_ID=<your_generated_client_ID>
CLIENT_SECRET=<your_genereated_client_secret
```

---
## Step 3: Install Gitalk Gatsby plugin

There's a [plugin](https://github.com/suziwen/gatsby-plugin-gitalk) that simplifies adding Gitalk to Gatsby project.

```
$ npm install -S gatsby-plugin-gitalk
```

---
## Step 4: Configure gatsby-config.js

### Method 1 (not recommended):

- Add the plugin and its configuration to your `gatsby-config.js`
```js
...,
plugins: [
  ...,
  {
    resolve: `gatsby-plugin-gitalk`,
    options: {
      config: {
        clientID: <your_generated_client_ID>, // client ID.
        clientSecret: <your_genereated_client_secret>, // client Secret.
        repo: 'my-blog', // this must be the name of the repo.
        owner: 'thatGuyAnes', // your github username.
        admin: ['thatGuyAnes'] // your github username.
      }
    }
  },
],
```

### Method 2 (recommended):

- Create a `utils/` folder inside the root of the project.
- Navigate to `utils/` and create a file called `gitalk-options.js`
```
$ mkdir utils & touch gitalk-options.js
```
- Add and export the configuration option for the plugin from the `gitalk-options.js` file:
```js
module.exports = {
  config: {
    clientID: process.env.CLIENT_ID, // client ID.
    clientSecret: process.env.CLIENT_SECRET, // client Secret.
    repo: 'my-blog', // this must be the name of the repo.
    owner: 'thatGuyAnes', // your github username.
    admin: ['thatGuyAnes'] // your github username.
  }
}
```
Other options can be found [here](https://github.com/gitalk/gitalk#options).

- Import and add the plugin to the plugins array in your `gatsby-config.js`:
```js
const gitalkConfig = require('./utils/gitalk-options');
... 
module.exports = {
  ...,
  plugins: [
  {
    resolve: `gatsby-plugin-gitalk`,
    options: gitalkConfig
  }
  ]
}
```
---
## Step 5: Adding the comment component to the post template

```js
...
import Gitalk from 'gatsby-plugin-gitalk';
import '@suziwen/gitalk/dist/gitalk.css';
...

const PostTemplate = ({data}) => {
  let gitalkConfig = {
    title:data.mardkdown.frontmatter.title,
    };
  return (
     <Gitalk options={gitalkConfig}/>
  )
};

export const query = graphql`
    query($slug: String) {
      markdownRemark(frontmatter: {slug: {eq: $slug}}) {
        html
        frontmatter {
          title
          subtitle
        }
        }
      }
    `
export default PostTemplate;
```

---
## Initialization
---
Gitalk requires manual initialization, so the first time for each post you need to login with your GitHub.

Now, you can find the comments as issues in the blog's repo.
