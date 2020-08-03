import React, { Component } from 'react';
import { interfaces } from 'mocha';
export default class Bomb extends React.Component {
 
    // we use the constructor to set the INITIAL STATE
    constructor(props) {
      super()
      this.state = {
        secondsLeft: props.initialCount
      }
    }
   
    // our increment method makes use of the 'setState' method, which is what we use to alter state
    increment = () => {
      const newCount = this.state.secondsLeft - 1
      this.setState({
        secondsLeft: newCount
      })
    }
   
    render() {
        if(this.state.secondsLeft > 0){
            return (
                <div onClick={this.increment}>
                    {this.state.secondsLeft} seconds left before I go boom!
                </div>
            )
        }
        return <div onClick={this.increment}>Boom!</div>
    }
  }