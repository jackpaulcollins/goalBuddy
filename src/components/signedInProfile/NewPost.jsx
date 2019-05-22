import React from 'react';
import styles from '../../scss/styles.scss';
import { connect } from 'react-redux';
import { createPost } from '../../actions/postActions';


class NewPost extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      content: '',
      likes: 0
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleChange(e) {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state)
    this.props.createPost(this.state);
  }
  
  render(){
    return(
      <div className='newPost'>
        <h5>Create a Post</h5>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="content">content</label>
          <input
            id='content'
            className='materialize-textarea'
            placeholder='Whats on your mind?'
            onChange={this.handleChange}>
          </input>
          <button className="waves-effect waves-light btn">Submit</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    createPost: (post) => dispatch(createPost(post))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(NewPost);
