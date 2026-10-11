import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { PremierePage } from './pages/PremierePage';
import { ExplorePage } from './pages/ExplorePage';
import { FilmUniversePage } from './pages/FilmUniversePage';
import { ScreeningRoomPage } from './pages/ScreeningRoomPage';
import { MyCinemaPage } from './pages/MyCinemaPage';
import { TasteMapPage } from './pages/TasteMapPage';

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#0a0808] text-white flex flex-col font-sans selection:bg-amber-400 selection:text-black">
        <Navbar />
        <main className="flex-1 flex flex-col">
          <Routes>
            <Route path="/" element={<PremierePage />} />
            <Route path="/explore" element={<ExplorePage />} />
            <Route path="/film/:id" element={<FilmUniversePage />} />
            <Route path="/discussions" element={<ScreeningRoomPage />} />
            <Route path="/my-cinema" element={<MyCinemaPage />} />
            <Route path="/taste-map" element={<TasteMapPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;

