import { ChevronLeft, ChevronRight } from "lucide-react";

export const CommonPagination = ({ paginationData, onPageChange, searchTerm, setSearchTerm }) => {
  if (!paginationData) return null;

  const { current_page, last_page, links, from, to, total } = paginationData;

  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between bg-white py-3">
      {/* Pagination controls */}
      <div className="flex justify-between gap-3">
        {/* Search Bar Container */}
        <div
          className="relative flex-1 max-w-md bg-white border-2 border-gray-300 rounded-lg shadow-lg"
          style={{
            boxShadow: "inset 0px 0px 3px #d1d1d1, 1px 1px 8px #54545466",
          }}
        >
          {/* Search Input */}
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full py-1 px-2 pr-10 text-gray-800 placeholder-gray-400 rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
            placeholder="Search here"
          />

          {/* Search Icon */}
          <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-orange-500">
            <i className="fi fi-rr-search"></i>
          </span>
        </div>
        <div>
          <nav
            aria-label="Pagination"
            className="flex items-center justify-end sm:justify-end isolate inline-flex -space-x-px rounded-md shadow-sm"
          >
            {/* Previous button */}
            <button
              disabled={current_page === 1}
              onClick={() => onPageChange(current_page - 1)}
              className={`relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-gray-300 hover:bg-gray-50 disabled:opacity-50 ${
                current_page !== 1 ? "cursor-pointer" : ""
              }`}
            >
              <span className="sr-only">Previous</span>
              <ChevronLeft aria-hidden="true" className="size-5" />
            </button>

            {/* Page number buttons */}
            {[
              { label: "1", page: 1 },
              { label: "...", disabled: true },
              { label: String(last_page), page: last_page },
            ].map((item, index) => (
              <button
                key={index}
                onClick={() => {
                  if (!item.disabled && current_page !== item.page) {
                    onPageChange(item.page);
                  }
                }}
                disabled={item.disabled}
                className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold
      ${item.disabled ? "text-gray-400 cursor-default" : "cursor-pointer"}
      ${
        item.page === current_page
          ? "z-10 text-white bg-orange-500"
          : "text-gray-900 ring-1 ring-gray-300 hover:bg-gray-50"
      }
    `}
              >
                {item.label}
              </button>
            ))}

            {/* Next button */}
            <button
              disabled={current_page === last_page}
              onClick={() => onPageChange(current_page + 1)}
              className={`relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-gray-300 hover:bg-gray-50 disabled:opacity-50 ${
                current_page !== last_page ? "cursor-pointer" : ""
              }`}
            >
              <span className="sr-only">Next</span>
              <ChevronRight aria-hidden="true" className="size-5" />
            </button>
          </nav>
        </div>
      </div>

      {/* Showing info */}
      <div className="mb-2 sm:mb-0 text-end sm:text-left mt-2">
        <p className="text-sm text-gray-700">
          Showing <span className="font-medium">{from}</span> to{" "}
          <span className="font-medium">{to}</span> of{" "}
          <span className="font-medium">{total}</span> results
        </p>
      </div>
    </div>
  );
};
