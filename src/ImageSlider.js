import React, { Component } from 'react';
export default class ImageSlider extends React.Component {
 
    // we use the constructor to set the INITIAL STATE
    constructor() {
      super()
      this.state = {
        currentSlideIndex: 0
      }
    }
   
    // our increment method makes use of the 'setState' method, which is what we use to alter state
    increment = () => {
      const currentSlide= this.state.currentSlideIndex + 1
      this.setState({
        currentSlideIndex: currentSlide
      })
    }
   
    render() {
      return (
        <div onClick={this.increment}>
          I am on slide {this.state.currentSlideIndex}
        </div>
      )
    }
  }