import { BrowserRouter as Router, Route, Link, Routes, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React, { useState } from "react"
import LoginPage from './form/Login';
import RegistrationPage from './form/Register';
import Productpage from './productpage/Products';
import CartPage from './cart/Cartpage';
import Addproduct from './form/Addproduct';
import Adminpage from './admin/Adminpage';
import Userlist from './admin/Userlist';
import Adduser from './form/Adduser';
function App(){
   
    return(

        <Router>
            <Routes>
                <Route path="/" element={<LoginPage  />}/>
                <Route path="/Register" element={<RegistrationPage />}/>
                <Route path="/Product" element={<Productpage />}/>
                <Route path="/Cart" element={<CartPage /> }/>
                <Route path="/Addprod" element={<Addproduct/>}/>
                <Route path="/Admin" element={<Adminpage />}/>
                <Route path="/Userlist" element={<Userlist />}/>
                <Route path="/Adduser" element={<Adduser />}/>

            </Routes>
            <ToastContainer position="bottom-right" autoClose={2000} />
        </Router>
    )
}
export default App;