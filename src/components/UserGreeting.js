/*import React, { Component } from 'react'
class UserGreeting extends Component {

  constructor(props){
    super(props)
    this.state={
      isLoggedIn:true
    }
  }

  render() {
    if(this.state.isLoggedIn){
      return(
        <div>Welcome Vishwas</div>
      )
    }else{
      return(
        <div>Welcome Guest</div>
    )
    }
    // return (
    //   <div>
    //     <div>Welcome Vishwas</div>
    //     <div>Welcome Guest</div>
    //   </div>
    // )
  }
}
export default UserGreeting

// if/else is not used in JSX

*/


// Element variable method
/*import React, { Component } from 'react'

class UserGreeting extends Component {

  constructor(props){
    super(props)
    this.state={
      isLoggedIn:false
    }
  }

  render() {
   let message
   if(this.state.isLoggedIn){
    message=<div>Welcome Vishwas</div>
   }else{
    message=<div>Welcome Guest</div>
   }
   return <div>{message}</div>
  }
}

export default UserGreeting*/


// It can be used inside the JSX - Ternary condirional approch ,simle and redable
/*import React, { Component } from 'react'

class UserGreeting extends Component {

  constructor(props){
    super(props)
    this.state={
      isLoggedIn:true
    }
  }

  render() {
   return(
    this.state.isLoggedIn?
   ( <div>Welcome Vishwas</div>):    
    (<div>Welcome Guest</div>)
   )
  }
}
export default UserGreeting*/


// Short circuit operator
import React, { Component } from 'react'

class UserGreeting extends Component {
  constructor(props){
    super(props)
    this.state={
      isLoggedIn:false
    }
  }
  render() {
   return this.state.isLoggedIn && <div>Welcome Vishwas</div>
  }
}
export default UserGreeting