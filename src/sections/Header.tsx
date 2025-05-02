"use client";

import { useState, useEffect } from "react";
import MenuIcon from "@/assets/icon-menu.svg";
import { Button } from "../../components/button";
import { Volume2 } from "lucide-react"; // Using lucide-react for sound icon

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);

  // Handle checking if we're in mobile view
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobileView(window.innerWidth <= 320);
    };

    // Check on initial load
    checkIfMobile();
    
    // Add event listener
    window.addEventListener('resize', checkIfMobile);
    
    // Clean up
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 py-4 leading-none md:h-0">
      <div className="w-[90%] md:w-[80%] m-auto">
        <div className="flex items-center justify-between p-2.5 border border-white/15 rounded-full max-w-[100%] mx-auto backdrop-blur relative">
          <div className="bg-black/5 absolute inset-0 rounded-full -z-10 backdrop-blur"></div>
          <div>
            <div className="inline-flex items-center justify-center gap-1 p-1 border rounded-full w-25 border-white/15">
              <div className="h-[30px] w-[30px]"></div>
              <div className="mr-1 text-sm font-extrabold font-cinzel">
                RV
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <nav className="flex gap-8 text-sm font-cinzel">
              <a className="transition text-white/50 hover:text-white" href="#">
                About
              </a>
              <a className="transition text-white/50 hover:text-white" href="#">
                Services
              </a>
              <a className="transition text-white/50 hover:text-white" href="#">
                Brand Elevation
              </a>
              <a className="transition text-white/50 hover:text-white" href="#">
                Contact Me
              </a>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden md:block">
              <Button>Get Quote</Button>
            </div>

            {/* Hamburger Menu Button */}
            <button 
              onClick={toggleMenu} 
              className="md:hidden focus:outline-none"
              aria-label="Toggle menu"
            >
              <MenuIcon className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 pt-20 bg-black/90 md:hidden">
          <div className="w-[90%] mx-auto">
            <nav className="flex flex-col gap-6 text-base font-cinzel">
              <a 
                className="transition px-4 py-2 border border-white/15 rounded-lg text-white hover:bg-white/10" 
                href="#"
                onClick={toggleMenu}
              >
                About
              </a>
              <a 
                className="transition px-4 py-2 border border-white/15 rounded-lg text-white hover:bg-white/10" 
                href="#"
                onClick={toggleMenu}
              >
                Services
              </a>
              <a 
                className="transition px-4 py-2 border border-white/15 rounded-lg text-white hover:bg-white/10" 
                href="#"
                onClick={toggleMenu}
              >
                Brand Elevation
              </a>
              <a 
                className="transition px-4 py-2 border border-white/15 rounded-lg text-white hover:bg-white/10" 
                href="#"
                onClick={toggleMenu}
              >
                Contact Me
              </a>
              <div className="mt-4">
                <Button>Get Quote</Button>
              </div>
            </nav>
            <button 
              onClick={toggleMenu}
              className="absolute top-6 right-6 text-white p-2 rounded-full bg-white/10 hover:bg-white/20"
              aria-label="Close menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}

      

      
    </header>
  );
};