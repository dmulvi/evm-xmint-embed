import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Connect from './Connect';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Connect/>
    </div>
  )
}

export default App
