import React, { useEffect } from "react";
import Sentorder from "../../components/orders/orderDetails/Sentorder";
import { useState } from "react";
import { GiNotebook } from "react-icons/gi";
import { getAxios } from "../../helper/HelperAxios";
import { useParams } from "react-router-dom";
import { LoadingEffect } from "../../components/custom/LoadingEffect";
import { CommonPagination } from "../../components/custom/CommonPagination";
import { OverWeightModal } from "../../components/delivery/modal/OverWeightModal";
import { UderWeightModal } from "../../components/delivery/modal/UderWeightModal";
import ShortMissingModal from "../../components/delivery/modal/ShortMissingModal";
import { WrongItemsmodal } from "../../components/delivery/modal/WrongItemsmodal";

export const DeliveredOrderDetails = () => {
  const [note, setNote] = useState(false);
  const [showUpload, setShowUpload] = useState({
    poorQuality: false,
    damaged: false,
  });

  const toggleUpload = (key) => {
    setShowUpload((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const { id } = useParams();
  const [loader, setLoader] = useState();
  const [data, setData] = useState();
  const [order, setOrder] = useState();
  const [supplier, setSupplier] = useState();

  const [itemsObj, setItemsObj] = useState();
  const [itemsPagination, setItemsPagination] = useState();
  const [items, setItems] = useState();

  // const [order_items, setOrder_items] = useState();
  useEffect(() => {
    const fetchData = async () => {
      await getAxios(
        import.meta.env.VITE_BACK_END_URL + "orders/history/" + id,
        setData,
        setLoader
      );
    };
    fetchData();
  }, []);

  useEffect(() => {
    setOrder(data?.order);
    setSupplier(data?.order?.supplier);

    if (data?.order_items) {
      setItemsPagination({
        current_page: data?.order_items?.current_page,
        first_page_url: data?.order_items?.first_page_url,
        from: data?.order_items?.from,
        last_page: data?.order_items?.last_page,
        last_page_url: data?.order_items?.last_page_url,
        links: data?.order_items?.links,
        next_page_url: data?.order_items?.next_page_url,
        path: data?.order_items?.path,
        per_page: data?.order_items?.per_page,
        prev_page_url: data?.order_items?.prev_page_url,
        to: data?.order_items?.to,
        total: data?.order_items?.total,
      });
      setItems(data?.order_items?.data);
    }
  }, [data]);

  // console.log("order", itemsPagination);

  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedSearch(searchTerm);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [searchTerm]);

  useEffect(() => {
    const fetchData = async () => {
      const url = `${
        import.meta.env.VITE_BACK_END_URL
      }orders/history/${id}?search=${debouncedSearch}`;
      await getAxios(url, setData, setLoader);
    };
    fetchData();
  }, [debouncedSearch]);

  console.log(data)
  return (
    <>
      {loader && <LoadingEffect />}
      <div className="bg-white p-0 m-0 pb-16 min-h-screen w-full ">
        <Sentorder order={order} supplier={supplier} />

        <CommonPagination
          paginationData={itemsPagination}
          onPageChange={(page) => {
            getAxios(
              `${
                import.meta.env.VITE_BACK_END_URL
              }orders/history/${id}?page=${page}&search=${debouncedSearch}`,
              setData,
              setLoader
            );
          }}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />

        <div className="flex flex-col gap-4">
          {items?.map((item) => (
            <div
              key={item.id}
              className="flex relative border border-gray-300 rounded-md p-4 pr-0 max-w-4xl bg-white shadow-sm mt-2 inset-shadow-sm shadow-xl/30"
            >
              <div className="flex gap-2">
                <div className="flex gap-2">
                  <div className="flex justify-center pt-2">
                    <img
                      src={
                        item?.product?.product_image?.startsWith("http")
                          ? item.product.product_image
                          : `https://res.cloudinary.com/dnawewlz7/image/upload/v1/${item.product.product_image}`
                      }
                      alt={item?.product?.name || "Product Image"}
                      className="w-24 h-24 rounded-md object-cover border border-amber-50 shadow-lg shadow-gray-400"
                    />
                  </div>
                  <div>
                    <h3 className="font-medium">{item?.product?.name}</h3>
                    <h4 className="font-medium text-green-500">
                      SKU: {item?.product?.sku}
                    </h4>
                    <p className="font-medium">{item?.quantity}</p>
                    <h3 className="font-medium text-orange-600">
                      $ {item?.price}
                    </h3>
                  </div>
                </div>

                <div className="flex flex-col">
                  <div>
                    <label className="text-sm text-gray-600 flex justify-center">
                      Quantity
                    </label>
                    <div className="flex items-center border border-gray-300 rounded bg-green-500">
                      <button
                        className="px-3 py-1 text-gray-700 hover:bg-gray-200 bg-green-500"
                        onClick={() => {
                          const input = document.getElementById(
                            `quantityInput-${item?.quantity}`
                          );
                          let value = parseInt(input.value);
                          if (value > 1) input.value = value - 1;
                        }}
                      >
                        -
                      </button>
                      <input
                        id={`quantityInput-${item?.quantity}`}
                        type="text"
                        defaultValue={item?.quantity}
                        readOnly
                        className="w-10 text-center border-l border-r border-gray-300 bg-green-500"
                      />
                      <button
                        className="px-3 py-1 text-gray-700 hover:bg-gray-200 bg-green-500"
                        onClick={() => {
                          const input = document.getElementById(
                            `quantityInput-${item?.quantity}`
                          );
                          let value = parseInt(input.value);
                          input.value = value + 1;
                        }}
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div
                    onClick={() => setNote(!note)}
                    className="text-orange-500 mt-3 flex justify-center"
                  >
                    <GiNotebook className="w-8 h-8" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div
          className={`${
            note ? "" : "hidden"
          } bg-gray-100 p-4 mt-3 rounded-lg mb-6`}
        >
          <p className="text-sm font-semibold text-gray-800">Order Notes:</p>
          <p className="text-xs text-gray-600">
            No special instructions for this order.
          </p>
        </div>
        {/* <div className="max-w-xl mx-auto mt-10 border border-gray-200 rounded-lg shadow-md p-6 bg-white">
          <h2 className="text-center text-lg font-semibold mb-4">
            Select Order Item to Check Delivery:
          </h2>

          <div className="border-t border-gray-200 pt-4">
            <div className="flex items-center justify-between mb-4w-full px-4 py-2 border-2 border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 mb-4 shadow-xl">
              <span className="text-gray-700">Missing</span>
              <input
                type="checkbox"
                className="form-checkbox text-yellow-500 h-4 w-4 border-yellow-500 "
              />
            </div>

            <div className="flex items-center justify-between mb-4w-full px-4 py-2 border-2 border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 mb-4 shadow-xl">
              <span className="text-gray-700">Wrong Substitute</span>
              <input
                type="checkbox"
                className="form-checkbox text-yellow-500 h-4 w-4 border-yellow-500"
              />
            </div>

            <div className=" items-center  w-full px-4 py-2 border-2 border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 mb-4 shadow-xl">
              <div
                className="flex items-center justify-between cursor-pointer"
                onClick={() => toggleUpload("poorQuality")}
              >
                <span className="text-gray-700">Poor Quality</span>
                <span className="text-gray-600 text-lg">
                  {showUpload.poorQuality ? "▲" : "▼"}
                </span>
              </div>
              {showUpload.poorQuality && (
                <div className="mt-4">
                  <label className="block text-sm text-gray-600 mb-1">
                    Upload Picture of Item:
                  </label>
                  <input
                    type="file"
                    className="text-sm text-gray-600 file:mr-4 file:py-1 file:px-3
                       file:rounded file:border-0 file:text-sm file:font-semibold
                       file:bg-gray-100 file:text-gray-700 hover:file:bg-gray-200"
                  />
                </div>
              )}
            </div>

            <div className="items-center justify-between w-full px-4 py-2 border-2 border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 mb-4 shadow-xl ">
              <div
                className="flex items-center justify-between cursor-pointer"
                onClick={() => toggleUpload("damaged")}
              >
                <span className="text-gray-700">Damaged</span>
                <span className="text-gray-600 text-lg">
                  {showUpload.damaged ? "▲" : "▼"}
                </span>
              </div>
              {showUpload.damaged && (
                <div className="mt-4">
                  <label className="block text-sm text-gray-600 mb-1">
                    Upload Picture of Item:
                  </label>
                  <input
                    type="file"
                    className="text-sm text-gray-600 file:mr-4 file:py-1 file:px-3
                       file:rounded file:border-0 file:text-sm file:font-semibold
                       file:bg-gray-100 file:text-gray-700 hover:file:bg-gray-200"
                  />
                </div>
              )}
            </div>

            <div className="flex items-center justify-between w-full px-4 py-2 border-2 border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 mb-4 shadow-xl">
              <span className="text-gray-700">Underweight</span>
              <span className="text-gray-600 text-lg onclick()">▼</span>
            </div>

            <div className="flex items-center justify-between w-full px-4 py-2 border-2 border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 mb-4 shadow-xl">
              <span className="text-gray-700">Overweight</span>
              <span className="text-gray-600 text-lg">▼</span>
            </div>

            <div className="flex-col gap-2">
              <div className="flex justify-center">
                <button className="bg-green-500 text-white shadow-2xl shadow-green-700 w-[80%] h-10 hover:bg-green-600  font-semibold py-2 px-4 rounded">
                  Product In Good Condition
                </button>
              </div>
              <div className="flex justify-center">
                <button className="bg-blue-500 mt-2 shadow-blue-700 shadow-2xl hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
                  Save Complaint
                </button>
              </div>
            </div>
          </div>
        </div> */}
                        {/* <div className="max-w-xl mx-auto mt-2 border border-gray-200 rounded-lg shadow-md p-6 bg-white">
      <h2 className="text-center text-lg font-semibold mb-4">
        Select Order Item to Check Delivery:
      </h2>

      <div className="border-t border-gray-200 pt-4">
        <div className="flex items-center justify-between mb-4w-full px-4 py-2 border-2 border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 mb-4 shadow-xl">
          <span className="text-gray-700">Wrong Item</span>
          <input
            type="checkbox"
            className="form-checkbox text-yellow-500 h-4 w-4 border-yellow-500 "
             onClick={() => document.getElementById("wrong_items_modal").showModal()}
          />
          <WrongItemsmodal />
        </div>

        <div className="flex items-center justify-between mb-4w-full px-4 py-2 border-2 border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 mb-4 shadow-xl">
          <span className="text-gray-700">Short & Missing</span>
          <input
            type="checkbox"
            className="form-checkbox text-yellow-500 h-4 w-4 border-yellow-500"
           onClick={() => document.getElementById("short_missing_modal").showModal()}
         
          />
                <ShortMissingModal />
        </div>


        <div className=" items-center  w-full px-4 py-2 border-2 border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 mb-4 shadow-xl">
          <div
            className="flex items-center justify-between cursor-pointer"
            onClick={() => toggleUpload('poorQuality')}
          >
            <span className="text-gray-700">Poor Quality</span>
            <span className="text-gray-600 text-lg">
              {showUpload.poorQuality ? '▲' : '▼'}
            </span>
          </div>
          {showUpload.poorQuality && (
            <div className="mt-4">
              <label className="block text-sm text-gray-600 mb-1">
                Upload Picture of Item:
              </label>
              <input
                type="file"
                className="text-sm text-gray-600 file:mr-4 file:py-1 file:px-3
                       file:rounded file:border-0 file:text-sm file:font-semibold
                       file:bg-gray-100 file:text-gray-700 hover:file:bg-gray-200"
              />
            </div>
          )}
        </div>

        <div className="flex items-center justify-between mb-4w-full px-4 py-2 border-2 border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 mb-4 shadow-xl">
          <span className="text-gray-700">Underweight</span>
          <input
            type="checkbox"
             onClick={() => document.getElementById("under_weight_modal").showModal()}
            className="form-checkbox text-yellow-500 h-4 w-4 border-yellow-500"
          />
          <UderWeightModal />
        </div>

            <div className="flex items-center justify-between mb-4w-full px-4 py-2 border-2 border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 mb-4 shadow-xl">
          <span className="text-gray-700">Overweight</span>
          <input
           onClick={() => document.getElementById("over_weight_modal").showModal()}
            type="checkbox"
            className="form-checkbox text-yellow-500 h-4 w-4 border-yellow-500"
          />
          <OverWeightModal />
        </div>

        <div className="flex items-center justify-between mb-4w-full px-4 py-2 border-2 border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 mb-4 shadow-xl">
          <span className="text-gray-700">Wrong Substitute</span>
          <input
            type="checkbox"
             onClick={() => document.getElementById("short_missing_modal").showModal()}
            className="form-checkbox text-yellow-500 h-4 w-4 border-yellow-500"
          />
        </div>

        <div className="items-center justify-between w-full px-4 py-2 border-2 border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 mb-4 shadow-xl ">
          <div
            className="flex items-center justify-between cursor-pointer"
            onClick={() => toggleUpload('damaged')}
          >
            <span className="text-gray-700">Damaged</span>
            <span className="text-gray-600 text-lg">
              {showUpload.damaged ? '▲' : '▼'}
            </span>
          </div>
          {showUpload.damaged && (
            <div className="mt-4">
              <label className="block text-sm text-gray-600 mb-1">
                Upload Picture of Item:
              </label>
              <input
                type="file"
                className="text-sm text-gray-600 file:mr-4 file:py-1 file:px-3
                       file:rounded file:border-0 file:text-sm file:font-semibold
                       file:bg-gray-100 file:text-gray-700 hover:file:bg-gray-200"
              />
            </div>
          )}
        </div>

   

        <div className="flex-col gap-2">
            <div className='flex justify-center'>
    <button className="bg-green-500 text-white shadow-2xl shadow-green-700 w-[80%] h-10 hover:bg-green-600  font-semibold py-2 px-4 rounded">
            Product In Good Condition
          </button>
            </div>
      <div className='flex justify-center'>
        <button className="bg-blue-500 mt-2 shadow-blue-700 shadow-2xl hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
            Save Complaint
          </button>
      </div>
          
        </div>
      </div>
    </div> */}

            {order?.status === "Delivered" && (
          <div className="max-w-xl mx-auto mt-2 border border-gray-200 rounded-lg shadow-md p-6 bg-white">
            <h2 className="text-center text-lg font-semibold mb-4">Select Order Item to Check Delivery:</h2>
            <div className="border-t border-gray-200 pt-4">
              <div className="flex items-center justify-between mb-4 w-full px-4 py-2 border-2 border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 mb-4 shadow-xl">
                <span className="text-gray-700">Wrong Item</span>
                <input
                  type="checkbox"
                  className="form-checkbox text-yellow-500 h-4 w-4 border-yellow-500"
                  onClick={() => document.getElementById("wrong_items_modal").showModal()}
                />
                <WrongItemsmodal />
              </div>

              <div className="flex items-center justify-between mb-4 w-full px-4 py-2 border-2 border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 mb-4 shadow-xl">
                <span className="text-gray-700">Short & Missing</span>
                <input
                  type="checkbox"
                  className="form-checkbox text-yellow-500 h-4 w-4 border-yellow-500"
                  onClick={() => document.getElementById("short_missing_modal").showModal()}
                />
                <ShortMissingModal />
              </div>

              <div className="items-center w-full px-4 py-2 border-2 border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 mb-4 shadow-xl">
                <div className="flex items-center justify-between cursor-pointer" onClick={() => toggleUpload('poorQuality')}>
                  <span className="text-gray-700">Poor Quality</span>
                  <span className="text-gray-600 text-lg">{showUpload.poorQuality ? '▲' : '▼'}</span>
                </div>
                {showUpload.poorQuality && (
                  <div className="mt-4">
                    <label className="block text-sm text-gray-600 mb-1">Upload Picture of Item:</label>
                    <input
                      type="file"
                      className="text-sm text-gray-600 file:mr-4 file:py-1 file:px-3 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-gray-100 file:text-gray-700 hover:file:bg-gray-200"
                    />
                  </div>
                )}
              </div>

              <div className="flex items-center justify-between mb-4 w-full px-4 py-2 border-2 border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 mb-4 shadow-xl">
                <span className="text-gray-700">Underweight</span>
                <input
                  type="checkbox"
                  onClick={() => document.getElementById("under_weight_modal").showModal()}
                  className="form-checkbox text-yellow-500 h-4 w-4 border-yellow-500"
                />
                <UderWeightModal />
              </div>

              <div className="flex items-center justify-between mb-4 w-full px-4 py-2 border-2 border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 mb-4 shadow-xl">
                <span className="text-gray-700">Overweight</span>
                <input
                  onClick={() => document.getElementById("over_weight_modal").showModal()}
                  type="checkbox"
                  className="form-checkbox text-yellow-500 h-4 w-4 border-yellow-500"
                />
                <OverWeightModal />
              </div>

              <div className="flex items-center justify-between mb-4 w-full px-4 py-2 border-2 border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 mb-4 shadow-xl">
                <span className="text-gray-700">Wrong Substitute</span>
                <input
                  type="checkbox"
                  onClick={() => document.getElementById("short_missing_modal").showModal()}
                  className="form-checkbox text-yellow-500 h-4 w-4 border-yellow-500"
                />
              </div>

              <div className="items-center justify-between w-full px-4 py-2 border-2 border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 mb-4 shadow-xl">
                <div className="flex items-center justify-between cursor-pointer" onClick={() => toggleUpload('damaged')}>
                  <span className="text-gray-700">Damaged</span>
                  <span className="text-gray-600 text-lg">{showUpload.damaged ? '▲' : '▼'}</span>
                </div>
                {showUpload.damaged && (
                  <div className="mt-4">
                    <label className="block text-sm text-gray-600 mb-1">Upload Picture of Item:</label>
                    <input
                      type="file"
                      className="text-sm text-gray-600 file:mr-4 file:py-1 file:px-3 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-gray-100 file:text-gray-700 hover:file:bg-gray-200"
                    />
                  </div>
                )}
              </div>

              <div className="flex-col gap-2">
                <div className="flex justify-center">
                  <button className="bg-green-500 text-white shadow-2xl shadow-green-700 w-[80%] h-10 hover:bg-green-600 font-semibold py-2 px-4 rounded">
                    Product In Good Condition
                  </button>
                </div>
                <div className="flex justify-center">
                  <button className="bg-blue-500 mt-2 shadow-blue-700 shadow-2xl hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
                    Save Complaint
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </>
  );
};
