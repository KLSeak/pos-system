import React from 'react'
import { FaUser } from 'react-icons/fa'

function Login() {
  return (
   <div className="w-full min-h-screen bg-success grid place-content-center">
      <form className="p-3 bg-white min-w-[400px] rounded-lg">
        <div className="mb-3 border-b pb-4 border-gray-200 flex justify-center gap-2 items-center">
          <button className="text-3xl">
            <FaUser />
          </button>
          <h1 className="text-3xl font-semibold ">ចូលប្រើប្រាស់</h1>
        </div>
        <div className="mb-3">
          <label htmlFor="" className="block">
            ឈ្មោះ
          </label>
          <input
            type="email"
            required
            className="input input-bordered w-full"
            placeholder="សូមបញ្ចូលឈ្មោះ"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="" className="block">
            ពាក្យសម្ងាត់
          </label>
          <input
            type="password"
            required
            className="input input-bordered w-full"
            placeholder="សូមបញ្ចូលពាក្យសម្ងាត់"
          />
        </div>

        <div>
          <button type="submit" className="btn btn-success text-white w-full">
            ចូលប្រព័ន្ធ
          </button>
        </div>
      </form>
    </div>
  )
}

export default Login
