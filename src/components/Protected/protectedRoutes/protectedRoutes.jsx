/* eslint-disable no-unused-vars */
import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import DashBoard from '../dashboard/DashBoard'
import Courses from '../courses/courses'
import CourseDetailPage from '../courseDetailPage/courseDetailPage'
import ExploreCourses from '../exploreCourses/exploreCourses'
import AddCourses from '../instructorRoutes/addCourses/addCourses'
import Quiz from '../quiz/quiz'
import Certificate from '../certificate/certificate'


export const ProtectedRoutes = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<DashBoard />} />
                <Route path='/me' element={"Profile Component Here..."} />
                <Route path='/my-courses' element={<Courses/>} />
                <Route path='/announcement' element={"Announcement"} />
                <Route path='/explore-courses' element={<ExploreCourses/>} />
                <Route path='/mentors' element={"Mentors"} />
                <Route path='/add-courses' element={<AddCourses/>} />
                <Route path='/progress' element={"Progress"} />
                <Route path='/setting' element={"Setting"} />
                <Route path='/preference' element={"preference"} />
                <Route path='/quiz' element={<Navigate to='/explore-courses'/>} />
                <Route path='/certificate' element={<Certificate/>} />
                <Route path='/quiz/:courseID' element={<Quiz/>} />
                <Route path='/courses/:courseID' element={<CourseDetailPage/>} />

                <Route path='/auth/signin' element={<Navigate to='/' replace />} />
                <Route path='/auth/signup' element={<Navigate to='/' replace />} />
                <Route path='/auth/otp' element={<Navigate to='/' replace />} />

                <Route path='*' element={"Error Content Here..."} />
            </Routes>
        </>
    )
}


