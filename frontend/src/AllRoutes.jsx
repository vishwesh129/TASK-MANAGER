import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Signup from './components/Login/Signup';
import Login from './components/Login/Login';
import Sidebar from './Pages/Sidebar';

const AllRoutes = () => {
    return (
        <div>
            <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/sidebar' element={<Sidebar/>}/>
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/login' element={<Login/>}/>
        </Routes>
        </div>
    );
};

export default AllRoutes;