import { Link } from "react-router";
import { useState } from "react";
import { IoIosClose } from "react-icons/io";

function FormProduct() {
  const [previewImage, setPreviewImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setPreviewImage(url);
    } else {
      setPreviewImage(null);
    }
  };

  return (
    <>
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-semibold">បញ្ចូលទំនិញថ្មី</h1>
      </div>

      <div className="bg-white p-3 rounded-lg mt-4 max-w-xl">
        <form className="grid grid-cols-2 gap-5">
          <div>
            <label className="block">ឈ្មោះទំនិញ*</label>
            <input
              type="text"
              required
              className="input input-bordered w-full"
              placeholder="សូមបញ្ចូល"
            />
          </div>

          <div>
            <label className="block">ប្រភេទទំនិញ*</label>
            <select
              className="select select-bordered w-full"
              defaultValue={"សូមជ្រើសរើស"}
            >
              <option value="សូមជ្រើសរើស" disabled>
                សូមជ្រើសរើស
              </option>
              <option value="Drink">Drink</option>
              <option value="Food">Food</option>
            </select>
          </div>

          <div>
            <label className="block">តំលៃលក់*</label>
            <input
              type="number"
              className="input input-bordered w-full"
              placeholder="0.00"
            />
          </div>

          <div>
            <label className="block">ចំនួនស្តុក*</label>
            <input
              type="number"
              className="input input-bordered w-full"
              placeholder="សូមបញ្ចូល"
            />
          </div>

          <div className="col-span-2">
            <label className="block mb-1">
              រូបភាព <span className="text-xs">(ទំហំរូបភាពធំបំផុត 5MB)</span> *
            </label>

            {/* Hidden File Input */}
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              id="productImage"
              className="hidden"
              required
            />

            {previewImage ? (
              <div className="mt-3 w-28  relative">
                <img
                  src={previewImage}
                  alt="Preview"
                  className="rounded w-full h-full border border-gray-200"
                />
                <button
                  type="button"
                  onClick={() => setPreviewImage(null)}
                  className="absolute top-1 right-1 bg-red-500 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center hover:bg-red-600"
                  aria-label="Remove image"
                >
                  <IoIosClose />
                </button>
              </div>
            ) : (
              <label
                htmlFor="productImage"
                className="w-28 h-28 relative border-2 border-dashed border-gray-300 rounded-lg cursor-pointer flex items-center justify-center hover:border-success hover:bg-success/5 transition"
              >
                <span className="text-gray-500">+</span>
              </label>
            )}
          </div>

          <div className="col-span-2 flex justify-end items-center space-x-2">
            <Link to="/product" className="btn btn-sm">
              បោះបង់
            </Link>
            <button type="submit" className="btn btn-sm btn-success text-white">
              រក្សាទុក
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default FormProduct;
