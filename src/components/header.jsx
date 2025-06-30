import React, { useState } from 'react';

function Header({ scrollToSection, refs }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggle = () => setIsMenuOpen(!isMenuOpen);

  const handleClick = (ref) => {
    scrollToSection(ref);
    setIsMenuOpen(false); 
  };

  return (
    <nav className="block w-full max-w-screen-lg mx-auto text-white px-4 lg:px-8 lg:py-3 sticky top-0 z-50">
      <div className="relative bg-white/30 backdrop-blur-sm px-4 py-2 shadow-lg rounded-4xl flex flex-wrap items-center justify-between mx-auto text-gray-100">
        {/* Logo */}
        <a
          href="#"
          className="mr-4 block cursor-pointer py-1.5 text-2xl text-gray-200 font-semibold"
          onClick={() => handleClick(refs.homeRef)}
        >
          Kathirvel R
        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:block">
          <ul className="flex flex-col gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 font-semibold">
            {['Home', 'About', 'Skill', 'Projects', 'Contact'].map((item, index) => (
              <li key={index} className="flex items-center p-1 text-lg gap-x-2 text-gray-200">
                <button className="flex items-center" onClick={() => handleClick(refs[`${item.toLowerCase()}Ref`])}>
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="relative lg:hidden">
          <button
            onClick={handleToggle}
            className="relative h-6 w-6 text-white z-50"
            type="button"
          >
            <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </span>
          </button>

          {/* Mobile Dropdown Menu */}
          {isMenuOpen && (
            <div className="absolute right-0 top-full mt-2 w-48 bg-white/80 backdrop-blur-md rounded-xl shadow-lg z-50">
              <ul className="flex flex-col gap-2 text-gray-900 font-semibold p-4">
                {['Home', 'About', 'Skill', 'Projects', 'Contact'].map((item, index) => (
                  <li key={index}>
                    <button
                      className="w-full text-left p-2 hover:bg-gray-200 rounded"
                      onClick={() => handleClick(refs[`${item.toLowerCase()}Ref`])}
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Header;
