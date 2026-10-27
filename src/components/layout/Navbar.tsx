import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { navigationItems } from '../../data/navigation';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const isItemActive = (itemPath: string) => {
    if (itemPath === '/') return location.pathname === '/';
    if (itemPath === '/our-work') {
      return (
        location.pathname === '/our-work' ||
        location.pathname === '/portfolio' ||
        location.pathname.startsWith('/case-study')
      );
    }
    return location.pathname.startsWith(itemPath);
  };

  return (
    <header
      id="main-navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-xl ${
        isScrolled
          ? 'bg-surface/90 border-b border-outline-variant/30 shadow-[0_4px_24px_rgba(0,0,0,0.4)]'
          : 'bg-surface/75 border-b border-transparent'
      }`}
    >
      <div className="h-20 w-full px-4 sm:px-6 md:px-12 lg:px-20 flex items-center justify-between">
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-primary/40 rounded">
          <img
            src="/logo.png"
            alt="ZNSoftech Logo"
            className="h-8 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
          <span className="hidden sm:inline font-headline-sm text-headline-sm text-on-surface tracking-tight uppercase">
            ZNSOFTECH
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
          {navigationItems.map((item) => {
            const active = isItemActive(item.path);
            return (
              <NavLink
                key={item.path}
                to={item.path}
                className={`nav-link-indicator transition-colors flex items-center gap-1.5 font-label-lg text-label-lg ${
                  active
                    ? 'text-primary font-bold active'
                    : 'text-on-surface-variant hover:text-on-surface'
                }`}
              >
                {active && <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />}
                {item.label}
              </NavLink>
            );
          })}
        </nav>

        {/* Right Action & Mobile Toggle */}
        <div className="flex items-center gap-3 sm:gap-4">
          <Link
            to="/contact"
            className="cta-glow-pulse hidden sm:inline-flex items-center justify-center font-label-lg text-label-lg px-6 py-2 rounded-full bg-primary-container text-on-primary-container hover:bg-primary hover:text-on-primary active:scale-95 transition-all duration-300 shadow-md font-semibold"
          >
            Let's Talk
          </Link>

          <Link
            to="/contact"
            aria-label="Account / Portal"
            className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shadow-[0_0_12px_rgba(182,196,255,0.3)] hover:scale-110 active:scale-90 transition-transform duration-200 cursor-pointer"
          >
            <span className="material-symbols-outlined text-on-primary text-[18px]">person</span>
          </Link>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-on-surface hover:text-primary hover:bg-surface-container transition-colors focus:outline-none focus:ring-2 focus:ring-primary/40"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-outline-variant/30 bg-surface-dark-elevated/95 backdrop-blur-2xl px-6 py-6 shadow-2xl transition-all duration-300">
          <nav className="flex flex-col gap-4">
            {navigationItems.map((item) => {
              const active = isItemActive(item.path);
              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between py-2.5 px-3 rounded-lg text-body-lg font-medium transition-colors ${
                    active
                      ? 'bg-primary/10 text-primary font-bold'
                      : 'text-on-surface-variant hover:text-on-surface hover:bg-white/[0.04]'
                  }`}
                >
                  <span>{item.label}</span>
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </NavLink>
              );
            })}
            <div className="pt-4 border-t border-outline-variant/20">
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3 rounded-lg bg-primary-container text-on-primary-container font-label-lg text-center font-semibold hover:bg-primary hover:text-on-primary flex items-center justify-center gap-2 transition-all shadow-lg shadow-primary-container/20"
              >
                <span>Start Your Project</span>
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
