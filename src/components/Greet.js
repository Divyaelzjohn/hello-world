import React from "react";

// function Greet(){
//   return <h1>Hello Vishwas</h1>
// }
// export default Greet

// export const Greet=()=><h1>Hello Vishwas</h1>

// const Greet=()=><h1>Hello Vishwas</h1>
// export default Greet

/*const Greet=(props)=>{
  console.log(props)
  props.name='Vishwas'
  return (
    <div>
      <h1>Hello {props.name} a.k.a {props.heroName}</h1>
      {props.children}
    </div>
  )
}
export default Greet*/


// Destructuring
// 1st method
/*const Greet=({name,heroName})=>{
  return (
    <div>
      <h1>Hello {name} a.k.a {heroName}</h1>
    </div>
  )
}
export default Greet*/

// 2nd method
const Greet= props =>{
  const{name, heroName}=props
  return (
    <div>
      <h1>Hello {name} a.k.a {heroName}</h1>
    </div>
  )
}
export default Greet