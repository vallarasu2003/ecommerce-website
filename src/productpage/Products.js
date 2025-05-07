
import { useState,useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { fetchproductall, updateproduct} from "../config/axiousInstance";
import { FaCartPlus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { toast } from 'react-toastify';
import { MdLogout } from "react-icons/md";
import { logout } from "../slice/UserSlice";
function Productpage(){
    const dispatch=useDispatch()
    const user = useSelector((state) => state.user.user);
   
    

    const navigate=useNavigate()
    if(user===null){
        navigate("/")
    }
    const[company,setcompany]=useState(false);
    const[admin,setadmin]=useState(false)
    const [products, setProducts] = useState([]);
   
    
    console.log("redux",user)
   const handlelogout=()=>{
    dispatch(logout())
    navigate("/")
   }
    useEffect(() => {
        if (!user) return;

        if (user.role === "Admin") {
            setadmin(true);
          }
        if (user.role === "company" || user.role === "Admin") {   
          setcompany(true);
        }
      }, [user]);
      
      
    const handleincrease=async(product)=>{
        const updatedata={
            productPurchase:user.id
        }
       
        const response= await updateproduct(updatedata,product.id)
        if(response){   
            toast.success("Added to Cart!");
            console.log("succesfully updated")
        }
        else{
            toast.arror("failed to Cart!");
            console.log("failed")
        }
        console.log("updated",response)
    }
    
    useEffect(() => {
        const fetchProducts = async () => {
          try {
            const data = await fetchproductall();
            setProducts(data);
          } catch (err) {
            console.error("Failed to fetch products:", err); 
          }
        };
        fetchProducts();
      }, []);

    return(

        
        <div className="flex justify-between items-center px-10 py-4">
            
                <h1 className=" fixed text-2xl top-1 z-[40] font-bold text-blue-600 border border-white  bg-white  w-full h-[60px]">
                    E mart 
                </h1>
                <div className="space-x-4 fixed bottom-1  right-10 z-[40]">
                <button  className="  bg-blue-600 hover:bg-green-600 text-white px-4 py-2 rounded " onClick={handlelogout}>
                <MdLogout /> Logout
                    </button> 
                </div>
                <div className="space-x-4 fixed top-1  right-10 z-[40]">
                   {company && (<button  className="  bg-blue-600 hover:bg-green-600 text-white px-4 py-2 rounded " onClick={()=>navigate("/Addprod")}>
                        + Add product
                    </button>)}
                <button  className="  bg-blue-600  text-white px-4 py-2 rounded" onClick={()=>navigate("/Cart")}>
                your Cart
                </button>
                {admin && (<button  className="  bg-blue-600  text-white px-4 py-2 rounded" onClick={()=>navigate("/Userlist")}>
                    Admin 
                </button>)}
                </div>
                <div className=" absolute top-20 flex flex-wrap gap-6 px-10 py-6 bg-white text-blue-600 w-full z-[20]  ">
                    {
                        products.map((i,index)=>{
                            return(
                                <div  className=" shadow p-4 rounded-lg  border border-gray-300 w-full space-y-4"id={index}>
                                    <h className="font-bold text-gray-600">
                                        {i.productName.toUpperCase()}
                                    </h>
                                    <p className="text-gray-700"><span className="font-semibold">Price:</span> ₹{i.productPrice}</p>
                                    <p className="text-gray-600"><span className="font-semibold">Details:</span> {i.productInfo}</p>

                                    <button className="bg-blue-600 hover:bg-green-600 text-white px-4 py-2 rounded"   onClick={()=>handleincrease(i)} >
                                    <FaCartPlus />Add to Cart
                                    </button>
                                    <div className="relative group">
                                        <button className="bg-blue-600 text-white px-4 py-2 rounded">
                                            Company Details
                                        </button>

                                        <div className="absolute top-full left-10 mt-2 hidden group-hover:block bg-blue-600 p-4 rounded-lg shadow">
                                        <p className="text-white"><span className="font-semibold">Company Name:</span> {i.CompanyName}</p>
                                        <p className="text-white"><span className="font-semibold"> Company Details:</span> {i.CompanyDetail}</p>
                                        <p className="text-white"><span className="font-semibold"> Company Rating:</span> {"⭐".repeat(i.CompanyRating)}</p>
                                        </div>
                                        </div>

                                 </div>
                            )
                        })
                    }
                </div>
               

        </div>
        
    )

}
export default Productpage