'use client';

import React from 'react'
import { Button } from './ui/button';
import { useRouter } from 'next/navigation';

export default function GoBack() {
  const router = useRouter()
  return (
    <div>
        <Button onClick={() => {
            router.back();
            // router.push('/');
        }}>Back</Button>
    </div>
  )
}
