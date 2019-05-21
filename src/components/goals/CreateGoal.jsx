import React from 'react';
import Nouislider from "nouislider-react";
import "nouislider/distribute/nouislider.css";
import { createGoal } from '../../actions/goalActions';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class CreateGoal extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: '',
      goal: ''
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
    this.props.createGoal(this.state)
  }


  render(){
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to='/signin' />
    return(
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Set a new goal!</h5>
          <div className="input-field">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" onChange={this.handleChange}/>
          </div>
          <div className="input-field">
            <label htmlFor="goal">Goal</label>
            <textarea className="materialize-textarea" type="textarea" id="goal" onChange={this.handleChange}/>
          </div>
          <div className="Slider">
            <p className="range-field">
              <input type="range" id="test5" min="0" max="100" />
            </p>
          </div>
          <div className="input-field">
            <button className="waves-effect waves-light btn">Create your goal!</button>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    createGoal: (goal) => dispatch(createGoal(goal))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateGoal);
