import React, {useState, useEffect} from 'react'

function MouseEffect() {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const logMousePosition = e => { //e is the event object with clientX and clientY as properties (props)
        console.log('Mouse event');
        setX(e.clientX);
        setY(e.clientY);
        // if(e.clientX > 500) console.log('You took damage');
    }

    useEffect(() => {
        console.log('useEffect called');
        window.addEventListener('mousemove', logMousePosition)
        return  () => { //cleanup function, passed as callback function to useEffect
            console.log('Component unmounting code');
            window.removeEventListener('mousemove', logMousePosition)
        }
    }, []) //empty array means run only once, no dependencies, so no rerendering
    // becuase you passsed an array, useEffect hwere it prints out 'useEffect called' will only run once
    //the event listener will run every time the mouse moves because it was set up as an event, when you move it, it's not a rerender
    //it's an evant already set. so it's not part of useeffect. It was set up by useEffect, but it runs independently.


    return (
    <div>
      Hooks X - {x} Y - {y}
    </div>
  )
}


export default MouseEffect
