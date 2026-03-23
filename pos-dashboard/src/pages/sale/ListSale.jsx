import { IoIosEye } from "react-icons/io"
import { Link } from "react-router"

function ListSale() {
  return (
    <>
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-semibold">បញ្ជីរការលក់</h1>
        <Link to={"/sale/post"} className="btn btn-sm btn-success text-white">
          POS
        </Link>
      </div>

      <div className="bg-white rounded-lg p-3 mt-4">
        <div className="mt-6 mb-3 flex items-center justify-between">
          <select className="select select-sm select-bordered w-auto">
            <option value={25}>25</option>
            <option value={50}>50</option>
            <option value={100}>100</option>
            <option value={200}>200</option>
            <option value={500}>500</option>
          </select> 

           <label className="input input-sm">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input type="search" required placeholder="Search" />
          </label>

          
        </div>

        <div className="overflow-x-auto grid grid-cols-12">
          <table className="table border col-span-12 border-gray-200">
            {/* head */}
            <thead className="md:text-sm text-slate-600 bg-black/5">
              <tr>
                <th>ល.រ</th>
                <th>លេខវិក័យប័ត្រ</th>
                <th>លក់ដោយ</th>
                <th>ចំនួនសរុប</th>
                <th>កាលបរិច្ចេទ</th>
                <th>សកម្មភាព</th>
              </tr>
            </thead>
            <tbody>
         
                  <tr  className="border-b border-gray-200">
                    <th>1</th>
                    <td className="text-nowrap">0001</td>
                    <td className="text-nowrap">klasj</td>
                    <td className="text-nowrap text-red-500 font-semibold">${100}</td>
                    <td className="text-nowrap">02/09/2025</td>
                    <td className="flex text-nowrap space-x-2 items-center">
                      <Link to={`/sale/invoice/3434`} target="_blank" className="text-sm flex space-x-1 text-success items-center">
                        <span className="text-lg"><IoIosEye /></span>
                        <span>មើលលម្អិត</span>
                      </Link>
                    </td>
                  </tr>
      
            </tbody>
          </table>
        </div>

        <div className="flex items-center justify-between">
          <div className="font-medium text-sm">ទំព័រ {1}/{100}</div>
          <div className="join mt-4 flex justify-end">
            <button  className="join-item btn btn-sm">«</button>
            <button className="join-item btn btn-sm">ទំព័រ {1}</button>
            <button  className="join-item btn btn-sm">»</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default ListSale
