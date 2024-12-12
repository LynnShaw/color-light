import React from 'react';
import { Menu } from 'lucide-react';
import { NavLink } from '../ui/NavLink';

export function Header() {
  return (
    <header className="bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Menu className="h-6 w-6 text-gray-600" />
            <span className="ml-2 text-xl font-semibold text-gray-900">Brand</span>
          </div>
          <div className="hidden sm:flex space-x-8">
            <NavLink href="#home">Home</NavLink>
            <NavLink href="#features">Features</NavLink>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </div>
        </div>
      </nav>
    </header>
  );
}