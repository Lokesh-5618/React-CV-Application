import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Generalinfo from './Generalinfo'
import Schoolinfo from './Schoolinfo'
import Practicalexperience from './Practicalexperience'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Curriculum vitae</h1>
      <div className='container'>
        <Generalinfo />
        <Schoolinfo />
        <Practicalexperience />
      </div>
    </>
  )
}

export default App
