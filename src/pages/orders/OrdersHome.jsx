import { ScrollableButton } from "../../components/orders/ordersHome/ScrollableButton"
import { SearchPagination } from "../../components/orders/ordersHome/SearchPagination"
import { HomeMain } from "../../components/orders/ordersHome/OrdersHomeMain"
import { FlexTwoBtn } from "../../components/common/FlexTwoBtn"



export const OrdersHome = () => {
  return (
    <div>
        <FlexTwoBtn leftBtn="Suppliers" leftUrl="#" rightBtn="+ New Order" rightUrl="/orders/new-order-item"/>
        <ScrollableButton buttonLabels={[
          "Fardin","Fardin Faiaz Khan","ABC Food Wholesale","ABC Meat & Poultry",
        ]}/>
        <SearchPagination />
        <HomeMain />
    </div>
  )
}
