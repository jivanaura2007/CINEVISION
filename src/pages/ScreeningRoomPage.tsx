import React, { useState } from 'react';
import { DISCUSSIONS } from '../data/mockData';

const TABS = [
  'All Discussions',
  'General',
  'Story & Screenplay',
  'Music & Sound',
  'VFX & Visuals',
  'Editing',
  'Hidden Details',
  'Theories',
  'Future Scope',
  'All in Cinema'
];

export const ScreeningRoomPage: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState('All Discussions');
  const [newComment, setNewComment] = useState('');

  return (
    <div className="relative min-h-screen bg-[#0d0a08] text-white pt-24 pb-12 px-8 flex flex-col justify-between">
      <div className="max-w-7xl mx-auto w-full">
        {/* Title Header */}
        <div className="text-center mb-8">
          <h1 className="font-serif text-4xl md:text-5xl font-normal text-amber-200">
            The Screening Room
          </h1>
          <p className="mt-1 text-xs tracking-[0.3em] uppercase text-neutral-400">
            DISCUSS • ANALYZE • DECODE
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-6">
          {/* Left Category Sidebar */}
          <div className="lg:col-span-3 flex flex-col space-y-1">
            {TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => setSelectedTab(tab)}
                className={`text-left text-xs uppercase tracking-wider py-2.5 px-4 rounded-md transition-all cursor-pointer ${
                  selectedTab === tab
                    ? 'bg-amber-900/30 border-l-2 border-amber-400 text-amber-300 font-semibold'
                    : 'text-neutral-400 hover:text-white hover:bg-neutral-900/50'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Central Discussions Area */}
          <div className="lg:col-span-6 space-y-6">
            {/* Post Creation Box */}
            <div className="bg-[#181412] border border-neutral-800 rounded-xl p-4 shadow-lg">
              <div className="flex gap-3">
                <span className="text-2xl">👤</span>
                <textarea
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  placeholder="I think the ending was mind-blowing but the pacing felt a bit slow in the second half..."
                  rows={2}
                  className="w-full bg-transparent text-sm text-neutral-200 placeholder-neutral-500 focus:outline-none resize-none"
                />
              </div>
              <div className="flex items-center justify-between border-t border-neutral-800/80 pt-3 mt-2 text-xs">
                <div className="flex gap-4 text-neutral-400">
                  <button className="hover:text-amber-300 flex items-center gap-1 cursor-pointer">
                    <span>🏷️</span> Add Spoiler Tag
                  </button>
                  <button className="hover:text-amber-300 flex items-center gap-1 cursor-pointer">
                    <span>📷</span> Add Media
                  </button>
                </div>
                <button className="bg-amber-500/80 hover:bg-amber-500 text-black font-semibold px-5 py-1.5 rounded-full transition-colors cursor-pointer text-xs">
                  Post
                </button>
              </div>
            </div>

            {/* Discussion Feed */}
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs text-neutral-400 pb-2 border-b border-neutral-800">
                <span className="font-semibold text-white">Top Discussions</span>
                <div className="flex gap-4">
                  <span className="text-amber-400 cursor-pointer">Latest</span>
                  <span className="hover:text-white cursor-pointer">Trending</span>
                  <span className="hover:text-white cursor-pointer">Most Insightful</span>
                </div>
              </div>

              {DISCUSSIONS.map((d) => (
                <div
                  key={d.id}
                  className="bg-[#14100e] border border-neutral-800/80 rounded-xl p-4 hover:border-neutral-700 transition-colors shadow-md"
                >
                  <div className="flex items-center gap-2 text-xs text-neutral-400 mb-2">
                    <span>{d.avatar}</span>
                    <span className="font-semibold text-neutral-200">{d.author}</span>
                    <span>•</span>
                    <span>{d.timeAgo}</span>
                  </div>
                  <h3 className="font-serif text-base font-semibold text-amber-100 hover:text-amber-300 transition-colors cursor-pointer">
                    {d.title}
                  </h3>
                  <p className="text-xs text-neutral-400 mt-2 line-clamp-2 leading-relaxed">
                    {d.content}
                  </p>
                  <div className="flex items-center justify-between mt-4 pt-3 border-t border-neutral-900 text-xs">
                    <div className="flex gap-2">
                      {d.tags.map((tag) => (
                        <span key={tag} className="bg-neutral-800/80 text-neutral-300 px-2.5 py-0.5 rounded text-[10px]">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-4 text-neutral-400">
                      <span>⬆ {d.upvotes}</span>
                      <span>💬 {d.comments}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Rating & Stats Card */}
          <div className="lg:col-span-3">
            <div className="bg-[#14100e] border border-neutral-800 rounded-xl p-5 shadow-lg">
              <span className="text-xs text-neutral-400 uppercase tracking-widest">Community Rating</span>
              <div className="mt-2 flex items-baseline gap-2">
                <span className="font-serif text-4xl font-bold text-amber-400">4.7</span>
                <span className="text-neutral-500 text-sm">/ 5</span>
              </div>
              <p className="text-[11px] text-neutral-500 mt-1">Based on 48.2K genuine reviews</p>

              <div className="space-y-2 mt-5 text-xs text-neutral-400 border-t border-neutral-800/80 pt-4">
                <div className="flex justify-between">
                  <span>Story</span>
                  <span className="text-white font-medium">4.8</span>
                </div>
                <div className="flex justify-between">
                  <span>Screenplay</span>
                  <span className="text-white font-medium">4.7</span>
                </div>
                <div className="flex justify-between">
                  <span>Music</span>
                  <span className="text-white font-medium">4.6</span>
                </div>
                <div className="flex justify-between">
                  <span>VFX</span>
                  <span className="text-white font-medium">4.9</span>
                </div>
                <div className="flex justify-between">
                  <span>Editing</span>
                  <span className="text-white font-medium">4.8</span>
                </div>
                <div className="flex justify-between">
                  <span>Rewatch Value</span>
                  <span className="text-white font-medium">4.7</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar indicator */}
      <div className="relative z-10 max-w-7xl mx-auto w-full pt-10 text-[11px] tracking-widest text-neutral-500">
        <span className="text-amber-400 font-semibold">4. DISCUSSION PAGE — THE SCREENING ROOM</span> — Structured, respectful, spam-free discussions with detailed analysis.
      </div>
    </div>
  );
};

