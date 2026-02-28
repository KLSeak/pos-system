import React from 'react'
import { Link, Outlet } from 'react-router'

function RootTemplate() {
  return (
    <>
    <Link to='/'>Home</Link>
    <Link to='/category'>Category</Link>
    <Link to='/product'>Product</Link>
    <Link to='/sale'>Sale</Link>
    <Link to='/report'>Report</Link>
    
    <Outlet/>
    
    </>
  )
}

export default RootTemplate