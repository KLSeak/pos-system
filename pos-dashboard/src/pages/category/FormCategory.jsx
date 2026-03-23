import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router'
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast';

function FormCategory() {
  
  const navigate = useNavigate();

  // const notify = () => toast("Category add sucess")
  const [name, setName] = useState("")
  const [note, setNote] = useState("")
  const [loading, setLoading] = useState(false)


  const handleSubmit = async (e) =>{
    e.preventDefault()
    setLoading(true)
    try {
      const data = {
        name,
        note
      }
      console.log(data)
      
      await axios.post("http://localhost:8000/api/category", {
        name: name,
        note: note,
      });
  
      setName("")
      setNote("")
  
      toast.success("Add Categroy Successfuly")
      // setLoading(false)

      setTimeout(()=>{
        navigate('/category')
      },3000)
      
    } catch (error) {

     console.log(error) 
     toast.error("Add category fail")
    //  setLoading(false)
    }
    
  }
  
  return (
    <>
      <Toaster className="top-center"/>
        <div className="flex justify-between items-center">
        <h1 className="text-xl font-semibold">បញ្ចូលប្រភេទទំនិញថ្មី</h1>
        {/* <button className="btn btn-sm">ថយក្រោយ</button> */}
      </div>

      <div className="max-w-lg bg-white p-3 rounded-lg mt-4 bg-slate">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="" className="block">
              ឈ្មោះ <span className='text-red-500'>*</span>
            </label>
            <input
              required
              onChange={(e) => {setName(e.target.value)}}
              value={name}
              type="text"
              className="input input-bordered w-full"
              placeholder="សូមបញ្ចូលឈ្មោះ"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="" className="block">
              ពណ៍នា​ 
            </label>
            <input
              type="text"
              onChange={(e) => {setNote(e.target.value)}}
              value={note}
              className="input input-bordered w-full"
              placeholder="សូមបញ្ចូលការពណ៍នា"
            />
          </div>
 
          <div className="flex justify-end items-center space-x-2">
            <Link to={`/category`} className="btn btn-sm">បោះបង់</Link>
            <button type="submit" className="btn btn-sm btn-success text-white" > 
              {loading ? "កំពុងរក្សាទុក​..": "រក្សាទុក"}
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default FormCategory
