import React from 'react'
import { Link, Outlet } from 'react-router'
import { TiThMenu } from "react-icons/ti";

function RootTemplate() {
  return (
    <>
      <div className='bg-rose-300 h-15'>
        <div className='flex justify-between mx-8 py-3 items-center'>
          <div className='flex gap-2 items-center'>
            <div className='' >
            <label htmlFor="my-drawer-3" className=" lg:hidden">
              <TiThMenu className='size-6 ' />
            </label>
            
            </div>
            <p className='text-xl'>CONSTRUCTION MANAGEMENT</p>
          </div>
          <div>
            <button className="btn btn-soft btn-secondary mr-2">POS</button>
            <button className="btn btn-secondary">Super</button>
          </div>
        </div>
      </div>

      <div className="drawer lg:drawer-open">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
         
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
          <ul className="menu bg-base-200 min-h-full w-65 p-4">
            {/* Sidebar content here */}
            <li className='text-xl'><a><Link to='/'>Home</Link></a></li>
            <li className='text-xl'><a> <Link to='/category'>Category</Link></a></li>
            <li className='text-xl'><a><Link to='/product'>Product</Link></a></li>
            <li className='text-xl'><a><Link to='/sale'>Sale</Link></a></li>
            <li className='text-xl'><a> <Link to='/report'>Report</Link></a></li>
          </ul>
        </div>
      </div>
    
      <Outlet />

    </>
  )
}

export default RootTemplate