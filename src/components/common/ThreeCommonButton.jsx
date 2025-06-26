import { NavLink } from "react-router-dom";

export const ThreeCommonButton = ({ firstBtn, firstUrl, secondBtn, secondUrl, thirdBtn, thirdUrl }) => {
  // Common classes
  const baseClass = "flex-1 py-3 text-center text-sm";
  const activeClass = "text-white bg-orange-500 font-semibold border-b-2 text-sm rounded-xl";
  const inactiveClass = "text-gray-600";

  return (
    <div className="flex bg-gray-200 rounded-lg overflow-hidden shadow-sm">
      <NavLink
        to={firstUrl}
        end
        className={({ isActive }) =>
          `${baseClass} ${isActive ? activeClass : inactiveClass}`
        }
      >
        {firstBtn}
      </NavLink>

      <NavLink
        to={secondUrl}
        className={({ isActive }) =>
          `${baseClass} ${isActive ? activeClass : inactiveClass}`
        }
      >
        {secondBtn}
      </NavLink>

      <NavLink
        to={thirdUrl}
        className={({ isActive }) =>
          `${baseClass} ${isActive ? activeClass : inactiveClass}`
        }
      >
        {thirdBtn}
      </NavLink>
    </div>
  );
};
