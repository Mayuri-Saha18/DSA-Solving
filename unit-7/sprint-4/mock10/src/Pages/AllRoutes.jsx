import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { Dashboard } from './Dashboard';
import { HomePage } from './HomePage';
import { Login } from './Login';
import { SignUp } from './SignUp';

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/dashboard' element={<Dashboard />} />
    </Routes>
  )
}


export default AllRoutes;
