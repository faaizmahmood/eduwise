/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import DashBoard from '../dashboard/DashBoard'
import Courses from '../courses/courses'
import CourseDetailPage from '../courseDetailPage/courseDetailPage'
import ExploreCourses from '../exploreCourses/exploreCourses'
import Quiz from '../quiz/quiz'
import Certificate from '../certificate/certificate'
import ReviewCourse from '../reviewCourse/reviewCourse'
import EnrollCourses from '../enrollCourses/enrollCourses'
import Notification from '../notification/notification'
import Profile from '../profile/profile'
import SavedCourses from '../savedCourses/savedCourses'
import Error from '../error/error'
import Setting from '../setting/setting'
import { useSelector } from 'react-redux'
import BecomeInstructor from '../becomeInstructor/becomeInstructor'
import InstructorsRequests from '../../admin/InstructorsRequests/InstructorsRequests'
import InstructorsRequestsDetails from '../../admin/InstructorsRequestsDetails/InstructorsRequestsDetails'
import AddCourses from '../Instructor/addCourses/addCourses'
import AddQuiz from '../Instructor/addQuiz/addQuiz'
import Drafts from '../Instructor/drafts/drafts'
import InstructorDashboard from '../Instructor/instructorDashboard/instructorDashboard'
import AdminDasboard from '../../admin/dashboard/adminDasboard'
import Users from '../../admin/users/users'
import InstructorProfile from '../instructorProfile/instructorProfile'
import ManageCourses from '../manageCourses/manageCourses'
import Analytics from '../analytics/InstructorAnalytics'


export const ProtectedRoutes = () => {

    const [isAdmin, setIsAdmin] = useState(false)

    const userMode = useSelector((state) => state.user_mode);

    const currentUser = useSelector((state) => state.set_up_user)

    useEffect(() => {
        if (
            currentUser?.email === "faizzafar44@gmail.com" ||
            currentUser?.email === "awaisamjad.official@gmail.com" ||
            currentUser?.email === "rafaqatsufyan1@gmail.com"
        ) {
            setIsAdmin(true);
        } else {
            setIsAdmin(false);
        }
    }, [currentUser]);


    return (
        <>
            <Routes>

                <Route path='/instructor/profile/:InstructorID' element={<InstructorProfile />} />

                {
                    isAdmin ? (
                        <>
                            <Route path='/' element={<AdminDasboard />} />
                            <Route path='/instructors-application' element={<InstructorsRequests />} />
                            <Route path='/instructors-application/:applicationID' element={<InstructorsRequestsDetails />} />
                            <Route path='/app-users' element={<Users />} />
                            <Route path='/admin-analytics' element={<Analytics />} />
                            <Route path='/setting' element={<Setting />} />
                        </>
                    ) : (
                        <>
                            {
                                userMode ? (
                                    <>
                                        <Route path='/' element={<InstructorDashboard />} />
                                        <Route path='/add-course' element={<AddCourses />} />
                                        <Route path='/add-course/add-quiz/:courseID' element={<AddQuiz />} />
                                        <Route path='/drafts' element={<Drafts />} />
                                        <Route path='/view-trends' element={"view Trends"} />
                                        <Route path='/manage-courses' element={<ManageCourses />} />
                                        <Route path='/instrcutor-analytics' element={<Analytics />} />
                                        <Route path='/profile' element={"Instructor Profile"} />
                                        <Route path='/notifications' element={<Notification />} />

                                    </>
                                ) : (
                                    <>
                                        <Route path='/' element={<DashBoard />} />
                                        <Route path='/me' element={"Profile Component Here..."} />
                                        <Route path='/my-courses' element={<Courses />} />
                                        <Route path='/announcement' element={"Announcement"} />
                                        <Route path='/explore-courses' element={<ExploreCourses />} />
                                        <Route path='/saved-courses' element={<SavedCourses />} />
                                        <Route path='/profile' element={<Profile />} />
                                        <Route path='/setting' element={<Setting />} />
                                        <Route path='/preference' element={<Navigate to='/' />} />
                                        <Route path='/quiz' element={<Navigate to='/explore-courses' />} />
                                        <Route path='/review-course' element={<Navigate to='/explore-courses' />} />
                                        <Route path='/review-course/:courseID' element={<ReviewCourse />} />
                                        <Route path='/all-certificate' element={<Certificate />} />
                                        <Route path='/quiz/:courseID' element={<Quiz />} />
                                        <Route path='/my-courses/:courseID' element={<CourseDetailPage />} />
                                        <Route path='/explore-courses/enroll-course/:courseID' element={<EnrollCourses />} />
                                        <Route path='/notifications' element={<Notification />} />
                                        <Route path='/become-instructor/form' element={<BecomeInstructor />} />

                                    </>
                                )
                            }
                        </>
                    )
                }




                <Route path='/auth/signin' element={<Navigate to='/' replace />} />
                <Route path='/auth/signup' element={<Navigate to='/' replace />} />
                <Route path='/auth/otp' element={<Navigate to='/' replace />} />

                <Route path='*' element={<Error />} />
            </Routes>
        </>
    )
}


