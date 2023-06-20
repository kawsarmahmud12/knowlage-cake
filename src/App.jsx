import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Header from './components/Header/Header'
import QuesAndAns from './components/QuesAndAns/QuesAndAns'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div >
      <Header></Header>
      <Blogs></Blogs>
      <QuesAndAns/>
    </div>
  )
}

export default App
