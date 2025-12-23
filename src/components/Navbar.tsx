import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Plane, Menu, X, User, Bell } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-slate-900/95 backdrop-blur-sm fixed w-full z-50 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Plane className="h-8 w-8 text-yellow-400" />
              <span className="text-xl font-bold text-white">JetCharter</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/search" className="text-gray-300 hover:text-white transition-colors">
              Search Flights
            </Link>
            <Link to="/fleet" className="text-gray-300 hover:text-white transition-colors">
              Fleet
            </Link>
            <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
              About
            </Link>
            <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
              Contact
            </Link>
            <div className="flex items-center space-x-4">
              <Bell className="h-5 w-5 text-gray-300 hover:text-white cursor-pointer transition-colors" />
              <Link
                to="/dashboard"
                className="flex items-center space-x-2 bg-yellow-400 text-slate-900 px-4 py-2 rounded-lg hover:bg-yellow-300 transition-colors font-medium"
              >
                <User className="h-4 w-4" />
                <span>Dashboard</span>
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-slate-900 border-t border-slate-800">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              to="/search"
              className="block px-3 py-2 text-gray-300 hover:text-white transition-colors"
            >
              Search Flights
            </Link>
            <Link
              to="/fleet"
              className="block px-3 py-2 text-gray-300 hover:text-white transition-colors"
            >
              Fleet
            </Link>
            <Link
              to="/about"
              className="block px-3 py-2 text-gray-300 hover:text-white transition-colors"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="block px-3 py-2 text-gray-300 hover:text-white transition-colors"
            >
              Contact
            </Link>
            <Link
              to="/dashboard"
              className="block px-3 py-2 bg-yellow-400 text-slate-900 rounded-lg font-medium mt-4"
            >
              Dashboard
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;