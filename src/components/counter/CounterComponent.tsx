'use client';
import React from 'react'
import { Button } from '../ui/button'
import { decrement, increment } from './CounterSlice'
import { useAppDispatch, useAppSelector } from '@/lib/hooks';

export default function CounterComponent() {
    const dispatch = useAppDispatch()
    const counter = useAppSelector(state => state.counter)
    return (
        <div>
            <div>{counter}</div>
            <Button onClick={() => dispatch(increment())}>
                +
            </Button>
            <Button onClick={() => dispatch(decrement())}>
                -
            </Button>
        </div>
    )
}
