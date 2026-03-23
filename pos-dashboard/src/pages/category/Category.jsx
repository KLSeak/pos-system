import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import { Link } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";
import toast, { Toaster } from 'react-hot-toast';



function Category() {
  const [category, setCategory] = useState([]);

  // console.log(student);
  const fetch_data = () => {
    // const data = fetch("http://localhost:8000/api/category")
    //   .then(respone => respone.json())
    //   // .then(data => setCategory(data))
    //   .then(data => console.log(data.data))
    //   // .catch(error => console.log(error))
    try {
      const response = axios
        .get("http://localhost:8000/api/category")
        .then((res) => {
          console.log(res.data.data);
          setCategory(res.data.data);
        });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(fetch_data, []);

  //delete button
  // const handleDelete = async (e, name, id) =>{
  //   console.log(name,id)

  //   if(window.confirm(`Are you want to delete ${name}`))return;
  //   try {
  //     await axios.delete(`http://localhost:8000/api/category${id}`)
  //   } catch (error) {
  //     console.log(error.message)
  //   }
  // }
//delete category
  const handleDelete = (e, name, id) => {
    e.preventDefault();
    const confirm = window.confirm(`Are you sure to delete ${name} ?`);
    if (confirm) {
      try {
        axios.delete(`http://localhost:8000/api/category/${id}`)
          .then(res => {
            console.log(res.data);
            toast.success("Categroy delete Successfuly")
            // Remove the deleted category from the state
            setCategory(category.filter(c => c._id !== id));
          })
          .catch(err => console.log(err.message));
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <>
      <Toaster className="top-center"/>
      {/* {category.map((item, index) => (<div key={index}>{item.name}</div>))} */}

      <div className="flex justify-between items-center">
        <h1 className="text-xl font-semibold">ប្រភេទំនិញ</h1>
        <Link
          to={"/category/create"}
          className="btn btn-sm btn-success text-white"
        >
          +បន្ថែមថ្មី
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
                <th>ឈ្មោះប្រភេទទំនិញ</th>
                <th>ពណ៍នា</th>
                <th>សកម្មភាព</th>
              </tr>
            </thead>
            <tbody>
              {category.map((item, index) => (
                <tr key={index} className="border-b border-gray-200">
                  <th>{index+1}</th>
                  <td className="text-nowrap">{item.name}</td>
                  <td>{item.note}</td>
                  <td className="flex text-nowrap space-x-2 items-center">
                    <Link to={`/category/update/${item._id}`} className="text-sm flex text-success items-center">
                      <FaRegEdit />
                      <span>កែប្រែ</span>
                    </Link>
                    <button onClick={(e) => handleDelete(e, item.name, item._id )} className="text-sm flex text-red-500 items-center">
                      <MdDeleteOutline />
                      <span>លុប</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex items-center justify-between">
          <div className="font-medium text-sm">
            ទំព័រ {1}/{100}
          </div>
          <div className="join mt-4 flex justify-end">
            <button className="join-item btn btn-sm">«</button>
            <button className="join-item btn btn-sm">ទំព័រ {1}</button>
            <button className="join-item btn btn-sm">»</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Category;
