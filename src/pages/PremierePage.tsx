import React from 'react';
import { Link } from 'react-router-dom';
import { CinemaScene } from '../components/three/CinemaScene';

export const PremierePage: React.FC = () => {
  return (
    <div className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden bg-[#0a0808] text-white">
      {/* 3D Interactive Cinema Canvas */}
      <CinemaScene />

      {/* Subtle vignettes and dark gradient overlays to match reference depth */}
      <div className="absolute inset-0 pointer-events-none z-10 bg-radial from-transparent via-black/40 to-black/85" />
      <div className="absolute inset-0 pointer-events-none z-10 bg-gradient-to-t from-black via-transparent to-black/60" />

      {/* Left Vertical Annotation */}
      <div className="hidden lg:flex absolute left-8 top-1/2 -translate-y-1/2 z-20 flex-col space-y-4 text-neutral-500 text-[11px] uppercase tracking-[0.3em] font-medium">
        <span className="hover:text-amber-400 transition-colors cursor-pointer">DISCUSS</span>
        <span className="hover:text-amber-400 transition-colors cursor-pointer">DECODE</span>
        <span className="hover:text-amber-400 transition-colors cursor-pointer">DISCOVER</span>
        <span className="hover:text-amber-400 transition-colors cursor-pointer">BELONG</span>
      </div>

      {/* Right Vertical Quote Block */}
      <div className="hidden lg:block absolute right-10 top-1/2 -translate-y-1/2 z-20 max-w-[210px] text-right">
        <p className="text-[12px] uppercase tracking-[0.25em] text-neutral-400 leading-relaxed font-light">
          A COMMUNITY FOR PEOPLE WHO FEEL MOVIES DIFFERENTLY.
        </p>
      </div>

      {/* Central Hero Block */}
      <div className="relative z-20 flex-1 flex flex-col items-center justify-center text-center px-4 pt-20">
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl tracking-[0.25em] text-white font-extrabold drop-shadow-[0_4px_24px_rgba(200,148,58,0.25)]">
          CINEVISION
        </h1>

        <p className="mt-4 text-xs md:text-sm tracking-[0.35em] text-neutral-300 uppercase font-light max-w-xl">
          MOVIES ARE NOT JUST STORIES, THEY ARE UNIVERSES.
        </p>

        {/* CTA Button */}
        <div className="mt-12">
          <Link
            to="/explore"
            className="group inline-flex items-center gap-3 px-8 py-3.5 rounded-full border border-neutral-600 bg-black/60 hover:bg-amber-400 hover:text-black hover:border-amber-400 text-neutral-200 text-xs uppercase tracking-[0.25em] font-semibold transition-all duration-300 shadow-lg hover:shadow-amber-400/20 backdrop-blur-md cursor-pointer"
          >
            <span>ENTER THE CINEMA</span>
            <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
          </Link>
        </div>
      </div>

      {/* Bottom Footer Section */}
      <div className="relative z-20 flex items-end justify-between px-8 py-6 text-xs text-neutral-500">
        <div className="text-[11px] tracking-widest text-neutral-400">
          <span className="text-amber-400 font-semibold">1. THE PREMIERE</span>
          <span className="hidden sm:inline text-neutral-600 ml-2">— A cinematic 3D entrance with immersive transitions</span>
        </div>

        {/* Scroll Indicator */}
        <div className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors cursor-pointer">
          <span className="text-[10px] tracking-[0.25em] uppercase">SCROLL</span>
          <svg className="w-3.5 h-3.5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </div>
  );
};

