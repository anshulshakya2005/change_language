import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './App.css'
import TextChange from './components/textchange.jsx'
import Randomstring from './components/randomstring.jsx';
import Navbar from './components/navbar.jsx';
function App() {
  const [count, setCount] = useState(0)

return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<TextChange />} />
        <Route path="/generator" element={<Randomstring />} />
      </Routes>

      <ToastContainer />
    </BrowserRouter>
  );
}

export default App
