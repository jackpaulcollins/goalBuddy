import React from 'react';
import Post from './Post';
import PropTypes from 'prop-types';


function LiveFeed(props){
console.log(props)
  return(
    <div className="liveFeed">
      {Object.keys(props.content).map(post=>{
        let currentPost = props.content[post];
        return(
          <Post content={currentPost.content} likes={currentPost.likes} key={post}/>
        )
      })}
    </div>
  );
}

LiveFeed.propTypes = {
  content: PropTypes.array
}

export default LiveFeed;
