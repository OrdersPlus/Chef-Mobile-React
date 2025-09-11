const SupplierDetailsBody = ({details}) => {
  const data = details?.data;
  const warehouse = JSON.parse(data?.warehouse_address || '{}');
  // console.log(warehouse)
  return (
    <div className='m-2 rounded-md bg-[var(--secondary-color)] shadow-md space-y-4 mb-2 mt-3'>
   {/* Supplier Info Cards */}
        <div className="space-y-4 pt-4 pb-4  m-4">
          {[
            { label: "Company Name", value: data?.company_name },
            { label: "Trading Name", value: data?.alias_name },
            { label: "Account Manager", value: data?.abn_number },
            { label: "Email", value: data?.email },
            { label: "Phone Number", value: data?.phone_number },
            { label: "Office Address", value: data?.office_street_address },
            { label: "Warehouse Address", value: `${warehouse?.street_address}, ${warehouse?.suburb}, ${warehouse?.city}, ${warehouse?.state}, ${warehouse?.post_code}, ` },
          ].map(({ label, value }) => (
            <div
              key={label}
              className="flex flex-col justify-between items-center bg-[var(--secondary-color)] p-4 rounded-lg shadow"
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