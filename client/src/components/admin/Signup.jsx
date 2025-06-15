import React from 'react'
import {SignUp} from '@clerk/clerk-react'
const Signup = () => {
  return (
    <SignUp path="/sign-up" routing="path" />
  )
}

export default Signup