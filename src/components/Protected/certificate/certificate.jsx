/* eslint-disable no-unused-vars */
import React from 'react';
import InnerPageLoading from '../../../containers/pageLoading/InnerPageLoading/innerPageLoading';
import styles from './certificate.module.scss';
import useCertificate from './useCertificate';
import { NavLink } from 'react-router-dom';


const Certificate = () => {

  const { loading, certificateItems } = useCertificate()

  const convertDate = (isoDate) => {

    const date = new Date(isoDate);

    // Format the date
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = date.toLocaleDateString('en-US', options);

    return `${formattedDate}`

  }

  return (
    <>
      {loading ? (
        <InnerPageLoading />
      ) : (
        <section className={`${styles.certificate}`}>

          {
            certificateItems.length === 0 ? (
              <>
                <div className={`${styles.no_certificate}`}>
                  <h2>No Saved Courses :{")"}</h2>
                  <NavLink to="/explore-courses"><button className='mt-3'>Explore Courses</button></NavLink>
                </div>
              </>
            ) : (
              <>
                <div className='row'>

                  {
                    certificateItems?.slice().reverse().map((ele, ind) => {
                      return (
                        <>
                          <div className='col-lg-4 col-md-6 p-2' key={ind}>
                            <div className={`${styles.certificate_item}`}>

                              <div className={`${styles.certificate_head}`}>
                                <div className={`${styles.certificate_img}`} >
                                  <h1>{ele?.title || 'Course Title'}</h1>
                                  <p>Learning Path Completed by {ele?.student?.name || 'Recipient Name'}</p>
                                  {/* <p className="name">{certificateItem?.student?.name || 'Recipient Name'}</p> */}
                                  {/* <p>has successfully completed the course</p> */}
                                  {/* <p className="course-title">{certificateItem?.title || 'Course Title'}</p> */}
                                  <p className="issue-date">Date: {convertDate(ele?.issueDate || 'N/A')} - {ele?.course?.duration}</p>

                                  <p className='mt-3'>Top Skills Covered</p>

                                  <div className={`${styles.btn_group} d-flex justify-content-center mt-3`}>
                                    {
                                      ele.course?.tags?.map((ele, ind) => {
                                        return (
                                          <>
                                            <button key={ind}>{ele}</button>
                                          </>
                                        )
                                      })
                                    }
                                  </div>
                                </div>
                              </div>

                              <h2 className='mt-3'>{ele?.title}</h2>

                              <p>{convertDate(ele?.issueDate)}</p>

                              <a target='_blank' href={`https://certificate.eduwiseapp.tech/certificate/${ele?._id}`}><button>View Certificate</button></a>
                            </div>
                          </div>
                        </>
                      )
                    })
                  }

                </div>
              </>
            )
          }



        </section>
      )}
    </>
  );
};

export default Certificate;
