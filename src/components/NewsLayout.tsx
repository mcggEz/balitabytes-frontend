import React from 'react';
import TopBar from './TopBar';
import HeaderBar from './HeaderBar';
import Footer from './Footer';

const NewsLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="min-h-screen bg-gray-50 flex flex-col">
    <TopBar />
    <HeaderBar />
    <main className="flex-1 max-w-6xl mx-auto pl-2 pr-4 py-8">
      {children}
    </main>
    <Footer />
  </div>
);

export default NewsLayout; 