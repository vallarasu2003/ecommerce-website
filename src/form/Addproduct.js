import { useState } from "react"
import { createproduct } from "../config/axiousInstance";

function Addproduct(){
    const[formData,setFormData]=useState({productName:"",productPrice:"",productInfo:""})
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const response = await createproduct(formData);
            console.log("created succesfully", response);
        }
        catch(err){
            console.log("issue in create")
            throw(err)
           
        }
        setFormData({productName:"",productPrice:0,productInfo:""})


        
      };
    return(
        <div>
            <form onSubmit={handleSubmit} className="mt-20 flex flex-col items-start gap-4 w-[280px] min-h-[250px] border border-blue-300 font-bold shadow mx-auto p-4">
                <label>prodname</label>
                <input type="text" name="productName" value={formData.productName} onChange={handleChange} className="border border-gray-300 w-full p-1"/>
                <label>prodprice</label>
                <input type="number"  name="productPrice"value={formData.productPrice} onChange={handleChange} className="border border-gray-300 w-full p-1"/>
                <label>prodinfo</label>
                <input type="text"  name="productInfo" value={formData.productInfo} onChange={handleChange} className="border border-gray-300 w-full p-1"/>
                <button type="submit">Add</button>
            </form>
        </div>
    )
}
export default Addproduct;