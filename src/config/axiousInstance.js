import axios from "axios";

const URL = "http://localhost:3000";

const createUser = async (data) => {
  try {
    const response = await axios.post(`${URL}/users/add`, data);
    
  } catch (err) {
    throw err; 
  }
};

const login = async (data) => {
  try {
    const response = await axios.post(`${URL}/users/login`, data);
    return response.data
  } catch (err) {
    throw err; 
  }
};
const createproduct=async(data)=>{
    try{
        const response=await axios.post(`${URL}/products/add`,data);
    }
    catch(err){
        throw err;
    }
}
const fetchproductall =async()=>{
    try{
        const response=await axios.get(`${URL}/products/alls`);
        return response.data; 
    }
    catch(err){
        throw err;
    }
}
// const fetchuserall =async()=>{
//   try{
//       const response=await axios.get(`${URL}/users/all`);
//       return response.data; 
//   }
//   catch(err){
//       throw err;
//   }
// }
const updateproduct =async(data,id)=>{
  try{ 

    const response=await axios.put(`${URL}/products/update/${id}`,data);
    return response.data
  }
  catch(err){
    console.log(err)

  }
}


export { createUser, login ,createproduct,fetchproductall,updateproduct};