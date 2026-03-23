import { useState } from 'react'
import Sidebar from '../components/Sidebar'
import TopMenu from '../components/TopMenu'
import { Outlet } from 'react-router'

function AdminLayout() {
  const [isActiveSidebar, setIsActiveSidebar] = useState(false) 
  const handleToggleSidebar = () => {
      setIsActiveSidebar(!isActiveSidebar)
  }
  return (
     <>
        <TopMenu onToggleSidebar={handleToggleSidebar}/>
        <div className="flex">

            <Sidebar isActive={isActiveSidebar}/>    

            <div className="p-4 bg-slate-100 grow min-h-screen rounded-lg">
                <Outlet />
            </div>

         </div>
     </>
  )
}

export default AdminLayout
