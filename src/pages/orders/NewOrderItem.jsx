import { NewOrdersMain } from "../../components/orders/newOrders/NewOrdersMain";
import { HomeMain } from "../../components/orders/ordersHome/OrdersHomeMain";
import { ScrollableButton } from "../../components/orders/ordersHome/ScrollableButton";
import { SearchPagination } from "../../components/orders/ordersHome/SearchPagination";



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
      <NewOrdersMain />
    </div>
  );
};
