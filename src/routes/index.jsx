import React from "react";
import  Home  from "../pages/Home";
import {
    BrowserRouter,
    Routes,
    Route
}from "react-router-dom"
import  Header  from "../components/Header";
import Footer from "../components/Footer";
import Error from "../pages/Error";
import Imobi from "../pages/Imobi";
import Login from "../pages/Login";
import Cadastro from "../pages/Cadastro";
import Perfil from "../pages/Perfil";

const RouterApp = ()=>{
    return(
        <BrowserRouter>
        <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/imovel" element={<Imobi/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/cadastro" element={<Cadastro/>}/>
                <Route path="/perfil" element={<Perfil/>}/>
                <Route path="*" element={<Error/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    )
}

export default RouterApp;