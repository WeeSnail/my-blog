import React from 'react';
import Post from './Post';

const PostListing = ({posts}) => {
  return (
    <>
      <div className="columns is-multiline">
        {
          posts.map(post =>
            <div key={post.id} className="column is-9">
              <Post
                title={post.frontmatter.title}
                subtitle={post.frontmatter.subtitle}
                date={post.frontmatter.date}
                slug={post.frontmatter.slug}
              />
            </div>
          )
        }
      </div>
    </>

  )

};

export default PostListing;
