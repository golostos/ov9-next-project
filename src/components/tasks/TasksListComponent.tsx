'use client';

import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import React, { useEffect, useState } from 'react'
import { addTask, editTask, initStore, removeTask } from './TasksSlice';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { CollapseForm } from './CollapseForm';
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card';
import { Checkbox } from '../ui/checkbox';
import { EditTask } from './EditTask';
import AddTask from './AddTask';

export default function TasksListComponent() {
  const dispatch = useAppDispatch()
  const tasks = useAppSelector(state => state.tasks)
  useEffect(() => {
    dispatch(initStore())
  }, [])
  return (
    <div>
      <AddTask />
      <div className="py-2 grid grid-cols-1 sm:grid-cols-3 gap-2">
        {
          tasks.map(task => {
            return <Card key={task.id}>
              <CardHeader>
                <CardTitle className={task.completed ? 'line-through' : ''}>{task.title}</CardTitle>
                <CardDescription>{task.desc}</CardDescription>
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id={`checkbox-done-${task.id}`} 
                    checked={task.completed}
                    onCheckedChange={(value) => {
                      dispatch(editTask({
                        id: task.id,
                        completed: value as boolean
                      }))
                    }}
                  />
                  <label
                    htmlFor={`checkbox-done-${task.id}`}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Done
                  </label>
                </div>
              </CardHeader>
              <CardFooter className='gap-2'>
                <EditTask task={task} />
                <Button onClick={() => dispatch(removeTask(task.id))} className='transition duration-500 w-16' variant={'destructive'}>
                  Delete
                </Button>
              </CardFooter>
            </Card>
          })
        }
      </div>
    </div>
  )
}
