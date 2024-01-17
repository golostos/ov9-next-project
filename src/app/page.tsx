import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Button>Click me</Button>
      <Button variant={'destructive'}>Click me</Button>
      <Button variant={'ghost'}>Click me</Button>
      <Button variant={'link'}>Click me</Button>
      <Button variant={'outline'}>Click me</Button>
      <Button variant={'secondary'} size={'lg'}>Click me</Button>
    </main>
  )
}
