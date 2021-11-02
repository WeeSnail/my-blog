import React from 'react';
import {Link} from 'gatsby';

const style = {
    time: {
        fontSize: "12px"
    }
}

const Post = ({title, date, subtitle, slug}) => {
    return (
        <>
            <div className="content is-normal">
                <div className="head-wrapper mb-2">
                    <h2 className="mb-0 post-title">{title}</h2>
                    <time
                        style={style.time}
                        dateTime={style.time}>{date}</time>
                </div>
                <p>{subtitle}</p>
                <Link
                    className="button is-light"
                    to={`/posts/${slug}`}>
                    Continue reading
                </Link>
            </div>
        </>
    )
};

export default Post;
