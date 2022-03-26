import {useState, useEffect} from "react"

const FunctionCounter = () => {
    const [count, setCount] = useState(0);

    useEffect(()=> {
    setCount(count + 1)

    return()=>{
        setCount(0)
    }
    }, [])

    useEffect(()=>{
        return()=>{
            
            if(count === 10){
                setCount(0)
            }
        }
    }, [count])
    
    const decrement = () => {
        if(count > 0){
            setCount(count - 1)
        }
    }

    const increment = () => {
        setCount(count + 1 )
    }

    return(
        <>
            <h3>CONTADOR</h3>
            <h3>{count}</h3>
            <button onClick={decrement}>-</button>
            <button onClick={increment}>+</button>
        </>
    )
}

export default FunctionCounter