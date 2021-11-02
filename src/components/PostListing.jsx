import React from 'react';
import Post from './Post';
import {Link} from 'gatsby';

const PostListing = ({ posts }) => {
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
