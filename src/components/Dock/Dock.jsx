'use client';

import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import { Children, cloneElement, useEffect, useMemo, useRef, useState } from 'react';

function DockItem({ children, className = '', onClick, mouseX, spring, distance, magnification, baseItemSize }) {
  const ref = useRef(null);
  const isHovered = useMotionValue(0);

  const mouseDistance = useTransform(mouseX, val => {
    const rect = ref.current?.getBoundingClientRect() ?? {
      x: 0,
      width: baseItemSize
    };
    return val - rect.x - baseItemSize / 2;
  });

  const targetSize = useTransform(mouseDistance, [-distance, 0, distance], [baseItemSize, magnification, baseItemSize]);
  const size = useSpring(targetSize, spring);

  return (
    <motion.div
      ref={ref}
      style={{
        width: size,
        height: size
      }}
      onHoverStart={() => isHovered.set(1)}
      onHoverEnd={() => isHovered.set(0)}
      onFocus={() => isHovered.set(1)}
      onBlur={() => isHovered.set(0)}
      onClick={onClick}
      className={`dock-item ${className}`}
      tabIndex={0}
      role="button"
      aria-haspopup="true"
    >
      {Children.map(children, child => cloneElement(child, { isHovered }))}
    </motion.div>
  );
}

function DockLabel({ children, className = '', ...rest }) {
  const { isHovered } = rest;
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const unsubscribe = isHovered.on('change', latest => {
      setIsVisible(latest === 1);
    });
    return () => unsubscribe();
  }, [isHovered]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: -10 }}
          exit={{ opacity: 0, y: 0 }}
          transition={{ duration: 0.2 }}
          className={`dock-label ${className}`}
          role="tooltip"
          style={{ x: '-50%' }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function DockIcon({ children, className = '' }) {
  return <div className={`dock-icon ${className}`}>{children}</div>;
}

// Mobile Bottom Navigation Component
function MobileBottomNav({ items }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  if (!items || items.length === 0) return null;

  const visibleItems = items.slice(0, 3);
  const menuItems = items.slice(3);

  return (
    <div className="mobile-dock-container">
      <div className="mobile-bottom-bar">
        {visibleItems.map((item, index) => (
          <button
            key={index}
            onClick={() => {
              if (item.onClick) item.onClick();
              setIsMenuOpen(false);
            }}
            className="mobile-dock-item"
            aria-label={item.label}
          >
            <div className="mobile-dock-icon">{item.icon}</div>
            <span className="mobile-dock-label">{item.label}</span>
          </button>
        ))}
        
        {menuItems.length > 0 && (
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`mobile-dock-item mobile-menu-toggle ${isMenuOpen ? 'active' : ''}`}
            aria-label="Menu"
          >
            <div className="mobile-dock-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </div>
            <span className="mobile-dock-label">Menu</span>
          </button>
        )}
      </div>

      <AnimatePresence>
        {isMenuOpen && menuItems.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.2 }}
            className="mobile-dropdown-menu"
          >
            {menuItems.map((item, index) => (
              <button
                key={index}
                onClick={() => {
                  if (item.onClick) item.onClick();
                  setIsMenuOpen(false);
                }}
                className="mobile-dropdown-item"
              >
                <div className="mobile-dropdown-icon">{item.icon}</div>
                <span className="mobile-dropdown-label">{item.label}</span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Dock({
  items,
  className = '',
  spring = { mass: 0.1, stiffness: 150, damping: 12 },
  magnification = 70,
  distance = 200,
  panelHeight = 68,
  dockHeight = 256,
  baseItemSize = 50
}) {
  const [isMobile, setIsMobile] = useState(false);
  const mouseX = useMotionValue(Infinity);
  const isHovered = useMotionValue(0);

  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const maxHeight = useMemo(
    () => Math.max(dockHeight, magnification + magnification / 2 + 4),
    [magnification, dockHeight]
  );
  const heightRow = useTransform(isHovered, [0, 1], [panelHeight, maxHeight]);
  const height = useSpring(heightRow, spring);

  // Mobile view
  if (isMobile) {
    return <MobileBottomNav items={items} />;
  }

  // Desktop view
  return (
    <motion.div style={{ height }} className="dock-outer">
      <motion.div
        onMouseMove={({ pageX }) => {
          isHovered.set(1);
          mouseX.set(pageX);
        }}
        onMouseLeave={() => {
          isHovered.set(0);
          mouseX.set(Infinity);
        }}
        className={`dock-panel ${className}`}
        style={{ height: panelHeight }}
        role="toolbar"
        aria-label="Application dock"
      >
        {items.map((item, index) => (
          <DockItem
            key={index}
            onClick={item.onClick}
            className={item.className}
            mouseX={mouseX}
            spring={spring}
            distance={distance}
            magnification={magnification}
            baseItemSize={baseItemSize}
          >
            <DockIcon>{item.icon}</DockIcon>
            <DockLabel>{item.label}</DockLabel>
          </DockItem>
        ))}
      </motion.div>
    </motion.div>
  );
}