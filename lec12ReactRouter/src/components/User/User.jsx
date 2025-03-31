import React from 'react'
import { useParams } from 'react-router'


function User() {
const {UserId} = useParams()
  return (
    <div>
      User :{UserId}
    </div>
  )
}

export default User
