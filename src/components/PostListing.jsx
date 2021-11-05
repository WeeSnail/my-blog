import React from 'react';
import Post from './Post';
import {Link} from 'gatsby';
import styled from 'styled-components';

const Card = styled.div`
  border: 1px solid var(--box-border);
  box-shadow: var(--box-shadow) -0.1rem 0.1rem;
  margin: 0.5rem;
`;

const PostListing = ({ posts }) => {
  return (
    <>
      <div className="columns is-multiline">
        {
          posts.map(post =>
            <Card key={post.id} className="column is-9">
              <Post
                title={post.frontmatter.title}
                subtitle={post.frontmatter.subtitle}
                date={post.frontmatter.date}
                slug={post.frontmatter.slug}
              />
            </Card>
          )
        }
        { /* Read more section: goes to paginated page */}
        <span className="column is-9">
          <Link to="/posts" className="button is-outlined read-more">
            Read More
          </Link>
        </span>
      </div>
    </>

  )

};

export default PostListing;
