import React from 'react';
import PropTypes from "prop-types";
import { connect } from 'react-redux';

class Likes extends React.Component{


  render(props){
    return(
      <p>likes {this.props.likes}</p>
    )
  }
}



const mapStateToProps = (state) =>({
  likes: state.likes
});

export default connect(mapStateToProps)(Likes);
