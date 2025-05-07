import { useEffect ,useState} from "react";
import { fetchproductall ,updateproduct} from "../config/axiousInstance";
import { BsCartCheckFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";
import { useSelector } from "react-redux";
import { toast } from 'react-toastify';

function CartPage(){
    const user = useSelector((state) => state.user.user);
  const navigate=useNavigate();
     const [products, setProducts] = useState([]);
     const updatedata={productPurchase:null

     }
     const fetchProducts = async () => {
        try {
          const data = await fetchproductall();
          const filtered = data.filter((p) => p.productPurchase === String(user.id));
          setProducts(filtered);
          console.log("FILTERED", filtered);
        } catch (err) {
          console.error("Failed to fetch products:", err);
        }
      };
      
      useEffect(() => {
        if (user) fetchProducts();
      }, [user]);
      
      const handleremove = async (product) => {
        const response = await updateproduct(updatedata, product.id);
        if (response) {
            toast.success("Removed from Cart");
          console.log("removed successfully");
          await fetchProducts();
        } else {
            toast.error(" Failed to removed from Cart");
          console.log("failed");
        }
      };
      
    return(
      
        <div className="flex justify-between items-center px-10 py-4">
            <h1 className="fixed text-2xl top-1 z-[40] font-bold text-blue-600 border border-white  bg-white  w-full h-[60px]">
                Your Cart
            </h1>
            <div className="space-x-4 fixed top-1  right-10 z-[40]">
                    <button  className="  bg-blue-600  text-white px-4 py-2 rounded " onClick={()=>navigate("/Product")}>
                        Back to shop
                    </button>
            </div>        
            <div className=" absolute top-20 flex flex-wrap gap-6 px-10 py-6 bg-white text-blue-600 w-full z-[20]">
            {
                        products.map((i,index)=>{
                            return(
                                <div className="shadow p-4 rounded-lg  border border-gray-300 w-full space-y-4"  id={index}>
                                    <h className="font-bold text-gray-600">
                                        {i.productName.toUpperCase()}
                                    </h>
                                    <p className="text-gray-700"><span className="font-semibold">Price:</span> ₹{i.productPrice}</p>
                                    <p className="text-gray-600"><span className="font-semibold">Details:</span> {i.productInfo}</p>
                                    <button className="bg-blue-600 hover:bg-green-600 text-white px-4 py-2 rounded"  > <BsCartCheckFill />Buy</button>
                                    <button  onClick={()=>handleremove(i)} className="ml-5 bg-blue-600 hover:bg-red-600 text-white px-4 py-2 rounded"  > <MdOutlineRemoveShoppingCart />Remove</button>
                                 </div>
                            )
                        })
                    }
            </div>
        </div>
       
    )
}
export default CartPage