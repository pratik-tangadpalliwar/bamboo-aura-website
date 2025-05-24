import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-[#102015] text-gold">
      <Link to="/" className="text-xl font-bold">Bamboo Aura</Link>
      <div className="space-x-4">
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;