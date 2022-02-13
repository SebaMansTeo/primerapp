import {useState, useEffect} from "react"

const FunctionCounter = () => {
    const [count, setCount] = useState(0);

    useEffect(()=> {
    console.log("se monto")
    setCount(count + 1)

    return()=>{
        console.log("me voy a desmontar")
        setCount(0)
    }
    }, [])

    useEffect(()=>{
        console.log("count cambio")

        return()=>{
            console.log("return conut")
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