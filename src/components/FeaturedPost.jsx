import React from 'react';
import {Link} from 'gatsby';

const style = {
    card: {
        marginTop: "100px"
    },
    time: {
        fontSize: "12px"
    }
};

const FeaturedPost = ({post}) => {

    return (
        <div className="card" syle={style.card}>
            <div className="card-content">

                <div className="media">
                    <div className="media-content">
                        <p className="title is-4">{post.frontmatter.title}</p>
                        <p className="subtitle is-6">{post.frontmatter.author}</p>
                    </div>
                </div>

                <div className="content mb-1">
                    {post.frontmatter.subtitle}
                    <br />
                    <time style={style.time} dateTime={style.time}>
                        {post.frontmatter.date}
                    </time>
                </div>

                <Link to={`/posts/${post.frontmatter.slug}`} className="button is-light is-link is-small">
                    Continue reading
                </Link>
            </div>
        </div>
    );

}

export default FeaturedPost;
