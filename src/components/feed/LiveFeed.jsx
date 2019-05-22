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
              <Link to={'/post/' + post.id} key ={ post.id }>
                <Post post={post}/>
              </Link>
          )
        })}
      </div>
    </div>
  );
}


export default LiveFeed;
