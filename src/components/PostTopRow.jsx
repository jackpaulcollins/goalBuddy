import React from 'react';
import styles from '../scss/styles.scss';
import blazers from '../assets/images/blazers.svg';
import menu from '../assets/images/menu.png';
import PropTypes from "prop-types";

function PostTopRow(props){
  return(
    <div className="postTopRow">
      <img className="postTopRowPicture" src={props.image}/>
      <div>
        <h4>{props.username}</h4>
        <p>{props.time}</p>
      </div>
      <div>
        <img className="postTopRowMenu" src={menu}/>
      </div>
    </div>
  )
};

PostTopRow.PropTypes = {
  image: PropTypes.string,
  username: PropTypes.string,
  time: PropTypes.string
}

export default PostTopRow;
