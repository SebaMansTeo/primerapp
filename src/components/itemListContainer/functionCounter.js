const FunctionCounter = () => {
    let count = 0
    
    const decrement = () => {
        count = count - 1
    }

    const increment = () => {
        count = count + 1
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