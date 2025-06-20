import React from 'react';
import { Link } from 'react-router-dom';

const navItems = [
  'Home', 'About', 'Subscription'
];

const HeaderBar: React.FC = () => (
  <header className="w-full bg-white border-b border-gray-200">
    <div className="flex justify-between items-center px-4 py-4">
      <h1 className="text-3xl font-bold tracking-wide text-gray-800">balitabytes</h1>
      <div className="flex gap-2">
        
        <button className="px-4 py-2 text-xs font-semibold bg-black text-white rounded hover:bg-gray-800">SUBSCRIBE TO OUR NEWSLETTER</button>
      </div>
    </div>
    <nav className="flex justify-center space-x-6 py-2 bg-white">
      {navItems.map(item => (
        <Link key={item} to="#" className="text-sm text-gray-700 hover:text-black font-medium">
          {item}
        </Link>
      ))}
    </nav>
  </header>
);

export default HeaderBar; 