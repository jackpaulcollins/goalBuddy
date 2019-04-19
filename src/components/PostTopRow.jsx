import React from 'react';
import styles from '../scss/styles.scss';
import blazers from '../assets/images/blazers.svg';
import menu from '../assets/images/menu.png';

function PostTopRow(){
  return(
    <div className="postTopRow">
      <img className="postTopRowPicture" src={blazers}/>
      <div>
        <h4>Portland Trail Blazers</h4>
        <p>15 minutes ago</p>
      </div>
      <div>
        <img className="postTopRowMenu" src={menu}/>
      </div>
    </div>
  )
};

export default PostTopRow;
