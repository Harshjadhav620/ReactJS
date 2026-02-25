import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './components/Button'
import Header from './components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='h-screen w-full bg-gray-900'></div>
    </>
  )
}

export default App
