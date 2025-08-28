import React, { Component } from 'react'
import UpdatedComponent from './withCounter'

class ClickCounter extends Component {

  render() {
    // const{count}=this.state
    const {count, incrementCount}=this.props
    return <button onClick={incrementCount}>Click {count} times</button>
  }
}

export default UpdatedComponent(ClickCounter)