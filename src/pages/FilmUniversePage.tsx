import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MOVIES } from '../data/mockData';

const SECTIONS = [
  'Overview',
  'Story',
  'Characters',
  'Screenplay',
  'Music',
  'VFX & Editing',
  'Hidden Details',
  'Theories',
  'Discussions'
];

export const FilmUniversePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [activeTab, setActiveTab] = useState('Overview');

  const movie = MOVIES.find((m) => m.id === id) || MOVIES[0]; // defaults to Inception

  return (
    <div className="relative min-h-screen bg-[#06080c] text-white pt-20 flex flex-col justify-between overflow-hidden">
      {/* City-Folding Cinematic Dramatic Background */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/30 via-black to-black" />
        {/* Abstract folded geometry overlay for Inception atmosphere */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black" />
      </div>

      <div className="relative z-10 flex-1 flex max-w-7xl mx-auto w-full px-8 py-6 gap-12">
        {/* Left Sub-Navigation Menu */}
        <div className="w-52 shrink-0 flex flex-col space-y-2 border-r border-neutral-800/80 pr-6">
          {SECTIONS.map((sec) => (
            <button
              key={sec}
              onClick={() => setActiveTab(sec)}
              className={`flex items-center justify-between text-xs tracking-wider uppercase py-2 px-3 rounded text-left transition-colors cursor-pointer ${
                activeTab === sec
                  ? 'bg-neutral-800/80 text-amber-400 font-semibold border-l-2 border-amber-400'
                  : 'text-neutral-400 hover:text-white hover:bg-neutral-900/40'
              }`}
            >
              <span>{sec}</span>
              {activeTab === sec && <span className="text-[10px]">›</span>}
            </button>
          ))}
        </div>

        {/* Central Film Hero / Details */}
        <div className="flex-1 flex flex-col justify-center">
          <span className="text-[11px] tracking-[0.3em] uppercase text-neutral-400 font-semibold">
            {movie.director}
          </span>

          <h1 className="font-serif text-6xl md:text-8xl tracking-wide font-black text-red-600 mt-2 drop-shadow-[0_2px_12px_rgba(220,38,38,0.4)]">
            {movie.title}
          </h1>

          <p className="font-serif text-lg md:text-xl tracking-[0.2em] uppercase text-neutral-200 mt-2 font-medium">
            {movie.tagline}
          </p>

          <div className="flex items-center gap-4 text-xs text-neutral-400 mt-4 tracking-wider">
            <span>{movie.year}</span>
            <span>•</span>
            <span>{movie.genre.join(' • ')}</span>
            <span>•</span>
            <span>{movie.runtime}</span>
          </div>

          {/* Action Row */}
          <div className="mt-8 flex items-center gap-6">
            <button className="flex items-center gap-2.5 px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs uppercase tracking-widest font-semibold backdrop-blur-md transition-colors cursor-pointer">
              <span>▶</span>
              <span>Watch Trailer</span>
            </button>

            <Link
              to="/discussions"
              className="text-xs uppercase tracking-widest text-amber-400 hover:text-amber-300 transition-colors"
            >
              Join Theories & Discussions →
            </Link>
          </div>
        </div>

        {/* Right Iconic Quote Quote Block */}
        {movie.quote && (
          <div className="hidden lg:flex w-64 shrink-0 flex-col justify-end text-right pb-12">
            <p className="font-serif text-sm tracking-[0.15em] text-neutral-300 uppercase leading-relaxed">
              "{movie.quote}"
            </p>
            <span className="text-[10px] tracking-[0.25em] text-neutral-500 uppercase mt-2">
              — {movie.quoteAuthor}
            </span>
          </div>
        )}
      </div>

      {/* Bottom Bar indicator */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-8 py-6 text-[11px] tracking-widest text-neutral-500 border-t border-neutral-900">
        <span className="text-amber-400 font-semibold">3. MOVIE PAGE — A STORYTELLING EXPERIENCE</span> — The page itself tells the story through 3D visuals, scroll interactions and cinematic design.
      </div>
    </div>
  );
};

