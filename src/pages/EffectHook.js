import React, {useState, useEffect} from 'react'

function EffectHook() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('');
    useEffect(() => { //useEffect is a hook that allows you to perform side effects in function components
        // Update the document title using the browser API every time the component is rerendered. Runs AFTER the render
        // if (count %2===0) 
        // if (name === 'David') //can conditionall run useEffect
        document.title = `You clicked ${count} times`;
    }, [count]); //only run useEffect if count changes,. If you want to run only once, pass an empty array
    //you can include multiple elements in the array to run useEffect if any of them change
  return (
    <div>
        <input type="text" value={name} onChange={e => setName(e.target.value)}/>
      <button onClick={() => setCount(count+1)}>Click {count} times</button>
    </div>
  )
}

export default EffectHook
