import React from 'react';

function PostDetail(props) {
  const id = props.match.params.id;
  return(
    <div className="container section post-details">
      <div className="card blue-grey lighten-2">
        <div className="card-content white-text">
          <span className="card-title">Post Author - {id}</span>
          <p>Post Content......</p>
        </div>
        <div className="card-action">
          <button className="waves-effect waves-light btn">Like</button><p>Likes: </p>
          <div>1st May, 2019</div>
        </div>
      </div>
    </div>
  )

}

export default PostDetail;
