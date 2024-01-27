import CounterComponent from '@/components/counter/CounterComponent'
import TasksListComponent from '@/components/tasks/TasksListComponent'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <TasksListComponent />
      <CounterComponent />
    </main>
  )
}
