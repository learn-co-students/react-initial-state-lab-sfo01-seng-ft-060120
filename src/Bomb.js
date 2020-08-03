// your Bomb code here!
import React, { Component } from 'react'

export default class Bomb extends React.Component {

    constructor(props){
        super()
        this.state = {
            secondsLeft: props.initialCount
        }
    }

    // boom = () => {
    //     if (this.state.secondsLeft > 0) {
    //         return `${this.state.secondsLeft} seconds left before I go boom!`
    //     } else {
    //         return 'Boom!'
    //     }
    // }

    render() {
        return (
            (this.state.secondsLeft > 0) ? `${this.state.secondsLeft} seconds left before I go boom!` : 'Boom!'
        )
    }
  }