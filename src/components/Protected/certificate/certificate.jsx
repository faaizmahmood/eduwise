/* eslint-disable no-unused-vars */
import React from 'react';
import InnerPageLoading from '../../../containers/pageLoading/InnerPageLoading/innerPageLoading';
import styles from './certificate.module.scss';
import useCertificate from './useCertificate';
import { NavLink } from 'react-router-dom';


const Certificate = () => {

  const { loading, certificateItems } = useCertificate()

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
                    certificateItems?.map((ele, ind) => {
                      return (
                        <>
                          <div className='col-4 p-2' key={ind}>
                            <div className={`${styles.certificate_item}`}>
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
