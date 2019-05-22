import React from 'react';
import Post from './Post';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';



function LiveFeed(props){
  const { posts } = props;
  return(
    <div className="liveFeed">
      <div>
        {posts && posts.map(post => {
          return (
            
                <Post post={post} key={post.id} id={post.id}/>
              
          )
        })}
      </div>
    </div>
  );
}


export default LiveFeed;
