/* eslint-disable no-unused-vars */
import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import DashBoard from '../dashboard/DashBoard'

export const ProtectedRoutes = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<DashBoard />} />
                <Route path='/me' element={"Profile Component Here..."} />

                <Route path='/auth/signin' element={<Navigate to='/' replace />} />
                <Route path='/auth/signup' element={<Navigate to='/' replace />} />
                <Route path='/auth/otp' element={<Navigate to='/' replace />} />

                <Route path='*' element={"Error Content Here..."} />
            </Routes>
        </>
    )
}


