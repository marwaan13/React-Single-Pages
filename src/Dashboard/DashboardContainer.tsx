import { Outlet } from "react-router-dom"
import Sidebar from "./components/Sidebar"


const DashboardContainer = () => {
  return (
    <div className="flex gap-3">
        <Sidebar />

        <div className="body">
            <Outlet />
        </div>
    </div>
  )
}

export default DashboardContainer