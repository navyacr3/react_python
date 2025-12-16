import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     Book Website
     <div>
      <input type="text" name="name" id="name" placeholder='Book name' />
      <input type="number" name="release" id="release" placeholder='Release date'/>
      <button>Add Book</button>
     </div>
    </>
  )
}

export default App
