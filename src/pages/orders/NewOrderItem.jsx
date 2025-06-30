import { HomeMain } from "../../components/orders/ordersHome/OrdersHomeMain";
import { ScrollableButton } from "../../components/orders/ordersHome/ScrollableButton";
import { SearchPagination } from "../../components/orders/ordersHome/SearchPagination";
import { OrdersNewOrderMain } from "../../components/orders/OrdersNewOrder/OrdersNewOrderMain";


export const NewOrderItem = () => {
  return (
    <div>
      <ScrollableButton
        name="Suppliers"
        buttonLabels={[
          "Fardin",
          "Fardin Faiaz Khan",
          "ABC Food Wholesale",
          "ABC Meat & Poultry",
        ]}
      />
      <ScrollableButton
        name="Categories"
        buttonLabels={[
          "Meat",
          "Fish",
          "Dry",
          "Frozen",
          "Beverage",
          "Spices",
          "Dried Fruits",
          "Snacks",
          "Chocolate",
          "Bakery",
          "Condiments",
        ]}
      />
      <SearchPagination />
      <OrdersNewOrderMain />
    </div>
  );
};
