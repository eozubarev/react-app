import React from 'react';
import PostItem from './PostItem';

const Postlist = ({posts, title}) => {
    return (
        <div>
            <h1 style={{textAlign: 'center', margin: '30px 0px 0px 0px',}}>
                {title}
            </h1>
            {posts.map((post, index) => 
                <PostItem number={index + 1} post={post} key={post.id}/>
            )}
        </div>
    );
}

export default Postlist;
