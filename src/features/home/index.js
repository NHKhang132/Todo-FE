import React from "react";
import { Routes, Route, Outlet } from 'react-router-dom';
import HomePage from "./page/homePage";

const IndexHome = () => {
    return (
        <Routes>
            <Route path = '/' element = {<HomePage/>} ></Route>
        </Routes>
    )
}

export default IndexHome;