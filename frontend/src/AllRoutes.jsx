import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Signup from './components/Login/Signup';
import Login from './components/Login/Login';
import Tasks from './components/Todo/Tasks';
import Dashboard from './components/Dashboard';
import Calender1 from './components/Calender/Calender';

const AllRoutes = () => {
    return (
        <div>
            <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/dashboard' element={<Dashboard/>}/>
            <Route path='/tasks' element={<Tasks/>}/>
            <Route path='/calender' element={<Calender1/>}/>
            <Route path='/home' element={<Home/>}/>
        </Routes>
        </div>
    );
};

export default AllRoutes;