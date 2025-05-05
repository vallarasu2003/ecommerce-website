import { BrowserRouter as Router, Route, Link, Routes, useNavigate } from 'react-router-dom';
import React, { useState } from "react"
import LoginPage from './form/Login';
import RegistrationPage from './form/Register';
import Productpage from './productpage/Products';
import CartPage from './cart/Cartpage';
import Addproduct from './form/Addproduct';
function App(){
    const[data,setdata]= useState({})
    return(

        <Router>
            <Routes>
                <Route path="/" element={<LoginPage set={setdata} />}/>
                <Route path="/Register" element={<RegistrationPage />}/>
                <Route path="/Product" element={<Productpage userid={data}/>}/>
                <Route path="/Cart" element={<CartPage/>}/>
                <Route path="/Addprod" element={<Addproduct/>}/>

            </Routes>
        </Router>
    )
}
export default App;