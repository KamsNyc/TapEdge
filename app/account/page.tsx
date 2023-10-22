import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SignIn, SignUp, currentUser } from '@clerk/nextjs';

async function Account() {
    return (
      <main className='flex items-center justify-center'>
        <section className='w-full flex items-center justify-center mt-16'>
          <Tabs defaultValue="Sign Up" className="w-[400px] lg:w-[600px]">
            <TabsList className='flex items-center justify-center mb-6'>
              <TabsTrigger value="Login">Login</TabsTrigger>
              <TabsTrigger value="Sign Up">Sign Up</TabsTrigger>
            </TabsList>
            <TabsContent className='flex flex-col items-center justify-center' value="Sign Up">
            <SignUp />
            </TabsContent>
            <TabsContent className='flex flex-col items-center justify-center' value="Login">
            <SignIn />
            </TabsContent>
          </Tabs>
        </section>
      </main>
    );
  }
  
  export default Account;