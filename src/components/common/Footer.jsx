import React from 'react';
import { NavLink } from 'react-router-dom';

export const Footer = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 w-full z-50 bg-white rounded-4xl shadow-xl">
      <div className="grid grid-cols-5 items-center text-center py-2">
        {[
          { to: "/delivery", icon: "fi fi-rr-shipping-fast", label: "Delivery" },
          { to: "/kitchen/pantry-list", icon: "fi fi-ss-kitchen-set", label: "Pantry" },
          { to: "/", icon: "fi fi-rr-house-blank", label: "Home" },
          { to: "/orders/home", icon: "fi fi-rr-receipt text-xl", label: "Orders" },
          { to: "/add-to-cart", icon: "fi fi-rr-shopping-cart-add", label: "Cart" },
        ].map(({ to, icon, label }) => (
          <NavLink
            key={to}
            to={to}
            children={({ isActive }) => (
              <div
                className={`flex flex-col items-center ${
                  isActive ? '-mt-4 space-y-1 text-orange-500' : 'text-gray-400'
                }`}
              >
                <div
                  className={
                    isActive
                      ? 'w-14 h-14 flex items-center justify-center bg-orange-500 text-white rounded-full shadow-xl border-4 border-white'
                      : ''
                  }
                >
                  <i className={icon}></i>
                </div>
                <p className="text-xs">{label}</p>
              </div>
            )}
          />
        ))}
      </div>
    </div>
  );
};
