
/* What are Hooks? -> Hooks are a new feature additiona in React version 16.8 which allow you to use React feauture without having to write a class 
 Ex. State of a component 
 Hooks don't work inside classes
 Why Hooks? 
 1.Understand how this keyword works in javascript
  Remember to bind event handler in class components
  Classes don't minify very well and make hot reloading very unreliable
2.There is no particular way to reuse stateful component logic
  HOC and render props pattens do address this problem
  Makes the code harder to follow
  There is need a to share atateful logic in a better way.
3.Create components for complex scenarios such as data fetching and subscribing to events
  Related code is not organized in one place
  Ex. Data fetching - In componentDidMount and componentDidUpdate
  Ex. Event listeners - In componentDidMount and componentWillmount
  Because of stateful logic - cannot break components into smaller ones


  Rules of Hooks
  "Only call hooks at the Top Level" -> Don't ca;; Hooks inside loops, conditions, or nested function
  "Only Call Hooks from React Functions" ->Call them from within React functional components and not just any regular Javascript function 

  // Summary - useState
  - The useState hook lets you add state to functional components.
  - In classes the state ia always an object.
  - With the useState hook the state does't have to be an object.
  - The useState hook returns an array with 2 elements.
  - The first element is the current value of the state, and the second element is a state setter function. 
  - New State value depends on the previous state valie? You can pass a function to the setter function.
  - When dealing with objects or arrays, always make  sure to spread your state variable and then call the setter function
 */

//  useEffect
/*
- updating the document title to the current counter value
    componentDidMount(){
    document.title=`You clicked ${this.state.count} times`}
    componentDidUpdate(){
    document.title=`You clicked ${this.state.count} times`}
-Timer
    componentDidMount(){
    this.interval=setInterval(this.tick,1000)}
    componentWillUnmount(){
    clearInterval(this.interval)}
-Combine the two side effects
  componentDidMount(){
    documeent.title=`You clicked ${this.state.count} times`;
    this.interval=setInterval(this.tick,1000)}
  componentDidUpdate(){
    document.title=`You clicked ${this.state.count} times`}
  componentWillUnmount(){
    clearInterval(this.interval)}

The effect Hook lets you perform side effects in functional components
It is a close replacement for componentDidMount, componentDidUpdate and componentWillUnmount
*/

