import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="text-white bg-green-700 shadow-lg">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center space-x-10">
            <div className="flex-shrink-0 ml-4"> {/* Added margin-left */}
              <h1 className="text-2xl font-bold text-yellow-300">Jharkhand Tourism</h1>
            </div>
            <div className="hidden space-x-8 sm:-my-px sm:flex">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? 'text-yellow-300 px-3 py-2 rounded-md text-lg font-medium' : 'text-white hover:text-yellow-300 px-3 py-2 rounded-md text-lg font-medium'
                }
              >
                Jharkhand (Home)
              </NavLink>
              <NavLink
                to="/tribes"
                className={({ isActive }) =>
                  isActive ? 'text-yellow-300 px-3 py-2 rounded-md text-lg font-medium' : 'text-white hover:text-yellow-300 px-3 py-2 rounded-md text-lg font-medium'
                }
              >
                Tribes
              </NavLink>
              <NavLink
                to="/food"
                className={({ isActive }) =>
                  isActive ? 'text-yellow-300 px-3 py-2 rounded-md text-lg font-medium' : 'text-white hover:text-yellow-300 px-3 py-2 rounded-md text-lg font-medium'
                }
              >
                Food
              </NavLink>
              <NavLink
                to="/tourism-hotspots"
                className={({ isActive }) =>
                  isActive ? 'text-yellow-300 px-3 py-2 rounded-md text-lg font-medium' : 'text-white hover:text-yellow-300 px-3 py-2 rounded-md text-lg font-medium'
                }
              >
                Tourism Hotspots
              </NavLink>
              <NavLink
                to="/dance"
                className={({ isActive }) =>
                  isActive ? 'text-yellow-300 px-3 py-2 rounded-md text-lg font-medium' : 'text-white hover:text-yellow-300 px-3 py-2 rounded-md text-lg font-medium'
                }
              >
                Dance
              </NavLink>
              <NavLink
                to="/festivals"
                className={({ isActive }) =>
                  isActive ? 'text-yellow-300 px-3 py-2 rounded-md text-lg font-medium' : 'text-white hover:text-yellow-300 px-3 py-2 rounded-md text-lg font-medium'
                }
              >
                Festivals
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
