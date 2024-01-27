'use client';

import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import React, { useState } from 'react'
import { addTask, removeTask } from './TasksSlice';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Button } from '../ui/button';

export default function TasksListComponent() {
  const dispatch = useAppDispatch()
  const tasks = useAppSelector(state => state.tasks)
  return (
    <div>
      <form className='flex flex-col gap-2' onSubmit={(event) => {
          event.preventDefault()
          const form = event.target
          if (form instanceof HTMLFormElement) {
            const formData = new FormData(form)
            const title = formData.get('title') as string
            const desc = formData.get('desc') as string
            dispatch(addTask({
              title,
              desc,
              id: String(Math.random()),
              completed: false
            }))
          }
        }}>
        <Label htmlFor="title">Title</Label>
        <Input type="text" id='title' name='title' />
        <Label htmlFor="desc">Description</Label>
        <Input type="text" id='desc' name='desc' />
        <Button type='submit'>Add</Button>
      </form>
      {
        tasks.map(task => {
          return <div key={task.id}>
            {task.title}
            <Button onClick={() => dispatch(removeTask(task.id))}>
              Delete
            </Button>
          </div>
        })
      }
    </div>
  )
}
