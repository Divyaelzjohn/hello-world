import React, { Component } from 'react'

class HoverCounterTwo extends Component {

  render() {
    // const {count}=this.state
    const {count,incrementCount}=this.props
    return (
      //  <button onClick={this.incrementCount}>Hover {count} times</button>
      <h2 onMouseOver={incrementCount}>Hover {count} times</h2>
    )
  }
}

export default HoverCounterTwo

