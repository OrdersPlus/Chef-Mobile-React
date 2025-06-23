import React from 'react'

const SearchPagination = () => {
  return (
    <div>
      <div className="max-w-full mx-auto my-5 px-4">
    <div className="flex  items-center justify-start"> 
   
        <div className="flex justify-between items-center gap-4 flex-wrap">

        <div className="relative flex-1 max-w-md bg-white border-2 border-gray-300 rounded-lg shadow-lg"
            style={{ boxShadow: 'inset 0px 0px 3px #d1d1d1, 1px 1px 8px #54545466' }}>

            <input
            type="text"
            className="w-full py-2 px-3 pr-10 text-gray-800 placeholder-gray-400 rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
            placeholder="Search an item"
            />
         
            <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-orange-500">
            <i className="fi fi-rr-search"></i>
            </span>
        </div>

        
            <div className="flex justify-center">
            <nav className="inline-flex rounded-md shadow overflow-hidden border border-gray-300">
            
                <button className="px-4 py-2 bg-white text-gray-700 hover:bg-gray-100">&lt;</button>
           
                <button className="px-4 py-2 bg-orange-500 text-white font-semibold border-l border-gray-300">1</button>
        
                <button className="px-4 py-2 bg-white text-gray-700 hover:bg-gray-100 border-l border-gray-300">2</button>
       
                <button className="px-4 py-2 bg-white text-gray-700 hover:bg-gray-100 border-l border-gray-300">&gt;</button>
            </nav>
            </div>
        
        </div>
    </div>
</div>
    </div>
  )
}

export default SearchPagination