import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import AdminLogin from './AdminLogin';

const HomePage = () => {
    const isAuth=useSelector((store)=>store.AuthReducer.isAuth);

    if(!isAuth){
        return <Navigate to="/adminlogin" />
    }

  return (
    <div>
        <Navbar />
    </div>
  )
}

export default HomePage;
