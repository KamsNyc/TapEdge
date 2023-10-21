import { UserButton, auth } from '@clerk/nextjs'
import Link from 'next/link'
import React from 'react'

function AccountLogo() {
    const {userId} = auth()
  return (
    <Link
                  href="/account"
                  className="-mx-3 flex gap-4 rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Account
                  <UserButton />
                </Link>
  )
}

export default AccountLogo
