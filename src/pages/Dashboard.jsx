import ClockIn from '../components/dashboard/ClockIn'
import { Footer } from '../components/common/Footer'
import { Profile } from '../components/common/Profile'
import { DashboardMain } from '../components/dashboard/DashboardMain'
import {  } from "../components/dashboard/ClockIn";

export const Dashboard = () => {
  return (
    <div>
        <ClockIn />
        <DashboardMain />
    </div>
  )
}
