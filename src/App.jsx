import React from 'react'
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom'
import Home from './pages/Home'
import Project from './pages/Project'
import Cursor from './components/Cursor/Cursor'
import Dock from './components/Dock/Dock'
import { HiHome, HiUser, HiFolder, HiMail } from 'react-icons/hi'
import './components/Dock/Dock.css'

// Create a wrapper component that has access to useNavigate
const AppWithDock = () => {
  const navigate = useNavigate();
  
  const dockItems = [
    { 
      icon: <HiHome size={18} />, 
      label: 'Home', 
      onClick: () => {
        navigate('/');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    },
    { 
      icon: <HiUser size={18} />, 
      label: 'Who I Am', 
      onClick: () => {
        if (window.location.pathname !== '/') {
          navigate('/');
          setTimeout(() => {
            const whoIAmSection = document.getElementById('who-i-am');
            if (whoIAmSection) whoIAmSection.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        } else {
          const whoIAmSection = document.getElementById('who-i-am');
          if (whoIAmSection) whoIAmSection.scrollIntoView({ behavior: 'smooth' });
        }
      }
    },
    { 
      icon: <HiFolder size={18} />, 
      label: 'Projects', 
      onClick: () => {
        if (window.location.pathname !== '/') {
          navigate('/');
          setTimeout(() => {
            const projectsSection = document.getElementById('projects');
            if (projectsSection) projectsSection.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        } else {
          const projectsSection = document.getElementById('projects');
          if (projectsSection) projectsSection.scrollIntoView({ behavior: 'smooth' });
        }
      }
    },
    { 
      icon: <HiMail size={18} />, 
      label: 'Contact', 
      onClick: () => {
        if (window.location.pathname !== '/') {
          navigate('/');
          setTimeout(() => {
            const contactSection = document.getElementById('contact');
            if (contactSection) contactSection.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        } else {
          const contactSection = document.getElementById('contact');
          if (contactSection) contactSection.scrollIntoView({ behavior: 'smooth' });
        }
      }
    },
  ];

  return (
    <>
      <Cursor />
      <Dock 
        items={dockItems}
        panelHeight={68}
        baseItemSize={50}
        magnification={70}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:slug" element={<Project />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppWithDock />
    </Router>
  )
}

export default App