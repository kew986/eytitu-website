import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { ScrollToTopOrHash } from './components/utils/ScrollToTopOrHash';
import { HomePage } from './pages/HomePage';
import { UniversalAppPage } from './pages/UniversalAppPage';
import { PublicMobilityMapPage } from './pages/PublicMobilityMapPage';
import { FleetConsolePage } from './pages/FleetConsolePage';
import { AboutPage } from './pages/AboutPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { TermsPage } from './pages/TermsPage';

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#080909] text-white flex flex-col font-['Poppins'] selection:bg-[#F8E804] selection:text-black">
        {/* Scroll management: top on route transition, smooth offset on section hash */}
        <ScrollToTopOrHash />

        {/* 1. Shared Sticky Navigation Header */}
        <Header />

        {/* Main Content Area */}
        <main className="flex-1 w-full">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/platform/universal-app" element={<UniversalAppPage />} />
            <Route path="/platform/public-mobility-map" element={<PublicMobilityMapPage />} />
            <Route path="/platform/fleet-console" element={<FleetConsolePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/terms" element={<TermsPage />} />
            {/* Catch-all route gracefully navigates to homepage */}
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
