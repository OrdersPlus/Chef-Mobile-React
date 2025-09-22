import { useState } from "react";

export const ScrollableButtonKitchen = ({ buttonLabels, categoryFilter }) => {
  const [activeCategory, setActiveCategory] = useState('');

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    categoryFilter(category); // Call parent with selected category
  };

  return (
    <div className="overflow-x-auto w-full mt-5 shadow mb-5">
      <div className="flex space-x-3 p-4 min-w-full">
        {/* All Button */}
        <div
          className={`p-1 px-4 rounded-md shadow flex justify-center items-center whitespace-nowrap min-w-max cursor-pointer
            ${activeCategory === '' ? 'bg-orange-500 text-white' : 'bg-white text-orange-500'}
          `}
          onClick={() => handleCategoryClick('')}
        >
          All
        </div>

        {/* Category Buttons */}
        {buttonLabels?.map((item, index) => (
          <div
            key={index}
            className={`p-1 px-4 rounded-md shadow flex justify-center items-center whitespace-nowrap min-w-max cursor-pointer
              ${activeCategory === item ? 'bg-orange-500 text-white' : 'bg-white text-orange-500'}
            `}
            onClick={() => handleCategoryClick(item)}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};
