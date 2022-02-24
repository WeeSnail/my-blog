import React from 'react';
import Post from './Post';
import styled from 'styled-components';

const Card = styled.div`
  border: 1px solid var(--box-border);
  margin-bottom: 1rem;
  width: 100%;
  box-shadow: -0.1rem 0.1rem 0 var(--box-shadow);
  transition: box-shadow 0.2s ease 0s, transform 0.2s ease 0s;
  &:hover {
    box-shadow: -0.4rem 0.4rem 0 var(--box-shadow);
    transform: translate(4px, -4px);
  }
  div {
    h2 {
      font-weight: 400;
      @media (max-width: 480px) {
        font-size: 5vw;
      }
    }
  }
`;

const CardsList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const PostListing = ({ posts }) => {
  return (
    <>
      <CardsList className="cards-list">
        {
          posts.map(post =>
            <Card key={post.id} className="column is-9 is-button post-card">
              <Post
                title={post.frontmatter.title}
                subtitle={post.frontmatter.subtitle}
                date={post.frontmatter.date}
                slug={post.frontmatter.slug}
              />
            </Card>
          )
        }
      </CardsList>
    </>

  )

};

export default PostListing;
