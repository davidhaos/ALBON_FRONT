import React, {useState} from 'react'

function ArrayHook() {
    const [items, setItems] = useState([]);
    const AddItem = () => {
        setItems([...items, { // ...items is a spread operator that copies the items array and adds the new item to the end of the array 
            id: items.length,
            value: Math.floor(Math.random() * 10) + 1
        }])
    }

    
  return (
    <div>
        <button onClick={AddItem}>Add a number</button>;
      <ul>
        {items.map(item => <li key={item.id}>{item.value}</li>)}
      </ul>
    </div>
  )
}

export default ArrayHook
