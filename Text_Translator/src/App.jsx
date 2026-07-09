import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './App.css'
import TextChange from './components/textchange.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      
      <TextChange> </TextChange>
       <ToastContainer />
    </div>
  )
}

export default App
