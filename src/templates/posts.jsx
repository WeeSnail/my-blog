import React from 'react';
import Layout from '../components/Layout';
import { Link } from 'gatsby';

const Posts = ({pageContext}) => {
  return (
    <Layout>
      <ul>
        {
          pageContext.posts.map((post) =>
            <li key={post.id}>
              <Link to="/">{post.title}</Link>
            </li>
          )
        }
      </ul>
    </Layout>
  )
}

export default Posts;

