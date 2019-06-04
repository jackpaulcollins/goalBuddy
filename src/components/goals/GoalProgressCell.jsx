import React from 'react';
import styles from '../../scss/styles.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


class GoalProgressCell extends React.Component{


  constructor(props) {
    super(props);
    this.state = {
      clicked: null
    };
    this.handleSuccessClick = this.handleSuccessClick.bind(this);
    this.handleFailClick = this.handleFailClick.bind(this);
  }


  handleSuccessClick() {
      this.setState({
        clicked: 'success'
      })
    }

  handleFailClick() {
    this.setState({
      clicked: 'fail'
    })
  }


  render(){

    const clicked = this.state.clicked;
    let goalStateForDay
    if(clicked == 'success'){
      goalStateForDay = <p className='green-text'>X</p>
    } else if (clicked == 'fail') {
      goalStateForDay = <p className='red-text'>X</p>
    } else {
      goalStateForDay = null;
    }

    return(
      <div className="cell">
        <div className="cell-actions">
          <div onClick={this.handleSuccessClick}>
            <FontAwesomeIcon icon="thumbs-up" />
          </div>
          <div onClick={this.handleFailClick}>
            <FontAwesomeIcon icon="thumbs-down"/>
          </div>
        </div>
        <div>{goalStateForDay}</div>
      </div>
    )
  }
}

export default GoalProgressCell;
