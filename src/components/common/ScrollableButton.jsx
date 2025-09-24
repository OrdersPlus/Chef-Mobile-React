import { useState } from "react";

export const ScrollableButton = ({ buttonLabels, categoryFilter }) => {
  const [activeCategory, setActiveCategory] = useState('');

  const handleCategoryClick = (id) => {
    setActiveCategory(id);
    categoryFilter(id);
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
              ${activeCategory === item.id ? 'bg-orange-500 text-white' : 'bg-white text-orange-500'}
            `}
            onClick={() => handleCategoryClick(item.id)}
          >
            {item?.name}
          </div>
        ))}
      </div>
    </div>
  );
};
