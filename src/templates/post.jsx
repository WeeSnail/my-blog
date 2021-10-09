import React from 'react';
import Layout from '../components/Layout';

const Post = ({pageContext}) => {
  return (
    <Layout>
      <h1>Post detail page</h1>
      <p>ID: {pageContext.post.id}</p>
      <p>Title: {pageContext.title}</p>
      <p>Body: {pageContext.body}</p>
    </Layout>
  )
};

export default Post;
