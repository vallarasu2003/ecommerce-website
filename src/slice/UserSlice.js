import { createSlice } from "@reduxjs/toolkit";
const initialState ={
  userdata:{}
}
let UserSlice=createSlice({  
  name:"user",initialState,
  reducers: {
    setUser:(state,action)=>{
      state.userdata=action.payload
    }
  }
})
export const{setUser}=UserSlice.actions
export default UserSlice.reducer