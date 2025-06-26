import { Link } from "react-router-dom";


export const FlexTwoBtn = ({leftBtn, leftUrl, rightBtn, rightUrl}) => {
  return (
    <div className="flex justify-between items-center w-full mt-6">
      {/* Left Button */}
      <Link to={leftUrl} className="text-orange-500 bg-white border-y-orange-500 border-2 px-5 py-2 rounded-lg shadow">
        {leftBtn}
      </Link>
      {/* Right Button */}
      <Link to={rightUrl} className="text-orange-500 bg-white border-y-orange-500 border-2 px-5 py-2 rounded-lg shadow">
        {rightBtn}
      </Link>
    </div>
  );
};
