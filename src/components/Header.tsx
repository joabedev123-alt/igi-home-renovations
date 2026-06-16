import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const lastScrollY = React.useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      setScrolled(current > 20);
      setHidden(current > lastScrollY.current && current > 80);
      lastScrollY.current = current;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/projects', label: 'Projects' },
    { path: '/project-management', label: 'Project Management' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          transition: 'transform 0.35s ease, background 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease',
          transform: hidden ? 'translateY(-100%)' : 'translateY(0)',
          background: scrolled
            ? 'rgba(17, 19, 42, 0.97)'
            : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled
            ? '1px solid rgba(88, 199, 232, 0.15)'
            : '1px solid transparent',
          boxShadow: scrolled ? '0 4px 30px rgba(0,0,0,0.3)' : 'none',
        }}
      >
        <div className="container-custom" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '96px' }}>
          {/* Logo */}
          <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
            <img src="/logo.png" alt="IGI Home Renovations" style={{ height: '80px', width: 'auto' }} />
          </Link>

          {/* Desktop Nav + CTAs */}
          <div className="hide-mobile" style={{ display: 'flex', alignItems: 'center', gap: '3cm' }}>
            <nav style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`nav-link ${isActive(link.path) ? 'active' : ''}`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div style={{ display: 'flex', gap: '10px', flexShrink: 0 }}>
              <a href="tel:+13214244693" className="btn-call" style={{ fontSize: '13px', padding: '10px 16px', whiteSpace: 'nowrap' }}>
                <i className="bi bi-telephone-fill" style={{ fontSize: '12px' }}></i>
                Call Now
              </a>
              <a href="sms:+13214244693" className="btn-text" style={{ fontSize: '13px', padding: '10px 16px', whiteSpace: 'nowrap' }}>
                <i className="bi bi-chat-dots-fill" style={{ fontSize: '12px' }}></i>
                Get Free Quote
              </a>
            </div>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="show-mobile-only"
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{
              background: 'transparent',
              border: '1px solid rgba(88,199,232,0.3)',
              borderRadius: '8px',
              padding: '8px 10px',
              cursor: 'pointer',
              color: 'white',
              fontSize: '20px',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <i className={mobileOpen ? 'bi bi-x-lg' : 'bi bi-list'}></i>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              style={{
                background: 'rgba(15, 27, 61, 0.98)',
                borderTop: '1px solid rgba(88,199,232,0.15)',
                overflow: 'hidden',
              }}
            >
              <div style={{ padding: '16px 24px 24px' }}>
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    style={{
                      display: 'block',
                      padding: '14px 0',
                      borderBottom: '1px solid rgba(88,199,232,0.08)',
                      fontFamily: 'Inter',
                      fontSize: '15px',
                      fontWeight: '500',
                      color: isActive(link.path) ? '#58C7E8' : 'rgba(255,255,255,0.8)',
                      textDecoration: 'none',
                    }}
                  >
                    {link.label}
                  </Link>
                ))}
                <div style={{ display: 'flex', gap: '12px', marginTop: '20px' }}>
                  <a href="tel:+13214244693" className="btn-call" style={{ flex: 1, justifyContent: 'center' }}>
                    <i className="bi bi-telephone-fill"></i> Call Now
                  </a>
                  <a href="sms:+13214244693" className="btn-text" style={{ flex: 1, justifyContent: 'center' }}>
                    <i className="bi bi-chat-dots-fill"></i> Get Free Quote
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
      {/* Spacer removed globally */}
    </>
  );
};

export default Header;
