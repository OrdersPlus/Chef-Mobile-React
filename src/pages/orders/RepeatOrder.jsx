import { ThreeCommonButton } from "../../components/common/ThreeCommonButton";
import RepeatOrderButton from "../../components/orders/repeatOrders/RepeatOrderButton";
import RepeatOrderMain from "../../components/orders/repeatOrders/RepeatOrderMain";

export const RepeatOrder = () => {
  return (
    <div className="font-sans w-full min-h-screen bg-white m-0 p-0 pb-16">
      <div className="rounded-lg shadow-lg">
        {/* Header Part */}
        <div className="m-3  rounded-md bg-white shadow-md space-y-4 mb-2 mt-4 pt-2">
          <div className="m-4 rounded-md bg-white shadow-md space-y-4 mb-2 ">
            <h3 className="text-center font-bold pb-2">Repeat Orders</h3>
          </div>

          <div className="mt-5 mb-5">
            <ThreeCommonButton
              firstBtn="Master Order"
              firstUrl="/orders/home"
              secondBtn="Order History"
              secondUrl="/orders/history"
              thirdBtn="Repeat Orders"
              thirdUrl="/orders/repeat-orders"
            />
          </div>

          <RepeatOrderButton />
        </div>

        <RepeatOrderMain />
      </div>
    </div>
  );
};
