import React from "react";

// const UpdatedComponent=(OriginalComponent)=>{
const withCounter=wrappedComponent=>{
  // class NewComponent extends React.Component{
  class withCounter extends React.Component{
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }
    
    incrementCount=()=>{
      this.setState(prevState=>{
        return {count:prevState.count+1}
      })
    }
  
    render(){
      // return <OriginalComponent count={this.state.count} incrementCount={this.incrementCount}/>
      return <wrappedComponent count={this.state.count} incrementCount={this.incrementCount}/>
    }
  }
  // return NewComponent
  return withCounter
}
// export default UpdatedComponent
export default withCounter 
