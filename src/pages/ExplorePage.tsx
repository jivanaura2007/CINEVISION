import React, { useState } from 'react';
import { MOVIES } from '../data/mockData';
import { Link } from 'react-router-dom';

const CATEGORIES = [
  'For You',
  'Trending',
  'Genres',
  'Mood',
  'Time Period',
  'Hidden Gems',
  'Award Winners'
];

export const ExplorePage: React.FC = () => {
  const [selectedCat, setSelectedCat] = useState('For You');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredMovies = MOVIES.filter(m =>
    m.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    m.genre.some(g => g.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="relative min-h-screen bg-[#0a0808] text-white pt-24 pb-12 px-8 flex flex-col justify-between">
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-950/20 via-black to-black" />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        {/* Title Header */}
        <div className="text-center mb-8">
          <h1 className="font-serif text-5xl md:text-6xl tracking-wide font-normal text-white">
            Explore Movies
          </h1>
          <p className="mt-2 text-xs tracking-[0.25em] text-neutral-400 uppercase">
            Search. Discover. Discuss. Experience.
          </p>

          {/* Search Bar matching reference */}
          <div className="mt-6 max-w-xl mx-auto relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for a movie, genre, actor, director..."
              className="w-full bg-[#181412]/80 border border-neutral-700/80 rounded-full px-6 py-3 pl-12 text-sm text-neutral-200 placeholder-neutral-500 focus:outline-none focus:border-amber-400/80 transition-colors shadow-inner"
            />
            <svg
              className="w-4 h-4 text-neutral-500 absolute left-4 top-1/2 -translate-y-1/2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        {/* Main Explore Content: Sidebar & Movie Grid */}
        <div className="flex flex-col lg:flex-row gap-8 items-start mt-10">
          {/* Left Category Filter Pills */}
          <div className="flex lg:flex-col gap-2 w-full lg:w-48 shrink-0 overflow-x-auto pb-2 lg:pb-0">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCat(cat)}
                className={`px-4 py-2 text-xs tracking-wider uppercase rounded-full text-left transition-all cursor-pointer whitespace-nowrap ${
                  selectedCat === cat
                    ? 'bg-amber-400/15 border border-amber-400 text-amber-300 font-medium'
                    : 'bg-[#151210]/60 border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Central Movie Posters Row / Grid */}
          <div className="flex-1 w-full">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {filteredMovies.slice(0, 5).map((movie) => (
                <Link
                  key={movie.id}
                  to={`/film/${movie.id}`}
                  className="group relative rounded-lg overflow-hidden border border-neutral-800 hover:border-amber-400/60 transition-all duration-300 aspect-[2/3] flex flex-col justify-end p-4 shadow-lg hover:shadow-amber-500/10 cursor-pointer"
                  style={{ background: movie.posterBg }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                  <div className="relative z-10">
                    <span className="text-[10px] tracking-widest text-amber-400 uppercase font-semibold">
                      {movie.genre[0]}
                    </span>
                    <h3 className="font-serif text-sm font-bold text-white group-hover:text-amber-300 transition-colors mt-0.5">
                      {movie.title}
                    </h3>
                    <div className="flex items-center justify-between text-[11px] text-neutral-400 mt-1">
                      <span>{movie.year}</span>
                      <span className="text-amber-400">★ {movie.rating}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Right quote block from reference */}
            <div className="mt-8 flex justify-between items-center text-xs text-neutral-500 border-t border-neutral-900 pt-4">
              <span className="text-neutral-400 max-w-sm tracking-wide">
                "EVERY FILM TAKES YOU SOMEWHERE. WHAT WILL YOU EXPLORE TODAY?"
              </span>
              <button className="text-xs uppercase tracking-widest text-amber-400 hover:text-amber-300 transition-colors flex items-center gap-1 cursor-pointer">
                <span>CUSTOM SUGGESTIONS</span>
                <span>→</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar indicator */}
      <div className="relative z-10 max-w-7xl mx-auto w-full pt-8 text-[11px] tracking-widest text-neutral-500">
        <span className="text-amber-400 font-semibold">2. EXPLORE PAGE</span> — Interactive movie discovery with search, filters, mood-based suggestions
      </div>
    </div>
  );
};

