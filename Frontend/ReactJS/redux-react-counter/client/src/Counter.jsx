import {useSelector, useDispatch} from 'react-redux'
import {increment,decrement,incrementByAmount, reset, double, divide} from './features/counterSlice'

export default function Counter() {
    const value = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <>
            <h1>{value}</h1>

            <button onClick={()=> dispatch(increment())}>+1</button>
            <button onClick={()=> dispatch(decrement())}>-1</button>
            <button onClick={()=> dispatch(incrementByAmount(5))}>+5</button>
            <button onClick={()=> dispatch(reset())}>reset</button>
            <button onClick={()=> dispatch(double(2))}>double</button>
            <button onClick={()=> dispatch(divide(2))}>divideByTwo</button>

        </>
    )
}