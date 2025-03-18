import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Routes, Route,Link} from 'react-router-dom';
import Login from './Component1/Loginform'
import Register from './Component1/Register'


//import './App.css'




function App() {
  return (
    <>
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
    </>
  )
}

export default App
