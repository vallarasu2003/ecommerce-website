
import { useState,useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { fetchproductall, updateproduct} from "../config/axiousInstance";
import { FaCartPlus } from "react-icons/fa";

function Productpage({userid}){
    const navigate=useNavigate()
    const[company,setcompany]=useState(false);
    const[admin,setadmin]=useState(false)
    const [products, setProducts] = useState([]);
    const updatedata={
        productPurchase:userid.id
    }
    useEffect(() => {
        if (userid?.role === "Admin") {
            setadmin(true);
          }
        if (userid?.role === "company" || userid?.role === "Admin") {   
          setcompany(true);
        }
      }, [userid]);
    console.log(userid.id)
    const handleincrease=async(product)=>{
        // console.log("proid",product.id)
       
        const response= await updateproduct(updatedata,product.id)
        if(response){   
            console.log("succesfully updated")
        }
        else{
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