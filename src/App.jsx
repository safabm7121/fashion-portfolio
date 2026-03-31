import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Project from './pages/Project'
import Cursor from './components/Cursor/Cursor'

function App() {
  return (
    <Router>
      {/* Cursor is now global - works on all pages */}
      <Cursor />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:slug" element={<Project />} />
      </Routes>
    </Router>
  )
}

export default App