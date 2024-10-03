import { ToastContainer } from 'react-toastify';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import CommingSoon from './components/comingSoon/CommingSoon';
import LandingPage from './components/landingPage/LandingPage';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
      <Routes>
        {/* Render CommingSoon only for exact root path "/" */}
        <Route path="/" element={<CommingSoon />} />

        {/* Render LandingPage only for /landing-page */}
        <Route path="/landing-page" element={<LandingPage />} />


        <Route path="*" element={"<Error />"} />


      </Routes>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />
    </>
  );
}

export default App;
