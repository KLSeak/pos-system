import { useState } from "react";

function SaleReport() {
    const [startDate, setStartDate] = useState(null)
    const [endDate, setEndDate] = useState(null)
    
  return (
    <>
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-semibold">របាយការណ៍ការលក់</h1>
      </div>

      <div className="p-5 bg-white rounded-lg flex justify-center items-center">
        <form className="flex flex-col md:flex-row space-x-4 items-center">
          <div>
            <label htmlFor="" className="block">
              ចាប់ផ្តើម
            </label>
            <input
              type="date"
              onChange={(e) => setStartDate(e.target.value)}
              className="input input-bordered"
            />
          </div>
          <div>
            <label htmlFor="" className="block">
              បញ្ចប់
            </label>
            <input
              type="date"
              onChange={(e) => setEndDate(e.target.value)}
              className="input input-bordered"
            />
          </div>
          <div className="mt-5 flex flex-col md:flex-row gap-2">
            <button className="btn btn-sm lg:btn-md w-20 btn-success text-white">ច្រោះ</button>
            <button className="btn btn-sm lg:btn-md w-fit btn-error text-white">ជម្រេះទិន្នន័យ</button>
          </div>
        </form>
      </div>

      <div className="bg-white p-5 rounded-lg mt-3">
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
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200">
                <th>1</th>
                <td className="text-nowrap">033</td>
                <td className="text-nowrap">Koadf</td>
                <td className="text-nowrap text-red-500 font-semibold">
                  $300
                </td>
                <td className="text-nowrap">
                   09/09/2004
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="flex justify-end items-center mt-3">
          <h1>
            ចំនួនសរុប៖{" "}
            <span className="text-red-500 font-semibold">
              ${2000}
            </span>
          </h1>
        </div>
      </div>
    </>
  );
}

export default SaleReport;
