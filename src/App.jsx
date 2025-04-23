import { useState } from 'react'
import './App.css'
import MarksTable from './MarksTable'

function App() {
  const [marks, setMarks] = useState([{}])

  function setTerm1() {
    
  }
  function createRow() {

  }

  return (
    <>
    <form className="flex-col pt-40 items-center justify-center max-w-md mx-auto" action="">
      <MarksTable props={{ marks, setMarks }}/>
      <button type="submit" className='bg-orange-300 hover:bg-orange-400 active:bg-orange-600 border rounded'>Submit</button>
    </form>
    </>
  )
}

export default App
