import React from 'react'

export interface AuthFormProps {
    type: string
}

const AuthForm = ({ type}: AuthFormProps ) => {
  return (
    <div>
      {type}
    </div>
  )
}

export default AuthForm
