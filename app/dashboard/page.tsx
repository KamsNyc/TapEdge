import { currentUser } from '@clerk/nextjs'
import React from 'react'

async function page() {
  const user = await currentUser()
  console.log(user) 
  return (
    
    <div className=''>
      dashboard
    </div>
  )
}

export default page
