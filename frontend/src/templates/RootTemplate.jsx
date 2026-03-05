import React from 'react'
import { Outlet } from 'react-router';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
function RootTemplate() {
  return (
    <>

      <Header />
      <div>
        <div>
          <Sidebar/>
        </div>
        <div>
          <Outlet />
        </div>
      </div>
     

        
      

     

    </>
  )
}

export default RootTemplate