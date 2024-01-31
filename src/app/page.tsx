import CounterComponent from '@/components/counter/CounterComponent'
import TasksListComponent from '@/components/tasks/TasksListComponent'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <TasksListComponent />
    </>
  )
}
