import React, { useState } from 'react';
import { MOVIES } from '../data/mockData';
import { Link } from 'react-router-dom';

const SIDEBAR_ITEMS = [
  'My Profile',
  'Watched List',
  'Watchlist',
  'Favourites',
  'Custom Collections',
  'My Reviews',
  'My Activity',
  'Settings'
];

export const MyCinemaPage: React.FC = () => {
  const [activeItem, setActiveItem] = useState('Watched List');

  return (
    <div className="relative min-h-screen bg-[#0a0808] text-white pt-24 pb-12 px-8 flex flex-col justify-between">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header with Title and View Profile Button */}
        <div className="flex items-center justify-between pb-6 border-b border-neutral-800">
          <div>
            <h1 className="font-serif text-4xl md:text-5xl font-medium text-white">
              My Cinema
            </h1>
            <p className="mt-1 text-xs tracking-[0.25em] uppercase text-neutral-400">
              YOUR JOURNEY THROUGH WORLDS
            </p>
          </div>

          <button className="px-5 py-2 text-xs uppercase tracking-widest rounded-full border border-neutral-700 bg-neutral-900 hover:bg-neutral-800 text-neutral-300 transition-colors cursor-pointer">
            View Public Profile
          </button>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 mt-8">
          {/* Left Sidebar */}
          <div className="w-full lg:w-48 shrink-0 flex flex-col space-y-1">
            {SIDEBAR_ITEMS.map((item) => (
              <button
                key={item}
                onClick={() => setActiveItem(item)}
                className={`text-left text-xs uppercase tracking-wider py-2.5 px-4 rounded transition-all cursor-pointer ${
                  activeItem === item
                    ? 'bg-amber-900/30 border-l-2 border-amber-400 text-amber-300 font-semibold'
                    : 'text-neutral-400 hover:text-white hover:bg-neutral-900/40'
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          {/* Movie Row & Add Movie Card */}
          <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {MOVIES.slice(0, 5).map((movie) => (
              <Link
                key={movie.id}
                to={`/film/${movie.id}`}
                className="group relative rounded-lg overflow-hidden border border-neutral-800 hover:border-amber-400/80 transition-all aspect-[2/3] flex flex-col justify-end p-3 shadow-md"
                style={{ background: movie.posterBg }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                <div className="relative z-10">
                  <h3 className="font-serif text-xs font-bold text-white group-hover:text-amber-300 transition-colors truncate">
                    {movie.title}
                  </h3>
                  <span className="text-[10px] text-neutral-400">{movie.year}</span>
                </div>
              </Link>
            ))}

            {/* "+ Add Movie" Card */}
            <div className="rounded-lg border-2 border-dashed border-neutral-800 hover:border-amber-400/60 aspect-[2/3] flex flex-col items-center justify-center p-3 text-neutral-500 hover:text-amber-400 transition-colors cursor-pointer bg-neutral-900/20">
              <span className="text-3xl font-light">+</span>
              <span className="text-xs uppercase tracking-wider mt-2 font-medium">Add Movie</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar indicator */}
      <div className="relative z-10 max-w-7xl mx-auto w-full pt-10 text-[11px] tracking-widest text-neutral-500">
        <span className="text-amber-400 font-semibold">5. PERSONAL LIBRARY</span> — Unique watched list, custom collections, and more.
      </div>
    </div>
  );
};

