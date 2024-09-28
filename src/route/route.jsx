import { Routes, Route } from 'react-router-dom';

import CommingSoon from '../components/comingSoon/CommingSoon';
import LandingPage from '../components/landingPage/landingPage';
import Signin from '../auth/signin/signin';
import Error from '../error/error';

const Router = () => {
    return (
        <>
            <Routes>

                <Route path="/" element={<CommingSoon />} />
                <Route path="/landing-page" element={<LandingPage />} />
                <Route path="/auth/signin" element={<Signin />} />
                <Route path="*" element={<Error />} />


            </Routes>
        </>
    )
}

export default Router