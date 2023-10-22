import { currentUser } from '@clerk/nextjs'
import React from 'react'
import ProductCard from '../components/ProductCard'

async function page() {
  const user = await currentUser()
  return (
    
    <div className=''>
      <ProductCard />
    </div>
  )
}

export default page
