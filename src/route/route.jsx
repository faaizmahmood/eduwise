import { Routes, Route } from 'react-router-dom';

import LandingPage from '../components/unProtected/landingPage/LandingPage';
import Signin from '../auth/signin/signin';
import Signup from '../auth/signup/signup';
import Otp from '../auth/otp/otp';
import Instructor from '../components/unProtected/instructor/instructor'
import About from '../components/unProtected/about/about'
import Courses from '../components/unProtected/courses/courses';
import Error from '../components/unProtected/error/error';

const Router = () => {
    return (
        <>
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
        </>
    )
}

export default Router