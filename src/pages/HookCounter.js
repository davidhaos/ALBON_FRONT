import React, {useState} from 'react'
import styled from 'styled-components'

function HookCounter() {

    const [count, setCount] = useState(0) // return the value as first value, and method to modify value

    return (
    <StyleObject>
      <button onClick={() => setCount(count+1)}> Count {count}</button>
    </StyleObject>
  )
}

export default HookCounter

const StyleObject = styled.section`
  text-align: center;
  margin-top: 10vh;
  button{
    background-color: #4CAF50;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
  }

`