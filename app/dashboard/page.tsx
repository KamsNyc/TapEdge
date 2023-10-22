import { currentUser } from '@clerk/nextjs'
import React from 'react'
import ProductCard from '../components/ProductCard'

async function page() {
  const user = await currentUser()
  console.log(user) 
  return (
    
    <div className=''>
      <ProductCard />
    </div>
  )
}

export default page
