import React, { Component } from 'react'

class RefsDemo extends Component {
  // constructor(props) {
  //   super(props)
  //   this.inputRef=React.createRef()
  //   this.cbRef=null
  //   this.setCbRef=(element)=>{
  //     this.cbRef=element  
  //   }
  // }
  // componentDidMount(){
  //   if(this.cbRef){
  //     this.cbRef.focus()
  //   }
  //   // this.inputRef.current.focus()
  //   // console.log(this.inputRef) 
  // }
  
  // clickHandler=()=>{
  //   alert(this.inputRef.current.value)
  // }

  // render() {
  //   return (
  //     <div>
  //       <input type='text' ref={this.inputRef}/>
  //       <input type='text' ref={this.setCbRef}/>
  //       {/* fetch an input element */}
  //       <button onClick={this.clickHandler}>Click</button>
  //     </div>
  //   )
  // }


  /* Create a Ref */
  // constructor(props) {
  //   super(props)
  
  //   this.inputRef=React.createRef();
  // }
  // componentDidMount(){
  //   this.inputRef.current.focus();
  // }
  // render(){
  //   return(
  //     <div>
  //       <h2>CreateRef Example</h2>
  //       {/* step 2: attach */}
  //       <input type="text" ref={this.inputRef} />
  //     </div>
  //   )
  // }*/

  /* Callback Ref */
  constructor(props){
    super(props);
    // create a property
    this.inputElement=null

    // step2:write callback
    this.setInputRef=(element)=>{
      this.inputElement=element;
    }
  }
  componentDidMount(){
    // step 4:Access element
    if(this.inputElement){
      this.inputElement.focus()
    }
  }
  render(){
    return(
      <div>
        <h2>Callback Ref Example</h2>
        {/* step3: Attach */}
        <input type="text" ref={this.setInputRef}/>
      </div>
    )
  }
  
}
export default RefsDemo