import { BrowserRouter as Router, Route, Link, Routes, useNavigate } from 'react-router-dom';
import React, { useState } from "react"
import LoginPage from './form/Login';
import RegistrationPage from './form/Register';
import Productpage from './productpage/Products';
import CartPage from './cart/Cartpage';
import Addproduct from './form/Addproduct';
import Adminpage from './admin/Adminpage';
import Userlist from './admin/Userlist';
function App(){
    const[data,setdata]= useState({})
    return(

        <Router>
            <Routes>
                <Route path="/" element={<LoginPage set={setdata} />}/>
                <Route path="/Register" element={<RegistrationPage />}/>
                <Route path="/Product" element={<Productpage userid={data}/>}/>
                <Route path="/Cart" element={<CartPage userid={data}/> }/>
                <Route path="/Addprod" element={<Addproduct/>}/>
                <Route path="/Admin" element={<Adminpage />}/>
                <Route path="/Userlist" element={<Userlist />}/>

            </Routes>
        </Router>
    )
}
export default App;