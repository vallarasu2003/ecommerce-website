import { useNavigate } from "react-router-dom"

function Adminpage(){
    const navigate=useNavigate()
    return(
        <>
         <div className="space-x-4 fixed top-4  left-10 ">
    <button  className="  bg-blue-600 text-white px-4 py-2 rounded " onClick={()=>navigate("/Userlist")}>
                      Back
    </button>
  </div>
        <div className="flex justify-center items-center min-h-screen px-4">
            <form className="bg-white shadow rounded-xl p-8 w-full max-w-md border border-blue-200 space-y-6">
           <h1 className="text-center font-bold text-blue-700">Edit the user Access</h1>
           <div className="space-y-4">
           <lable className="block text-blue-700 mb-1 font-medium">
            User email :
           </lable>
           <input className="border border-gray rounded-md w-full p-2"/>
           <label className="block text-blue-700 mb-1 font-medium"> Password</label>
           <input className="border border-gray rounded-md w-full p-2"/>
           <label className="block text-blue-700 mb-1 font-medium">
            Role
           </label>
           <select name="role" id="role" className="border rounded-lg w-full p-2">
           <option value="User">User</option>
           <option value="Admin">Admin</option>
           <option value="company">company</option>
        </select>
           <button  className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md ">Update the Access</button>
           </div>
           </form>

        </div>
        </>
    )
}
export default Adminpage