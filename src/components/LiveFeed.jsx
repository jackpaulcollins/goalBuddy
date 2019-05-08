import React from 'react';
import Post from './Post';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

function LiveFeed(props){

console.log(props)
  return(
    <div className="liveFeed">
      <Post content={props.userPosts}/>
    </div>
  );
}

LiveFeed.propTypes = {
  userPosts: PropTypes.string
}

export default LiveFeed;
