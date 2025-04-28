import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="relative">
<div className="h-[3.5rem] bg-[#f2f2f2] flex w-full justify-between items-center px-4 z-20 relative">
  <div className="flex items-center w-full justify-between">
    <img src="/logo.png" alt="Логотип" className="w-[5.06rem] h-[3.19rem]" />

    <div className="hidden lg:flex gap-8 items-center font-roboto font-normal text-[0.88rem] leading-[171%] pr-8">
      <NavLink
        to="/"
        className={({ isActive }) =>
          `text-left ${
            isActive ? 'text-[#67AAA7]' : 'text-[#08195f]'
          }`
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/nations"
        className={({ isActive }) =>
          `text-left ${
            isActive ? 'text-[#67AAA7]' : 'text-[#08195f]'
          }`
        }
      >
        Nations
      </NavLink>
      <NavLink
        to="/chat"
        className={({ isActive }) =>
          `text-left ${
            isActive ? 'text-[#67AAA7]' : 'text-[#08195f]'
          }`
        }
      >
        Chat
      </NavLink>
    </div>
  </div>
        <img src={isMenuOpen ? "/main/mingcute_close-fill.png" : "/main/pajamas_hamburger.png"}
          alt="Menu"
          className="w-6 h-6 cursor-pointer lg:hidden"
          onClick={toggleMenu}
        />
      </div>

      <div className={`absolute top-[2.88rem] font-smythe left-0 w-full bg-[#f2f2f2] flex flex-col font-normal leading-[132%] tracking-[0.02em] items-start overflow-hidden transition-all duration-500 ease-in-out z-10 lg:hidden ${
          isMenuOpen ? 'max-h-96 py-6' : 'max-h-0 py-0'
        } pl-8 pr-8 divide-y divide-[#08195f]`}
      >
        <NavLink
          to="/"
          onClick={handleLinkClick}
          className={({ isActive }) =>
            `w-full text-left text-[1.69rem] py-4 ${
              isActive ? 'text-[#67AAA7]' : 'text-[#08195f]'
            }`
          }
        >
          01\ Home
        </NavLink>

        <NavLink
          to="/nations"
          onClick={handleLinkClick}
          className={({ isActive }) =>
            `w-full text-left text-[1.69rem] py-4 ${
              isActive ? 'text-[#67AAA7]' : 'text-[#08195f]'
            }`
          }
        >
          02\ Nations
        </NavLink>

        <NavLink
          to="/chat"
          onClick={handleLinkClick}
          className={({ isActive }) =>
            `w-full text-left text-[1.69rem] py-4 ${
              isActive ? 'text-[#67AAA7]' : 'text-[#08195f]'
            }`
          }
        >
          03\ Chat
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
