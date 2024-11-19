/* eslint-disable no-unused-vars */
import React from 'react';
import InnerPageLoading from '../../../containers/pageLoading/InnerPageLoading/innerPageLoading';
import styles from './certificate.module.scss';
import useCertificate from './useCertificate';


const Certificate = () => {
  
const {loading, certificateRef, downloadPDF} = useCertificate()

  return (
    <>
      {loading ? (
        <InnerPageLoading />
      ) : (
        <section className={`${styles.certificate}`}>
          <div ref={certificateRef} className={styles.pmCertificateContainer}>
            <div className={styles.outerBorder}></div>
            <div className={styles.innerBorder}></div>

            <div className={styles.pmCertificateBorder}>
              <div className={styles.pmCertificateHeader}>
                <div className={`${styles.pmCertificateTitle} text-center`}>
                  <h2>Buffalo Public Schools Certificate of Completion</h2>
                </div>
              </div>

              <div className={styles.pmCertificateBody}>
                <div className={styles.pmCertificateBlock}>
                  <div>
                    <div className="row">
                      <div className="col-xs-2"></div>
                      <div className={`${styles.pmNameText} ${styles.underline} col-xs-8 text-center`}>
                        <span className={styles.bold}>TrueNorth Administrator</span>
                      </div>
                      <div className="col-xs-2"></div>
                    </div>
                  </div>

                  <div>
                    <div className="row">
                      <div className="col-xs-2"></div>
                      <div className="col-xs-8 text-center">
                        <span className={`${styles.pmEarnedText} ${styles.block} ${styles.cursive}`}>
                          has earned
                        </span>
                        <span className={`${styles.pmCreditsText} ${styles.block} ${styles.bold} ${styles.sans}`}>
                          PD175: 1.0 Credit Hours
                        </span>
                      </div>
                      <div className="col-xs-2"></div>
                    </div>
                  </div>

                  <div>
                    <div className="row">
                      <div className="col-xs-2"></div>
                      <div className={`${styles.pmCourseTitle} col-xs-8 text-center`}>
                        <span className={`${styles.pmEarnedText} ${styles.block} ${styles.cursive}`}>
                          while completing the training course entitled
                        </span>
                      </div>
                      <div className="col-xs-2"></div>
                    </div>
                  </div>

                  <div>
                    <div className="row">
                      <div className="col-xs-2"></div>
                      <div className={`${styles.pmCourseTitle} ${styles.underline} col-xs-8 text-center`}>
                        <span className={`${styles.pmCreditsText} ${styles.block} ${styles.bold} ${styles.sans}`}>
                          BPS PGS Initial PLO for Principals at Cluster Meetings
                        </span>
                      </div>
                      <div className="col-xs-2"></div>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="row">
                    <div className={styles.pmCertificateFooter}>
                      <div className="col-xs-4 text-center">
                        <span className={`${styles.pmCreditsText} ${styles.block} ${styles.sans}`}>
                          Buffalo City School District
                        </span>
                        <span className={`${styles.pmEmptySpace} ${styles.underline}`}></span>
                        <span className={styles.bold}>
                          Crystal Benton Instructional Specialist II, Staff Development
                        </span>
                      </div>
                      <div className="col-xs-4"></div>
                      <div className="col-xs-4 text-center">
                        <span className={`${styles.pmCreditsText} ${styles.block} ${styles.sans}`}>
                          Date Completed
                        </span>
                        <span className={`${styles.pmEmptySpace} ${styles.underline}`}></span>
                        <span className={styles.bold}>DOB:</span>
                        <span className={styles.bold}>Social Security # (last 4 digits)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <button onClick={downloadPDF} className={styles.downloadButton}>
            Download as PDF
          </button>
        </section>
      )}
    </>
  );
};

export default Certificate;
