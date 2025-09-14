import { ChevronLeft, ChevronRight } from "lucide-react";

export const CommonPagination = ({ paginationData, onPageChange, searchTerm, setSearchTerm }) => {
  if (!paginationData) return null;

  const { current_page, last_page, from, to, total } = paginationData;

  return (
    <div className="m-1 flex flex-col sm:flex-row sm:items-center sm:justify-between bg-white py-3">
      {/* Search + Pagination Controls */}
      <div className="flex justify-between gap-3">
        {/* Search Input */}
        <div
          className="relative flex-1 max-w-md bg-white border-2 border-gray-300 rounded-lg shadow-lg"
          style={{
            boxShadow: "inset 0px 0px 3px #d1d1d1, 1px 1px 8px #54545466",
          }}
        >
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full py-1 px-2 pr-10 text-gray-800 placeholder-gray-400 rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
            placeholder="Search here"
          />
          <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-orange-500">
            <i className="fi fi-rr-search"></i>
          </span>
        </div>

        {/* Pagination Buttons */}
        <nav
          aria-label="Pagination"
          className="flex items-center justify-end isolate inline-flex -space-x-px rounded-md shadow-sm"
        >
          {/* Previous Button */}
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

          {/* Dynamic Page Buttons */}
          {(() => {
            const buttons = [];

            if (last_page === 1) {
              // Only one page
              buttons.push({ label: "1", page: 1 });
            } else if (last_page === 2) {
              // Two pages
              buttons.push({ label: "1", page: 1 });
              buttons.push({ label: "2", page: 2 });
            } else {
              // More than two pages
              buttons.push({ label: "1", page: 1 });

              if (current_page > 2) {
                buttons.push({ label: "...", disabled: true });
              }

              if (current_page !== 1 && current_page !== last_page) {
                buttons.push({ label: String(current_page), page: current_page });
              }

              if (current_page < last_page - 1) {
                buttons.push({ label: "...", disabled: true });
              }

              buttons.push({ label: String(last_page), page: last_page });
            }

            return buttons.map((item, index) => (
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
                  }`}
              >
                {item.label}
              </button>
            ));
          })()}

          {/* Next Button */}
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

      {/* Showing Info */}
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
