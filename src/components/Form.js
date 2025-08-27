import React, { Component } from 'react'

class Form extends Component {

  constructor(props){
    super(props)

    this.state={
      username:'',
      comments:'',
      topic:'react',
      agree: false,
      gender:''
    }
  }
  handleUsernameChange=(event)=>{
    this.setState({
      username: event.target.value
    })
  }
  handleCommentsChange=(event)=>{
    this.setState({
      comments: event.target.value
    })
  }
  handleTopicChange =(event)=>{
    this.setState({
      topic: event.target.value
    })
  }
  handleCheckBox =(event)=>{
    this.setState({
      agree: event.target.checked
    })
  }
  handleRadioBtn  =(event)=>{
    this.setState({
      gender: event.target.value
    })
  }
  handleSubmit= event =>{
    alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
    event.preventDefault()
  }
  
  render() {
    const{username,comments,topic,agree,gender}=this.state    //destructuring
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>Username</label>
          {/* <input type='text' value={this.state.     username} onChange={this.        //  in destructuring we can remove this.state */}
          <input type='text' value={username} onChange={this.handleUsernameChange}/> 
        </div>
        <div>
          <label>Comments</label>
          <textarea value={comments} onChange={this.handleCommentsChange}></textarea>
        </div>
        <div>
          <label>Topic</label>
          <select value={topic} onChange={this.handleTopicChange}>
            <option value="react">React</option>
            <option value="angular">Angular</option>
            <option value="vue">Vue</option>
          </select>
        </div>
        <div>
          <label>Check box
          <input type='checkbox' value={agree} onChange={this.handleCheckBox}/> i agree to the terms
          </label>
          <p>{this.state.agree?"You agreed":"Not agreed"}</p>
        </div>
        <div>
          <label>
            <input type='radio' value="Male" checked={this.state.gender==="Male"} onChange={this.handleRadioBtn}/> Male
          </label>
          <label>
            <input type='radio' value="Female" checked={this.state.gender==="Female"} onChange={this.handleRadioBtn}/> Female
          </label>
          <p>Selected:{this.state.gender}</p>
        </div>
        <button type="submit">Submit</button>
      </form>
    )
  }
}
export default Form