import axios from 'axios'
import React, {useState} from 'react'



function SearchJournal() {
    const [id, setId] = useState(1)
    // const [post, setPost] = useState({})
    const handleClick = async () => {
      const response = await axios.post('http://localhost:9000/journalsearch',{id} )
      console.log(response)
        if (response.status !== 200) {
          console.log('errir')
          alert('response error') 
        }
        const message = response.data.message
        alert(message)
        // fetch(`http://localhost:9000/journal/${id}`)
            // .then(res => res.json())
            // .then(data => {
            //     console.log(data)
            //     alert(data)
            //     // setPost(data)
            // })
    }


  return (
    <div>
      <h1>Search Journal</h1>
      <input type='number' value={id} onChange={e => setId(e.target.value)}></input>
        <button type='button' onClick={() => handleClick()}>Fetch Post</button>
    </div>
  )
}

export default SearchJournal
