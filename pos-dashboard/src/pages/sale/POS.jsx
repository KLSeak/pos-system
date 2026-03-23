import React from 'react'

function POS() {
  return (
    <>

            <div className="flex justify-between items-center">
        <h1 className="text-xl font-semibold">ផ្ទាំងការលក់</h1>
      </div>

      <div className="grid grid-cols-12 gap-5 mt-4">
        <div className="col-span-12 md:col-span-8">
          <div className="mb-3 bg-white p-3 shadow-sm rounded-lg">
            <h1 className="font-semibold mb-3 text-lg">ប្រភេទទំនិញ</h1>
            <div className="flex items-center gap-3">
              <button
               className='btn btn-sm'
              >
                ភេសជ្ជៈ
              </button>
              <button
               className='btn btn-sm btn-success'
              >
                អាហារ
              </button>
            
            </div>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
              <div
                className="bg-white overflow-hidden cursor-pointer hover:scale-105 transition-all duration-300 border border-gray-200 p-3 rounded-lg"
              >
                <div className='flex justify-center'>
                  <img
                    src={`https://cdn.s-liquor.com.kh/sliquors3/wp-content/uploads/2022/11/Sting.jpg?strip=all&lossy=1&webp=85&avif=80&ssl=1`}
                    alt=""
                    className="w-32"
                  />
                </div>
                <div className="mt-1">
                  <h1 className="text-center font-medium text-red-500">
                    ${(100).toFixed(2)}
                  </h1>
                </div>
              </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-4">
          <div className="h-auto p-3 bg-white shadow-sm rounded-lg">
            <div className="flex justify-between items-center mb-3">
              <h1 className="font-semibold mb-3 text-lg">ទំនិញកម្មង់</h1>
              <button  className="btn btn-sm btn-error">ជម្រះ</button>
            </div>

            <div className="space-y-4">
  
                  <div className="grid grid-cols-3 p-1 border-b border-gray-100">
                    <h1 className="text-left line-clamp-1">asdf</h1>
                    <div className="flex items-center justify-center p-0.5 space-x-2">
                      <button className="btn btn-xs">-</button>
                      <button className="px-1">{1}</button>
                      <button className="btn btn-xs">+</button>
                    </div>
                    <div className="font-medium text-red-500 text-right">${100}</div>
                  </div>

        
              <div className="flex justify-between items-center mt-4">
                <p>ចំនួនសរុប</p>
                <p className="font-medium text-red-500">${(100).toFixed(2)}</p>
              </div>

              <div>
                <button className="btn btn-sm btn-success text-white w-full">
                  ធ្វើការទិញ
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    
    </>
  )
}

export default POS
