// import React from 'react'

// const heading={
//   fontSize:'72px',
//   color:'blue'
// }

// function Inline() {
//   return (
//     <div><h1 className='error'>Error</h1>
//       <h1 style={heading}>Inline</h1>
//     </div>
//   )
// }
// export default Inline


import React from 'react'

function Inline() {
const headingStyle={
  fontSize:'28px',
  color:'green',
  backgroundColor:"lightyellow",
  padding:'10px'
  }
  return (
    <div>
      <h1 style={headingStyle}>Hello, React Inline Styling!</h1>
    </div>
  )
}
export default Inline 

