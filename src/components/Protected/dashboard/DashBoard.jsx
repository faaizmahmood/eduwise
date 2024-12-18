/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import InnerPageLoading from '../../../containers/pageLoading/InnerPageLoading/innerPageLoading';
import Banner from './components/banner/banner';
import Sidebar from './components/sidebar/sidebar';
import styles from './Dashboard.module.scss';
import Activity from './components/activity/activity';
import Courses from './components/courses/courses';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';

const DashBoard = () => {

  const currentUser = useSelector((state) => state.set_up_user)

  const [loading, setLoading] = useState(true);

  const [progress, setProgress] = useState(null);

  useEffect(() => {
    const fetchProgress = async () => {
      try {
        setLoading(true);

        // Fetch the image from the API
        const response = await fetch(
          `https://eduwiseapp.awaisamjad.engineer/completeuserprogress/${currentUser?._id}`
        );

        if (!response.ok) {
          throw new Error('Failed to fetch progress');
        }

        const imageBlob = await response.blob(); // Convert response to Blob
        const imageUrl = URL.createObjectURL(imageBlob); // Create a URL for the Blob
        setProgress(imageUrl); // Set the image URL in state

        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.error(error);
      }
    };

    fetchProgress();
  }, []); // Empty dependency array to run effect once on mount

  return (
    <>
      {loading ? (
        <InnerPageLoading />
      ) : (
        <main className={`${styles.dashboard} p-lg-0 p-3`}>
          <div className="row">
            <div className={`col-lg-9 ${styles.main_content}`}>
              <Banner />
              <Activity />
              <div>
                {progress ? (
                  <img src={progress} alt="User progress" width={"100%"} height={300} />
                ) : (
                  <p>No progress to display</p>
                )}
              </div>
              <Courses />
            </div>
            <div className="col-3 d-lg-block d-none">
              <Sidebar />
            </div>
          </div>
        </main>
      )}
    </>
  );
};

export default DashBoard;
