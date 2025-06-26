import { Profile } from "../../components/common/Profile"
import { Footer } from "../../components/common/Footer"
import { Outlet } from "react-router-dom"
import { MarginBottom } from "../../components/common/MarginBottom"


export const MainLayouts = () => {
  return (
    <div className='p-3'>
        <Profile />
        <Outlet /> {/* This is where nested routes will render */}
        <MarginBottom/>
        <Footer />
    </div>
  )
}
