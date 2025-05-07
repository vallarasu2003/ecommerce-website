import { useState } from "react";
import { createproduct } from "../config/axiousInstance";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';


function Addproduct() {
  const [formData, setFormData] = useState({productName: "",productPrice: "", productInfo: "", CompanyRating:"",CompanyDetail:"",CompanyName:""
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await createproduct(formData);
      toast.success("Product Created successful");
    } catch (err) {
      toast.error("Failed to create ");
      console.log("Issue in create", err);
    }
    setFormData({ productName: "", productPrice: "", productInfo: "" ,CompanyRating:"",CompanyDetail:"",CompanyName:""});
  };

  return (
    <>
    <div className="space-x-4 fixed top-1  left-10 ">
    <button  className="  bg-blue-600 hover:bg-green-600 text-white px-4 py-2 rounded " onClick={()=>navigate("/Product")}>
                      Back
    </button>
  </div>
    <div className="flex justify-center items-center min-h-screen  px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow rounded-xl p-8 w-full max-w-md border border-blue-200 space-y-6"
      >
        <h1 className="text- text-center font-bold text-white bg-blue-600 rounded-lg py-3 shadow">
          Add Product to Store
        </h1>

        <div className="space-y-4">
          <label className="block text-blue-700 mb-1 font-medium">Product Name</label>
          <input
            type="text" name="productName" value={formData.productName} onChange={handleChange} required
            className="border border-blue-300 rounded-md w-full p-2"
          />
       
          <label className="block text-blue-700 mb-1 font-medium">Product Price</label>
          <input
            type="number" name="productPrice" value={formData.productPrice} onChange={handleChange} required
            className="border border-blue-300 rounded-md w-full p-2 "
          />
       
          <label className="block text-blue-700 mb-1 font-medium">Product Information</label>
          <input
            type="text" name="productInfo" value={formData.productInfo} onChange={handleChange} required
            className="border border-blue-300 rounded-md w-full p-2"
          />
           <label className="block text-blue-700 mb-1 font-medium">Company Name</label>
          <input
            type="text" name="CompanyName" value={formData.CompanyName} onChange={handleChange} required
            className="border border-blue-300 rounded-md w-full p-2"
          />
          <label className="block text-blue-700 mb-1 font-medium">Company details</label>
          <input
            type="text" name="CompanyDetail" value={formData.CompanyDetail} onChange={handleChange} required
            className="border border-blue-300 rounded-md w-full p-2"
          />
          <label className="block text-blue-700 mb-1 font-medium">Company Rating</label>
          <input
            type="text" name="CompanyRating" value={formData.CompanyRating} onChange={handleChange} required
            className="border border-blue-300 rounded-md w-full p-2"
          />
        </div>

        <div className="flex flex-col gap-3">
          <button
            type="submit"
            className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md "
          >
             Add Product
          </button>

          <button
            type="button"
            onClick={() => navigate("/Product")}
            className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md "
          >
             Cancel
          </button>
        </div>
      </form>
    </div>
    </>
  );
}

export default Addproduct;
