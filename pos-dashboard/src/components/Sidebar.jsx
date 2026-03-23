import { useState } from "react";
import { NavLink } from "react-router";
import { TiHome } from "react-icons/ti";
import { MdCategory } from "react-icons/md";
import { IoMdArrowDropright } from "react-icons/io";
import { FaHandsHelping } from "react-icons/fa";
import { TbHttpPost, TbActivityHeartbeat, TbPackages } from "react-icons/tb";
import { IoBarChart } from "react-icons/io5";

function Sidebar({ isActive }) {
  const [activeReportIndex, setActiveReportIndex] = useState(false);
  const [activePosIndex, setActivePosIndex] = useState(false);

  const navLinkClass =
    "flex items-center space-x-2 py-3 px-4 font-medium rounded-lg hover:bg-success/10 text-nowrap aria-[current=page]:bg-success/10";

  return (
    <div
      className={`${
        isActive ? "w-[260px]" : "w-0"
      }  z-50 md:w-[260px] text-nowrap bg-white transition-all duration-300 overflow-y-auto pt-4 shadow-sm min-h-screen border-r border-gray-200`}
    >
      <div className="px-2 md:px-4 space-y-1">
        <NavLink to="/" className={navLinkClass}>
          <span className="text-lg">
            <TiHome />
          </span>
          <span>ផ្ទាំងដើម</span>
        </NavLink>

        <NavLink to="/category" className={navLinkClass}>
          <span className="text-lg">
            <MdCategory />
          </span>
          <span>ប្រភេទំនិញ</span>
        </NavLink>

  
        <NavLink to="/product" className={navLinkClass}>
          <span className="text-lg">
            <TbPackages />
          </span>
          <span>ទំនិញ</span>
        </NavLink>

        {/* POS Section */}
        <button
          onClick={() => setActivePosIndex(!activePosIndex)}
          className="flex items-center justify-between w-full py-3 px-4 font-medium rounded-lg hover:bg-success/10"
        >
          <div className="flex items-center space-x-2">
            <span className="text-lg">
              <TbHttpPost />
            </span>
            <span>ការលក់</span>
          </div>
          <div
            className={`${
              activePosIndex ? "-rotate-90" : "rotate-90"
            } text-lg transition-transform`}
          >
            <IoMdArrowDropright />
          </div>
        </button>

        <div
          className={`${
            activePosIndex ? "h-auto" : "h-0"
          } transition-all rounded-lg bg-gray-100 duration-300 overflow-hidden`}
        >
          <NavLink to="/sale/list" className="pl-5 pr-4 flex items-center space-x-2 pt-3 pb-2 font-medium text-nowrap aria-[current=page]:text-success-600">
            <span>
              <TbActivityHeartbeat />
            </span>
            <span>បញ្ជីការលក់</span>
          </NavLink>
          <NavLink to="/sale/pos" className="pl-5 pr-4 flex items-center space-x-2 pt-3 pb-2 font-medium text-nowrap aria-[current=page]:text-success-600">
            <span>
              <TbActivityHeartbeat />
            </span>
            <span>POS</span>
          </NavLink>
        </div>

        {/* Report Section */}
        <button
          onClick={() => setActiveReportIndex(!activeReportIndex)}
          className="flex items-center justify-between w-full py-3 px-4 font-medium rounded-lg hover:bg-success/10"
        >
          <div className="flex items-center space-x-2">
            <span className="text-lg">
              <IoBarChart />
            </span>
            <span>របាយការណ៍</span>
          </div>
          <div
            className={`${
              activeReportIndex ? "-rotate-90" : "rotate-90"
            } text-lg transition-transform`}
          >
            <IoMdArrowDropright />
          </div>
        </button>

        <div
          className={`${
            activeReportIndex ? "h-auto" : "h-0"
          } transition-all rounded-lg bg-gray-100 duration-300 overflow-hidden`}
        >
          <NavLink to="/report/sale" className="pl-5 pr-4 flex items-center space-x-2 pt-3 pb-2 font-medium text-nowrap aria-[current=page]:text-success-600">
            <span>
              <TbActivityHeartbeat />
            </span>
            <span>របាយការណ៍ចំណូល</span>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
