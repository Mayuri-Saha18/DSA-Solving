import React from 'react'
import { Route, Routes } from 'react-router-dom'
import {HomePage} from "../Pages/HomePage"
import {Signup} from "../Pages/Signup"
import {Login} from "../Pages/Login"

export const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/login' element={<Login />} />
        </Routes>
    </div>
  )
}
