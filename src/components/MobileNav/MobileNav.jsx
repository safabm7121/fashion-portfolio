import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { HiHome, HiUser, HiFolder, HiMail } from 'react-icons/hi';
import { motion, AnimatePresence } from 'framer-motion';

const MobileNav = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavigation = (path, sectionId) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) section.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const section = document.getElementById(sectionId);
      if (section) section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { 
      icon: <HiHome size={22} />, 
      label: 'Home', 
      action: () => {
        navigate('/');
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setIsMenuOpen(false);
      }
    },
    { 
      icon: <HiUser size={22} />, 
      label: 'About', 
      action: () => handleNavigation('/', 'who-i-am')
    },
    { 
      icon: <HiFolder size={22} />, 
      label: 'Projects', 
      action: () => handleNavigation('/', 'projects')
    },
    { 
      icon: <HiMail size={22} />, 
      label: 'Contact', 
      action: () => handleNavigation('/', 'contact')
    },
  ];

  return (
    <>
      {/* Menu Button - TOP RIGHT */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        style={{
          position: 'fixed',
          top: '15px',
          right: '10px',
          width: '30px',
          height: '50px',
          borderRadius: '25px',
          backgroundColor: 'rgba(0, 0, 0, 0.85)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
          zIndex: 999999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          transition: 'all 0.2s ease',
        }}
        onTouchStart={(e) => {
          e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
        }}
        onTouchEnd={(e) => {
          e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.85)';
        }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
          {isMenuOpen ? (
            <path d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.2 }}
            style={{
              position: 'fixed',
              top: '120px',
              right: '16px',
              background: 'rgba(0, 0, 0, 0.95)',
              backdropFilter: 'blur(16px)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              borderRadius: '16px',
              padding: '8px',
              minWidth: '160px',
              zIndex: 999998,
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.4)',
            }}
          >
            {navItems.map((item, index) => (
              <button
                key={index}
                onClick={item.action}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '12px 16px',
                  background: 'transparent',
                  border: 'none',
                  borderRadius: '12px',
                  cursor: 'pointer',
                  width: '100%',
                  textAlign: 'left',
                  transition: 'all 0.2s ease',
                  color: 'white',
                }}
                onTouchStart={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                }}
                onTouchEnd={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
              >
                <div style={{ color: 'white', opacity: 0.8 }}>{item.icon}</div>
                <span style={{ fontSize: '14px', fontFamily: "'Space Grotesk', monospace", color: 'white' }}>
                  {item.label}
                </span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileNav;