import React from 'react';

function PostDetail() {

  return(
    <div className="container section post-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-authord">Post Author</span>
          <p>Post Content......</p>
        </div>
        <button>Like</button><p>Likes: </p>
        <div>1st May, 2019</div>
      </div>
    </div>
  )
  
}

export default PostDetail;
