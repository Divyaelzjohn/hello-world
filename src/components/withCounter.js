import React from "react";

// const UpdatedComponent=(OriginalComponent)=>{
const withCounter=(WrappedComponent,incrementNumber)=>{
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
        return {count:prevState.count+incrementNumber }
      })
    }
  
    render(){
      console.log(this.props.name)
      // return <OriginalComponent count={this.state.count} incrementCount={this.incrementCount}/>
      return <WrappedComponent count={this.state.count} incrementCount={this.incrementCount} {...this.props}/>
    }
  }
  // return NewComponent
  return withCounter
}
// export default UpdatedComponent
export default withCounter 
