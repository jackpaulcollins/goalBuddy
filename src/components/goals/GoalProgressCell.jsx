import React from 'react';
import styles from '../../scss/styles.scss';

class GoalProgressCell extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      clicked: null
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    alert('clicked')
    this.setState({
      clicked: true
      })
    }


  render(){
    return(
      <div className="cell" onClick={this.handleClick}>

      </div>
    )
  }
}

export default GoalProgressCell;
