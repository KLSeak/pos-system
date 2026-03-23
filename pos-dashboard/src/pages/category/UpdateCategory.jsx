import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router';
import toast, { Toaster } from 'react-hot-toast';
import { Link } from 'react-router';
import { useNavigate } from 'react-router';


function UpdateCategory() {

  const [category, setCategory] = useState({});
  const [loading, setLoading] = useState({
    name: "",
    note: ""
  });

  const route = useParams();
  console.log(route.id)

  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:8000/api/category/${route.id}`)
      .then(res => {
        console.log(res.data.data);
        setCategory(res.data.data);
      })
      .catch(err => console.log(err.message))
  }, [])

  const handleUpdate = async (e) => {

    e.preventDefault();
    try{
        
        await axios.patch(`http://localhost:8000/api/category/${route.id}`,category);
        console.log(category)
        navigate('/category')

        toast.success("Category updated Successfuly")

    }catch(error){
        console.log(error.messsage);
        toast.error("category updated fail")
    }

}

  return (

    <>
      {/* update */}
      {/* <div>
        {category.name} {category.note} {category.createdAt}
      </div> */}
      <Toaster className="top-center" />
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-semibold">កែប្រែប្រភេទទំនិញ</h1>
        {/* <button className="btn btn-sm">ថយក្រោយ</button> */}
      </div>

      <div className="max-w-lg bg-white p-3 rounded-lg mt-4 bg-slate">
        <form onSubmit={handleUpdate}>
          <div className="mb-3">
            <label htmlFor="" className="block">
              ឈ្មោះ <span className='text-red-500'>*</span>
            </label>
            <input
              required
              onChange={(e) => {setCategory({ ...category, name: e.target.value })}}
              value={category.name}
              type="text"
              className="input input-bordered w-full"
              placeholder="សូមបញ្ចូលឈ្មោះ"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="" className="block">
              ពណ៍នា
            </label>
            <input
              type="text"
              onChange=""
              value={category.note}
              className="input input-bordered w-full"
              placeholder="សូមបញ្ចូលការពណ៍នា"
            />
          </div>

          <div className="flex justify-end items-center space-x-2">
            <Link to={`/category`} className="btn btn-sm">បោះបង់</Link>
            <button type="submit" className="btn btn-sm btn-success text-white" >
              {loading ? "កំពុងរក្សាទុក​.." : "រក្សាទុក"}
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default UpdateCategory