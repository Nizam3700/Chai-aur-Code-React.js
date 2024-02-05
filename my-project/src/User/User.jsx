import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
  const {userid} = useParams() 

  return (
    <div className=' bg-slate-600 p-5 text-blue-100 font-semibold'>User : {userid}</div>
  )
}

export default User