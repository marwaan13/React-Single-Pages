import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { decrement, increment, incrementByValue, resetCounter } from '@/redux/slices/counterSlice'
import { AppDispatch, RootState } from '@/redux/store'
import { useState } from 'react'
import {useSelector, useDispatch} from 'react-redux'

const Counter = () => {
    const counterState = useSelector((state : RootState) => state.counter)
    const dispatch = useDispatch<AppDispatch>()
    const [x, setX] = useState(0)

  return (
    <div className='flex items-center justify-around m-4'>
        <div>
            
        <Input type="number" onChange={e => setX(+e.target.value)} placeholder='Enter the value to incremetn or decrement' />
        <Button onClick={() => dispatch(incrementByValue(x))} variant={'secondary'} className='my-4'>
            Increment by {x}
        </Button>
        </div>
         <Button variant={"destructive"} onClick={() => dispatch(decrement())}>Decrement</Button>
            <h1 className='text-6xl font-bold'>{counterState.value}</h1>
         <Button  variant={"outline"} onClick={() => dispatch(increment())}>Increment</Button>
         <Button  variant={"outline"} onClick={() => dispatch(resetCounter())}>Reset</Button>

    </div>
  )
}

export default Counter