import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { ScrollToTopOrHash } from './components/utils/ScrollToTopOrHash';
import { HomePage } from './pages/HomePage';

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#080909] text-white flex flex-col font-['Poppins'] selection:bg-[#F8E804] selection:text-black">
        {/* Scroll management: top on route transition, smooth offset on section hash */}
        <ScrollToTopOrHash />

        {/* 1. Shared Sticky Navigation Header */}
        <Header />

        {/* Main Landing Page Content */}
        <main className="flex-1 w-full">
          <Routes>
            <Route path="/" element={<HomePage />} />
            {/* Catch-all route returns to the main landing page */}
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>

        {/* 2. Shared Footer Section & Bottom Copyright */}
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
