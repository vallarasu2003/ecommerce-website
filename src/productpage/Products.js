
import { useState,useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { fetchproductall,login, updateproduct} from "../config/axiousInstance";
import { FaCartPlus } from "react-icons/fa";

function Productpage({userid}){
    const navigate=useNavigate()
    const[count,setcount]=useState(0);
    const [products, setProducts] = useState([]);
    const handleincrease=()=>{
        setcount(count+1)
   
    }
    
    console.log(userid)
   
  const handleupdate=async()=>{

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
                    <button  className="  bg-blue-400 hover:bg-blue-600 text-white px-4 py-2 rounded " onClick={()=>navigate("/Addprod")}>
                        + Add product
                    </button>
                <button  className="  bg-blue-400 hover:bg-blue-600 text-white px-4 py-2 rounded" onClick={()=>navigate("/Cart")}>
                your Cart
                </button>
                </div>
                <div className=" absolute top-20 flex flex-wrap gap-6 px-10 py-6 bg-white text-blue-600 w-full z-[20] ">
                    {
                        products.map((i,index)=>{
                            return(
                                <div  className=" shadow p-4 rounded-lg  border border-gray-300 min-w-full space-y-4"id={index}>
                                    <h className="font-bold text-gray-600">
                                        {i.productName.toUpperCase()}
                                    </h>
                                    <p className="text-gray-700"><span className="font-semibold">Price:</span> ₹{i.productPrice}</p>
                                    <p className="text-gray-600"><span className="font-semibold">Details:</span> {i.productInfo}</p>

                                    <button className="bg-blue-400 hover:bg-blue-600 text-white px-4 py-2 rounded"  value={i.productId} onClick={handleincrease} >
                                    <FaCartPlus />Add to Cart
                                    </button>
                                 </div>
                            )
                        })
                    }
                </div>
               

        </div>
        
    )

}
export default Productpage