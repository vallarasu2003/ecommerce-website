import { useNavigate } from "react-router-dom"
import {fetchuserall} from "../config/axiousInstance"
import { useState,useEffect } from "react";
function  Userlist(){
    const navigate=useNavigate()
    const[products,setProducts]=useState([])
    useEffect(() => {
        const fetchuser = async () => {
          try {
            const data = await fetchuserall();
            setProducts(data);
            console.log("alluser",data)
          } catch (err) {
            console.error("Failed to fetch products:", err); 
          }
        };
        fetchuser();
      }, []);


    return(
    <>
    <div className="space-x-4 fixed top-4  left-10 z-[40]">
    <button  className="  bg-blue-600 text-white px-4 py-2 rounded " onClick={()=>navigate("/Product")}> Back</button>
    </div>
    <div className="space-x-4 fixed top-4  right-10 z-[40]">
                <button  className="  bg-blue-600 hover:bg-green-600 text-white px-4 py-2 rounded " onClick={()=>navigate("/Adduser")}>
                        + Add User
                </button>
    </div>
    <div className=" absolute top-20 flex flex-wrap gap-6 px-10 py-6 bg-white text-blue-600 w-full z-[20]  ">
    { products.map((i,index)=>{
        return(
      
            <div  className=" shadow p-4 rounded-lg  border border-gray-300 w-full space-y-4" id={index}>                       
                <p className="text-gray-700"><span className="font-semibold">User Name</span> {i.email}</p>
                <p className="text-gray-600"><span className="font-semibold">Role</span> {i.role}</p>
                <button className="bg-blue-600  text-white px-4 py-2 rounded" onClick={()=>navigate("/Admin",{state:i})}>Edit</button>
            </div>
        
        )
        })
    }
    </div>
    </>
    )
}
export default Userlist