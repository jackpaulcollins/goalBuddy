import React from 'react';
import Post from './Post';
import PropTypes from "prop-types";
import { connect } from 'react-redux';

function LiveFeed(props){
  
  console.log(props)

  return(
    <div className="liveFeed">
      <Post content={props.userPosts}/>
      <h1>{props.likes}</h1>
    </div>
  )
};

const mapStateToProps = (state) => ({
  userPosts: state.userPosts,
  likes: state.likes
});

export default connect(mapStateToProps)(LiveFeed);
