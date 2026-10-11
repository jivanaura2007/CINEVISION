import React from 'react';
import { MOVIES } from '../data/mockData';
import { Link } from 'react-router-dom';

const BUBBLES = [
  { id: 'sci-fi', label: 'Sci-Fi Epics', x: '24%', y: '30%', size: 'w-24 h-24' },
  { id: 'existential', label: 'Existential Themes', x: '12%', y: '62%', size: 'w-28 h-28' },
  { id: 'interstellar', label: 'INTERSTELLAR', x: '48%', y: '50%', size: 'w-36 h-36', isHero: true },
  { id: 'time-space-1', label: 'Time & Space', x: '68%', y: '28%', size: 'w-24 h-24' },
  { id: 'time-space-2', label: 'Time & Space', x: '70%', y: '68%', size: 'w-24 h-24' },
  { id: 'philip-dick', label: 'Philip K. Dick Adaptations', x: '82%', y: '45%', size: 'w-28 h-28' },
  { id: 'visuals', label: 'Visual Masterpieces', x: '85%', y: '78%', size: 'w-28 h-28' },
];

export const TasteMapPage: React.FC = () => {
  const recommendations = MOVIES.slice(6, 10);

  return (
    <div className="relative min-h-screen bg-[#070606] text-white pt-24 pb-12 px-8 flex flex-col justify-between">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header */}
        <div className="mb-6">
          <h1 className="font-serif text-4xl md:text-5xl font-normal text-amber-100">
            Made for You
          </h1>
          <p className="mt-1 text-xs tracking-wider text-neutral-400">
            Suggestions based on your taste, search history and interactions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Central Interactive Interest Bubbles Graph */}
          <div className="lg:col-span-8 relative h-[480px] bg-[#100d0c]/70 border border-neutral-800/80 rounded-2xl overflow-hidden shadow-2xl flex items-center justify-center">
            {/* Background constellation lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40">
              <line x1="24%" y1="30%" x2="48%" y2="50%" stroke="#c8943a" strokeWidth="1" strokeDasharray="3 3" />
              <line x1="12%" y1="62%" x2="48%" y2="50%" stroke="#c8943a" strokeWidth="1" strokeDasharray="3 3" />
              <line x1="48%" y1="50%" x2="68%" y2="28%" stroke="#c8943a" strokeWidth="1" strokeDasharray="3 3" />
              <line x1="48%" y1="50%" x2="70%" y2="68%" stroke="#c8943a" strokeWidth="1" strokeDasharray="3 3" />
              <line x1="68%" y1="28%" x2="82%" y2="45%" stroke="#c8943a" strokeWidth="1" strokeDasharray="3 3" />
              <line x1="70%" y1="68%" x2="85%" y2="78%" stroke="#c8943a" strokeWidth="1" strokeDasharray="3 3" />
            </svg>

            {/* Glowing Orb Bubbles */}
            {BUBBLES.map((b) => (
              <div
                key={b.id}
                className={`absolute -translate-x-1/2 -translate-y-1/2 rounded-full flex items-center justify-center text-center p-2 cursor-pointer transition-transform hover:scale-110 shadow-lg ${
                  b.size
                } ${
                  b.isHero
                    ? 'bg-gradient-to-tr from-amber-600/40 via-amber-400/20 to-black border-2 border-amber-400/80 shadow-amber-500/20'
                    : 'bg-black/60 border border-neutral-700/80 backdrop-blur-xs text-neutral-300 hover:border-amber-400'
                }`}
                style={{ left: b.x, top: b.y }}
              >
                <span className={`text-[11px] leading-tight font-medium ${b.isHero ? 'font-serif text-white font-bold' : ''}`}>
                  {b.label}
                </span>
              </div>
            ))}
          </div>

          {/* Right Recommendations Sidebar */}
          <div className="lg:col-span-4 bg-[#120f0d] border border-neutral-800 rounded-2xl p-5 flex flex-col justify-between shadow-xl">
            <div>
              <h2 className="font-serif text-sm uppercase tracking-widest text-neutral-300 font-semibold mb-4">
                You Might Also Like
              </h2>

              <div className="space-y-3">
                {recommendations.map((movie) => (
                  <Link
                    key={movie.id}
                    to={`/film/${movie.id}`}
                    className="flex items-center gap-3 p-2 rounded-lg bg-black/40 hover:bg-neutral-800/60 border border-neutral-800/80 transition-colors cursor-pointer group"
                  >
                    <div
                      className="w-12 h-16 rounded overflow-hidden shrink-0 flex items-end p-1 text-[8px] font-bold text-white shadow"
                      style={{ background: movie.posterBg }}
                    >
                      <span className="truncate">{movie.title}</span>
                    </div>

                    <div className="flex-1 min-w-0">
                      <h4 className="text-xs font-semibold text-white group-hover:text-amber-300 truncate transition-colors">
                        {movie.title}
                      </h4>
                      <span className="text-[10px] text-emerald-400 font-medium">
                        {movie.matchScore}% match
                      </span>
                    </div>

                    <button className="text-neutral-500 hover:text-white p-1 text-sm font-light">
                      +
                    </button>
                  </Link>
                ))}
              </div>
            </div>

            <button className="w-full mt-4 py-2 text-xs uppercase tracking-widest text-amber-400 hover:text-amber-300 border border-amber-900/60 rounded-full bg-amber-950/20 transition-colors">
              Refresh Suggestions ↻
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar indicator */}
      <div className="relative z-10 max-w-7xl mx-auto w-full pt-10 text-[11px] tracking-widest text-neutral-500">
        <span className="text-amber-400 font-semibold">6. SUGGESTION PAGE — TASTE MAP</span> — Personalised recommendations using an interest mapping algorithm.
      </div>
    </div>
  );
};

