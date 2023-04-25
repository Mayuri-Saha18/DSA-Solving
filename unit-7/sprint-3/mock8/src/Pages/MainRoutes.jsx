import React from 'react'
import { Route, Routes } from 'react-router-dom';
import AdminLogin from './AdminLogin';
import { Dashboard } from './Dashboard';
import HomePage from './HomePage';
import SignIn from './SignIn';
import SignUp from './SignUp';
import { UserPage } from './UserPage';

const MainRoutes = () => {
  return (

    <Routes>

        <Route path='/' element={<HomePage />}/>
        <Route path='/adminlogin' element={<AdminLogin />}/>
        
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/movie' element={<UserPage />} />
        <Route path='signup' element={<SignUp />} />
        <Route path='signin' element={<SignIn />} />
        
    </Routes>

  )
}


export default MainRoutes;