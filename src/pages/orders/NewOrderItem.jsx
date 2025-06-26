import { HomeMain } from "../../components/orders/ordersHome/OrdersHomeMain"
import { ScrollableButton } from "../../components/orders/ordersHome/ScrollableButton"
import { SearchPagination } from "../../components/orders/ordersHome/SearchPagination"
import { OrdersNewOrderMain } from "../../components/orders/OrdersNewOrder/OrdersNewOrderMain"


export const NewOrderItem = () => {
  return (
    <div>
        <ScrollableButton buttonLabels={[
          "Fardin","Fardin Faiaz Khan","ABC Food Wholesale","ABC Meat & Poultry",
        ]}/>
        <ScrollableButton buttonLabels={[
            'Meat',"Fish","Dry","Frozen","Beverage","Spices","Dried Fruits","Snacks","Chocolate","Bakery","Condiments",
        ]} />
        <SearchPagination />
        <OrdersNewOrderMain />
    </div>
  )
}
