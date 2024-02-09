import React, {useState} from 'react'

function ComplexCounter() {
        const initialCount = 0;
        const [count, setCount] = useState(initialCount) // return the value as first value, and method to modify value
  return (
    <div>
      Count : {count}
      <button onClick={() => setCount(initialCount)}>Reset</button>
      <button onClick={() => setCount(previousCount => previousCount + 1)}>Increment</button> 
      <button onClick={() => setCount(previousCount => previousCount - 1)}>Decrement</button>
    </div>
  ) // passing in previosCoutn as a parameter to the setCount function allows us to access the previous state and re rendering the info
}



export default ComplexCounter
