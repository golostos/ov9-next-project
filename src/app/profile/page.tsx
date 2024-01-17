import GoBack from '@/components/GoBack'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

export default function ProfilePage() {
  return (
    <main>
        <h1 className='text-2xl text-center'>Profile page</h1>
        <Link href='/' className='inline-flex p-4 bg-primary hover:bg-primary/90 text-white '>Home</Link>
        <GoBack />
    </main>
  )
}
