import React from 'react';
import { NavLink, Link } from 'react-router-dom';

export const Navbar: React.FC = () => {
  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `text-xs uppercase tracking-widest transition-colors duration-200 ${
      isActive ? 'text-amber-300 font-semibold border-b border-amber-400 pb-0.5' : 'text-neutral-400 hover:text-white'
    }`;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5 bg-gradient-to-b from-black/80 via-black/40 to-transparent backdrop-blur-xs">
      {/* Brand Logo */}
      <Link to="/" className="flex items-center gap-2 group">
        <span className="font-serif tracking-[0.25em] text-lg font-bold text-white group-hover:text-amber-400 transition-colors">
          CINEVISION
        </span>
      </Link>

      {/* Nav Links */}
      <nav className="hidden md:flex items-center space-x-8">
        <NavLink to="/explore" className={navLinkClass}>
          Explore
        </NavLink>
        <NavLink to="/discussions" className={navLinkClass}>
          Discussions
        </NavLink>
        <NavLink to="/my-cinema" className={navLinkClass}>
          My Cinema
        </NavLink>
        <NavLink to="/film/inception" className={navLinkClass}>
          Film Universe
        </NavLink>
        <NavLink to="/taste-map" className={navLinkClass}>
          Taste Map
        </NavLink>
      </nav>

      {/* Action buttons / Search */}
      <div className="flex items-center space-x-5">
        <button 
          aria-label="Search" 
          className="text-neutral-400 hover:text-white transition-colors cursor-pointer"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
        <button className="text-xs uppercase tracking-wider text-neutral-300 hover:text-white transition-colors cursor-pointer px-3 py-1.5">
          Login
        </button>
        <button className="text-xs uppercase tracking-wider text-neutral-900 bg-amber-400 hover:bg-amber-300 font-medium px-4 py-1.5 rounded-full transition-colors cursor-pointer shadow-sm shadow-amber-400/20">
          Sign Up
        </button>
      </div>
    </header>
  );
};

