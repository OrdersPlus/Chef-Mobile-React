import { createBrowserRouter, Navigate } from "react-router-dom";
import Login from "../pages/Login";
import { Dashboard } from "../pages/Dashboard";
import { NotFound } from "../pages/NotFound";
import { MainLayouts } from "../pages/layouts/MainLayouts";
import { OrdersHome } from "../pages/orders/OrdersHome";
import { NewOrderItem } from "../pages/orders/NewOrderItem";
import { OrderDetails } from "../pages/orders/OrderDetails";
import { KitchenPantryList } from "../pages/kitchen/KitchenPantryList";
import { KitchenHome } from "../pages/kitchen/KitchenHome";
import { KitchenPrepList } from "../pages/kitchen/KitchenPrepList";
import { KitchenAddPantry } from "../pages/kitchen/KitchenAddPantry";
import AddToCart from "../pages/AddToCart";
import { SupplierProductList } from "../pages/suppliers/SupplierProductList";
import { SupplierDetails } from "../pages/suppliers/SupplierDetails";
import { OrderHistory } from "../pages/orders/OrderHistory";
import { RepeatOrder } from "../pages/orders/RepeatOrder";
import { DeliveredOrderDetails } from "../pages/orders/DeliveredOrderDetails";
import { ManageTeam } from "../pages/admin/ManageTeam";
import { AddStaff } from "../pages/admin/AddStaff";
import { EditStaff } from "../pages/admin/EditStaff";
import { RosterManagement } from "../pages/admin/RosterManagement";
import { EditRoster } from "../pages/admin/EditRoster";
import { AddToCart2 } from "../pages/AddToCart2";
import Attendance from "../pages/admin/Attendance";
import StaffSchedule from "../pages/admin/StaffSchedule";
import { SuppliersHome } from "../pages/suppliers/SuppliersHome";
import StaffScheduleDay from "../pages/admin/StaffScheduleDay";
import { QrLogin } from "../pages/QrLogin";
import { Home } from "../pages/Home";
import ProtectedLayout from "../helper/middleware/ProtectedLayout";

const router = createBrowserRouter([
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/qr-login",
        element: <QrLogin />,
    },
    //  <Route element={<ProtectedLayout />}>
  //    {
  //   element: <ProtectedLayout />, // ✅ protect this branch
  //   children: [
  //     {

  //     }
  //   ]
  // }
  {
      element: <ProtectedLayout />,
      children: [
  {
    path: "/",
    element: <MainLayouts />,
    children: [
      {
          index: true,
          element: <Dashboard />,
      },
        {
            path: "/orders/home",
            element: <OrdersHome />,
        },
        {
            path: "/orders/new-order-item",
            element: <NewOrderItem />,
        },
        {
            path: "/orders/order-details",
            element: <OrderDetails />,
        },

// Safaet
        {
            path: "/kitchen/home",
            element: <KitchenHome />,
        },
        {
            path: "/kitchen/pantry-list",
            element: <KitchenPantryList />,
        },
        {
            path: "/kitchen/add-to-pantry",
            element: <KitchenAddPantry />,
        },
        {
            path: "/kitchen/prep-list",
            element: <KitchenPrepList />,
        },
        {
            path: "/add-to-cart",
            element: <AddToCart />,
        },
        // {
        //     path: "/add-to-cart2",
        //     element: <AddToCart2 />,
        // },
//safaet

//nausin
    {
      path: "/suppliers/home",
      element: <SuppliersHome />,
    },
    {
      path: "/suppliers/product-list/:id",
      element: <SupplierProductList />,
    },

    {
      path: "/suppliers/details/:id",
      element: <SupplierDetails />,
    },
    {
      path: "/orders/history",
      element: <OrderHistory />,
    },
    {
      path:"/orders/repeat-orders",
      element:<RepeatOrder />,
    },
     {
      path:"/orders/delivered-orders-details/:id",
      element:<DeliveredOrderDetails />,
    },
//nausin

//arman
    {
      path:"/admin/home",
      element:<ManageTeam />,
    },
    {//done
      path: "/admin/add-staff",
      element: <AddStaff />,
    },
    {
      path: "/admin/edit-staff/:id",
      element: <EditStaff />
    },
    {
      path: "/admin/roster",
      element: <RosterManagement />,

    },
    {
      path: "/admin/roster/hours_controls",
      element: <EditRoster />
    },
    {
      path: "/admin/roster/staff-attendance",
      element: <Attendance />
    },
    // {
    //   path: "/admin/roster/staff-attendance",
    //   element: <Attendance />
    // },
    {
      path: "/admin/roster/view",
       element: <StaffSchedule />
     },
    {
      path: "/admin/roster/staff-schedule-day",
       element: <StaffScheduleDay />
     },
//arman
        ],
      },
    // },
    ],
  },
    // {
    //     path: "*",
    //     element: <NotFound />,
    // },
    // {
    //     path: "/test",
    //     element: <Home />,
    // },

]);
export default router;
