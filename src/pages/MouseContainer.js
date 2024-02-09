import React, {useState, useEffect} from 'react'
import MouseEffect from './MouseEffect';

function MouseContainer() {
    const [display, setDisplay] = useState(true);
    return (
    <div>
      <button onClick={() => setDisplay(!display)}>Toggle Display</button>
    {display && <MouseEffect></MouseEffect>}
    
    </div>
  )
}


export default MouseContainer
