import React from 'react';
import Post from './Post';
import {Link} from 'gatsby';
import styled from 'styled-components';

const Card = styled.div`
  border: 1px solid var(--box-border);
  margin: 1rem;
  box-shadow: -0.1rem 0.1rem 0 var(--box-shadow);
  transition: box-shadow 0.2s ease 0s, transform 0.2s ease 0s;
  &:hover {
    box-shadow: -0.4rem 0.4rem 0 var(--box-shadow);
    transform: translate(4px, -4px);
  }
`;


const PostListing = ({ posts }) => {
  return (
    <>
      <div className="columns is-multiline">
        {
          posts.map(post =>
            <Card key={post.id} className="column is-9 is-button">
              <Post
                title={post.frontmatter.title}
                subtitle={post.frontmatter.subtitle}
                date={post.frontmatter.date}
                slug={post.frontmatter.slug}
              />
            </Card>
          )
        }
      </div>
    </>

  )

};

export default PostListing;
