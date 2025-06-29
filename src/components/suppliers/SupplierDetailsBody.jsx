import React from 'react'

const SupplierDetailsBody = () => {
  return (
    <div className='m-2 rounded-md bg-white shadow-md space-y-4 mb-2 mt-3'>
   {/* Supplier Info Cards */}
        <div className="space-y-4 pt-4 pb-4  m-4">
          {[
            { label: "Company Name", value: "ABC Meat & Poultry" },
            { label: "Trading Name", value: "Damen" },
            { label: "Account Manager", value: "Md Hasan" },
            { label: "Email", value: "md@orderplus.com" },
            { label: "Phone Number", value: "040404041" },
            { label: "Office Address", value: "New South Wales - Sydney - Belmore - 45 Yangooro road" },
            { label: "Warehouse Address", value: "- - -" },
          ].map(({ label, value }) => (
            <div
              key={label}
              className="flex flex-col justify-between items-center bg-white p-4 rounded-lg shadow"
              style={{ boxShadow: 'inset 0px 0px 3px #d1d1d1, 1px 1px 8px #54545466' }}
            >
              <span className="font-semibold text-orange-400">{label}</span>
              <span className="font-medium text-center">{value}</span>
            </div>
          ))}
        </div>
       
</div>
       
  )
}
export default SupplierDetailsBody;