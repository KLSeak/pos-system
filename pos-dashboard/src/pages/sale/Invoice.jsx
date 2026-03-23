import React from 'react'

function Invoice() {
  return (
    <>
      <div className="bg-white border shadow-sm print:border-none print:shadow-none px-6 py-8 max-w-md mx-auto mt-8">
        <h1 className="font-bold text-2xl my-4 text-center">
          MASTERIT POS 
        </h1>
        <hr className="mb-2" />
        <div className="flex justify-between mb-6">
          <h1 className="text-lg font-bold">វិក័យប័ត្រ</h1>
          <div className="text-gray-700">
            <div>កាលបរិច្ចេទ: 10/09/2023</div>
            <div>លេខ: #009</div>
          </div>
        </div>
   
        <table className="w-full mb-8">
          <thead>
            <tr>
              <th className="text-left font-bold text-gray-700">ទំនិញ</th>
              <th className="text-left font-bold text-gray-700">ចំនួន</th>
              <th className="text-right font-bold text-gray-700">តំលៃ</th>
            </tr>
          </thead>
          <tbody>
  
                    <tr>
                        <td className="py-1 text-left text-gray-700">asdfadsf</td>
                        <td className="py-1 text-left text-gray-700">43</td>
                        <td className="py-1 text-right text-gray-700">$453</td>
                    </tr>
  
          </tbody>
          <tfoot>
            <tr className="border-t border-slate-700">
              <td colSpan={2} className=" pt-2 text-right font-bold text-gray-700">ចំនួនសរុប</td>
              <td  className="text-right pt-2 font-bold text-gray-700">${8999}</td>
            </tr>
          </tfoot>
        </table>
        <div className="text-gray-700 mb-2 text-center">សូមអរគុណ!</div>
      </div>
    </>

  )
}

export default Invoice
