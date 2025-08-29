// step 1
import React from 'react'

// const userContext = React.createContext()
const userContext = React.createContext('Codevolution')

const UserProvider=userContext.Provider
const UserConsumer=userContext.Consumer

export {UserProvider,UserConsumer}
export default userContext