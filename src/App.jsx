import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import Project from './pages/Project';
import Cursor from './components/Cursor/Cursor';
import Dock from './components/Dock/Dock';
import MobileNav from './components/MobileNav/MobileNav';
import { HiHome, HiUser, HiFolder, HiMail } from 'react-icons/hi';
import './components/Dock/Dock.css';
import ExperienceDetail from './pages/ExperienceDetail';
import SplashCursor from './components/SplashCursor/SplashCursor';

// Back to Top Button Component
const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      style={{
        position: 'fixed',
        bottom: '100px',
        right: '20px',
        width: '48px',
        height: '48px',
        borderRadius: '50%',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9998,
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'scale(1.1)';
        e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'scale(1)';
        e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
      }}
    >
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
        <path d="M12 19V5M5 12l7-7 7 7" />
      </svg>
    </button>
  );
};

const AppWithDock = () => {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  const scrollToExperience = () => {
    if (window.location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const section = document.getElementById('experience');
        if (section) section.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const section = document.getElementById('experience');
      if (section) section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProjects = () => {
    if (window.location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const section = document.getElementById('projects');
        if (section) section.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const section = document.getElementById('projects');
      if (section) section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    if (window.location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const section = document.getElementById('contact');
        if (section) section.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const section = document.getElementById('contact');
      if (section) section.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
      label: 'Experience', 
      onClick: scrollToExperience
    },
    { 
      icon: <HiFolder size={18} />, 
      label: 'Projects', 
      onClick: scrollToProjects
    },
    { 
      icon: <HiMail size={18} />, 
      label: 'Contact', 
      onClick: scrollToContact
    },
  ];

  return (
    <>
      <SplashCursor />
      <Cursor />
      {!isMobile && <Dock items={dockItems} panelHeight={68} baseItemSize={50} magnification={70} />}
      {isMobile && <MobileNav />}
      <BackToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experience/:id" element={<ExperienceDetail />} />
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

export default App;