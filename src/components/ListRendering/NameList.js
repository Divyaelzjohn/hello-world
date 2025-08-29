// import React from 'react'

// function NameList() {
//   const names=['Bruce','Clark','Diana']
//   return (
//     <div>
//       {/* <h2>{names[0]}</h2>
//       <h2>{names[1]}</h2>
//       <h2>{names[2]}</h2> */}
//       {
//         names.map(name=> <h2>{name}</h2>)
//       }
//     </div>
//   )
// }
// export default NameList



/*import React from 'react';
import Person from './Person';

function NameList() {

  const persons=[
    {
      id:1,
      name:'Bruce',
      age:30,
      skill:'React'
    },
     {
      id:2,
      name:'Clark',
      age:25,
      skill:'Angular'
    },
     {
      id:3,
      name:'Diana',
      age:28,
      skill:'Vue'
    }
  ]

  // const names=['Bruce','Clark','Diana']
  // const nameList=names.map(name=> <h2>{name}</h2>)
  // return <div>{nameList}</div>
  const personList=persons.map(person=> 
  // <h2>
  //   I am {person.name}. I am {person.age} years old. I know {person.skill}
  // </h2>
  
  <Person person={person}/>)
  return <div>{personList}</div>
}
export default NameList*/



// key & list

/*import React from 'react';
import Person from './Person';

function NameList() {

  const persons=[
    {
      id:1,
      name:'Bruce',
      age:30,
      skill:'React'
    },
     {
      id:2,
      name:'Clark',
      age:25,
      skill:'Angular'
    },
     {
      id:3,
      name:'Diana',
      age:28,
      skill:'Vue'
    }
  ]

  const personList=persons.map(person=> <Person key={person.id} person={person}/>)
  return <div>{personList}</div>
}
export default NameList*/

// key matched elements in another list (id match check)
/* A key is a special string attribute you need to include when creating lists of elements . Keys give the elements a stable identity.Keys help react identity which items have changed , are added , or are removed.Help in efficient update of the user interface. */



// import React from 'react';
// import Person from './Person';

// function NameList() {
// const names=["Bruce","clark","Diana","Bruce"]
//   const persons=[
//     {
//       id:1,
//       name:'Bruce',
//       age:30,
//       skill:'React'
//     },
//      {
//       id:2,
//       name:'Clark',
//       age:25,
//       skill:'Angular'
//     },
//      {
//       id:3,
//       name:'Diana',
//       age:28,
//       skill:'Vue'
//     }
//   ]
//   const nameList=names.map((name,index)=> <h2 key={index}>{index}{name}</h2>)
//   return <div>{nameList}</div>
// }
// export default NameList


// import React from 'react'

// function nameList() {
//   const items=["Apple","Banana","Orange"];
//   return (
//     <ul>
//       {items.map((item,index)=>(<li key={index}>{item}</li>))}
//     </ul>
//   )
// }
// export default nameList 


import React from 'react'

function nameList() {
  const items=[
    {id:1,name:'Apple'},
    {id:2,name:'Banana'},
    {id:3,name:'Orange'},
  ];
  return (
    <ul>
      {items.map((item)=>(<li key={item.id}>{item.name}</li>))}
    </ul>
  )
}
export default nameList

