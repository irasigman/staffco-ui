import { useState } from 'react';
import { NavbarSearch } from './navbar';

const HoverNavbar = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div 
      className="fixed left-0 top-0 h-full"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {/* Hover area */}
      <div className="w-24 h-full bg-transparent transition-colors" />
      
      {/* Navbar */}
      <div className={`absolute top-0 left-0 h-full bg-black shadow-lg w-64 transform transition-transform duration-300 ${isVisible ? 'translate-x-0' : '-translate-x-64'}`}>
        <NavbarSearch  />
      </div>

    </div>
  );
};

export default HoverNavbar;