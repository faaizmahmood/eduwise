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

        <Route path="/comming-soon" element={<CommingSoon />} />

        <Route path="/" element={<LandingPage />} />


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
