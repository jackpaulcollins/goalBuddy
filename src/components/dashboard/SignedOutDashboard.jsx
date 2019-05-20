import React from 'react';

class SignedOutDashboard extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      focus: null
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
  }

  render(){
    return (
      <div>
        <h3>Welcome to Goal Buddy</h3>
        <div className="container">
          <form onSubmit={this.handleSubmit} className="white">
            <h5 className="grey-text text-darken-3">Sign In</h5>
            <div className="input-field">
              <label htmlFor="email">Email</label>
              <input type="text" id="email" onChange={this.handleChange}/>
            </div>
            <div className="input-field">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" onChange={this.handleChange}/>
            </div>
            <div className="input-field">
              <button className="waves-effect waves-light btn">Login</button><br/><br/>
              <button className="waves-effect waves-light btn">Sign Up</button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}


export default SignedOutDashboard;
