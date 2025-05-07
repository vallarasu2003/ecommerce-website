import { useLocation, useNavigate } from "react-router-dom"
import { updateuser } from "../config/axiousInstance"
import { useState,useEffect } from "react";
import { toast } from 'react-toastify';
function Adminpage(){
    const navigate=useNavigate()
    const [formData, setFormData] = useState({ email: "", password: "", role: "" });
    const location=useLocation()
    const userdata=location.state
    // console.log(userdata)
    
    useEffect(() => {
        if (userdata) {
          setFormData({
            email: userdata.email || "",
            password: userdata.password || "",
            role: userdata.role || ""
          });
        }
      }, [userdata]);

    const handlechange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
      };
    const handlesubmit=async(e)=>{
        e.preventDefault()
        console.log("update trigged")
        try{
            const response= await updateuser(formData,userdata.id)
            
            if(response){
                    toast.success("User Details updated succesfully")
            }
        }
        catch(err){
            console.log(err)
            toast.error("Failed to Update the user Details")
        }
    }


    return(
        <>
         <div className="space-x-4 fixed top-4  left-10 ">
    <button  className="  bg-blue-600 text-white px-4 py-2 rounded " onClick={()=>navigate("/Userlist")}>
                      Back
    </button>
  </div>
        <div className="flex justify-center items-center min-h-screen px-4">
            <form className="bg-white shadow rounded-xl p-8 w-full max-w-md border border-blue-200 space-y-6" onSubmit={handlesubmit}>
           <h1 className="text-center font-bold text-blue-700">Edit the user Access</h1>
           <div className="space-y-4">
           <lable className="block text-blue-700 mb-1 font-medium">
            User email :
           </lable>         
           <input type="email" value={formData.email} name="email" onChange={handlechange} className="border border-gray rounded-md w-full p-2"/>
           <label className="block text-blue-700 mb-1 font-medium"> Password</label>
           <input  type="password" value={formData.password} name="password"  onChange={handlechange}className="border border-gray rounded-md w-full p-2"/>
           <label className="block text-blue-700 mb-1 font-medium">
            Role
           </label>
           <select type="text" value={formData.role} name="role" id="role"  onChange={handlechange}className="border rounded-lg w-full p-2">
           <option value="User">User</option>
           <option value="Admin">Admin</option>
           <option value="company">company</option>
        </select>
           <button type ="submit" className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md ">Update the Access</button>
           </div>
           </form>

        </div>
        </>
    )
}
export default Adminpage