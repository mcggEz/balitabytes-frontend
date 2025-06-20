import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const HeaderBar: React.FC = () => {
  const location = useLocation();
  
  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/subscription', label: 'Subscription' }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="w-full bg-white border-b border-gray-200">
      <div className="flex justify-between items-center px-4 py-4">
        <h1 className="text-3xl font-bold tracking-wide text-gray-800">balitabytes</h1>
        <div className="flex gap-2">
          <button className="px-4 py-2 text-xs font-semibold bg-black text-white rounded hover:bg-gray-800">SUBSCRIBE TO OUR NEWSLETTER</button>
        </div>
      </div>
      <nav className="flex justify-center space-x-6 py-2 bg-white">
        {navItems.map(item => (
          <Link 
            key={item.path} 
            to={item.path} 
            className={`text-sm font-medium transition-colors duration-300 ${
              isActive(item.path)
                ? 'text-black border-b-2 border-black'
                : 'text-gray-700 hover:text-black'
            }`}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default HeaderBar; 