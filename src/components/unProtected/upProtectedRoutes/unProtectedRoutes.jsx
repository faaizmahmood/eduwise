/* eslint-disable no-unused-vars */
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LandingPage from '../landingPage/LandingPage'
import Signin from '../../../auth/signin/signin'
import Signup from '../../../auth/signup/signup'
import Otp from '../../../auth/otp/otp'
import Instructor from '../instructor/instructor'
import About from '../about/about'
import Courses from '../courses/courses'
import Error from '../error/error'
import Header from '../header/header'
import Footer from '../footer/footer'

const UnProtectedRoutes = () => {
    return (

        <>
        <Header/>
            <Routes>

                <Route path="/" element={<LandingPage />} />
                <Route path="/auth/signin" element={<Signin />} />
                <Route path="/auth/signup" element={<Signup />} />
                <Route path="/auth/otp" element={<Otp />} />
                <Route path="/become-instructor" element={<Instructor />} />
                <Route path="/about" element={<About />} />
                <Route path="/courses" element={<Courses />} />
                <Route path="*" element={<Error />} />

            </Routes>
            <Footer/>
        </>

    )
}

export default UnProtectedRoutes