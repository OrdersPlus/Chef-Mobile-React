// import { ScrollableButton } from "../../components/orders/ordersHome/ScrollableButton";
import { SearchPagination } from "../../components/orders/ordersHome/SearchPagination";
import { HomeMain } from "../../components/orders/ordersHome/OrdersHomeMain";
import { FlexTwoBtn } from "../../components/common/FlexTwoBtn";
import { ThreeCommonButton } from "../../components/common/ThreeCommonButton";

export const OrdersHome = () => {
  return (
    <div>
      <FlexTwoBtn
        leftBtn="Suppliers"
        leftUrl="#"
        rightBtn="+ New Order"
        rightUrl="/orders/new-order-item"
      />
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
      {/* <ScrollableButton
        name="Suppliers"
        buttonLabels={[
          "Fardin",
          "Fardin Faiaz Khan",
          "ABC Food Wholesale",
          "ABC Meat & Poultry",
        ]}
      /> */}
      {/* <SearchPagination /> */}

      <HomeMain />
    </div>
  );
};
