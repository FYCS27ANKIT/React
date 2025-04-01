import React, { useState } from 'react'

const UseState = () => {
    const [count, setCount] = useState(0);
    const[greet, setGreet] = useState("Hello ");
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count+1)}>Increment</button>
    <h1>{greet}</h1>
    <button onClick={() => setGreet("Hello Sir")}>Login</button>
    </div>
  )
}

export default UseState
