import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { IoHome } from "react-icons/io5";
import { TbCategory } from "react-icons/tb";
import { AiOutlineProduct } from "react-icons/ai";
import { TbHttpPost } from "react-icons/tb";
import { TbReportAnalytics } from "react-icons/tb";

function Sidebar() {
    const location = useLocation();
    const isSaleActive = location.pathname.startsWith('/sale');

    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />

            <div className="drawer-content flex flex-col items-center justify-center">
            </div>

            <div className="drawer-side">
                <label htmlFor="my-drawer-3" className="drawer-overlay"></label>

                <ul className="menu bg-base-200 min-h-full w-65 p-4">

                    <li className='text-xl m-2'><NavLink to="/" className={({ isActive }) => isActive ? "bg-rose-100" : ""}>
                        <IoHome /> ផ្ទាំងដើម</NavLink></li>

                    <li className='text-xl m-2'><NavLink to="/category" className={({ isActive }) => isActive ? "bg-rose-100" : ""}>
                        <TbCategory /> ប្រភេទទំនិញ</NavLink></li>

                    <li className='text-xl m-2'><NavLink to="/product" className={({ isActive }) => isActive ? "bg-rose-100" : ""}>
                        <AiOutlineProduct /> ទំនិញ</NavLink></li>

                    <li className='text-xl m-2'>
                        <details open>
                            <summary className={isSaleActive ? "bg-rose-100" : ""}>
                                <TbHttpPost />
                                <NavLink to="/sale">ការលក់</NavLink>
                            </summary>
                            <ul>
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </details>
                    </li>

                    <li className='text-xl m-2'><NavLink to="/report" className={({ isActive }) => isActive ? "bg-rose-100" : ""}>
                        <TbReportAnalytics /> របាយការណ៍</NavLink></li>

                </ul>
            </div>
        </div>
    )
}

export default Sidebar