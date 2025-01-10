/* eslint-disable no-constant-condition */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import styles from './header.module.scss'
import Icon from '../../../containers/Icon'
import pf_image from '../../../../public/images/profileImg.png'
import messageIcon from '../../../../public/icons/message.png'
import bellIcon from '../../../../public/icons/notification.png'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import useExploreCourses from '../exploreCourses/useExploreCourses';
import { handleSearchInput } from '../../../redux/actions';
import useHeader from './useHeader';
import Switch from '@mui/material/Switch';

const Header = () => {

  const currentUser = useSelector((state) => state.set_up_user)

  const Instructor = useSelector((state) => state.Instructor)

  const location = useLocation()

  const navigate = useNavigate()

  const dispatch = useDispatch();

  const { handelShowBox, showBox, logout, handleSwitch, checked, userMode } = useHeader()

  const label = { inputProps: { 'aria-label': 'Switch demo' } };

  const [isAdmin, setIsAdmin] = useState(false)

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
      <header className={styles['header']}>

        <div className='row align-items-center'>
          <div className='col-8'>
            <div className={styles['search-box']}>

              {
                isAdmin ? "" : (
                  <>
                    {
                      location.pathname === '/explore-courses' ? (
                        <>
                          <input type='text' placeholder='Search your course...' onChange={(e) => dispatch(handleSearchInput(e.target.value))} />
                        </>
                      ) : (
                        <>
                          <input type='text' placeholder='Search your course...' onChange={() => {
                            navigate(`/explore-courses`)
                          }} />
                        </>
                      )
                    }
                  </>
                )
              }



            </div>
          </div>

          <div className='col-4'>
            <div className={`${styles.profileSection}`}>
              <div className='row w-100'>
                <div className='col-6'>
                  <div className='row align-items-center'>
                    {/* <div className='col-6'>
                    <i className="fa-solid fa-file-certificate fa-2x"></i>
                    </div> */}
                    {/* <div className='col-12 text-center'>
                      <NavLink to="/notifications"><img src={bellIcon} /></NavLink>
                    </div> */}
                  </div>
                </div>
                <div className='col-6' style={{ borderLeft: '2px solid #A6A6A6' }}>
                  <div className='row'>
                    <div className={`col-12 ${styles.PImage}`}>
                      <div className='d-flex align-items-center gap-3' onClick={handelShowBox}>
                        <img src={currentUser?.profile_image || "https://eduwise-s3bucket.s3.eu-north-1.amazonaws.com/images/dummy_img.webp"} alt='User Image - Eduwise' />
                        <h3 className='d-md-block d-none'>{currentUser?.fName.slice(0, 5)}</h3>
                      </div>


                      {
                        showBox ? (
                          <>
                            <div className={`${styles.profileBox}`}>

                              <div className={`${styles.box_item} d-flex align-items-center gap-2`}>
                                <img src={currentUser?.profile_image || "https://eduwise-s3bucket.s3.eu-north-1.amazonaws.com/images/dummy_img.webp"} alt='User Image - Eduwise' />
                                <h3>{currentUser?.fName.slice(0, 5)}</h3>
                              </div>

                              {
                                isAdmin ? "" : (
                                  <>
                                    {
                                      Instructor?._id ? (
                                        <>
                                          <div className={`${styles.switch} ${styles.box_item} d-flex align-items-center justify-content-between`}>
                                            <h6>Switch Instructor</h6>
                                            <div>
                                              <Switch {...label} onChange={handleSwitch} checked={userMode}
                                                sx={{
                                                  "& .MuiSwitch-switchBase.Mui-checked": {
                                                    color: "#fff",
                                                  },
                                                  "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
                                                    backgroundColor: "#fff",
                                                    boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px"
                                                  },
                                                }}
                                              />
                                            </div>
                                          </div>
                                        </>
                                      ) : ""
                                    }

                                    <hr />

                                    <NavLink to={'/setting'}>
                                      <div className={`${styles.box_item} d-flex gap-2 mt-2`}>
                                        <i className="fa-regular fa-gear"></i>
                                        <h6>Setting</h6>
                                      </div>
                                    </NavLink>

                                    {
                                      Instructor?._id ? (
                                        ""
                                      ) : (
                                        <>
                                          <div className={`${styles.box_item} d-flex gap-2 mt-2`}>
                                            <i className="fa-regular fa-award"></i>
                                            <NavLink to='/become-instructor/form'> <h6>Become Instructor</h6></NavLink>
                                          </div>
                                        </>
                                      )
                                    }
                                  </>
                                )
                              }

                              <div className={`${styles.box_item} d-flex gap-2 mt-2`} onClick={logout}>
                                <i className="fa-regular fa-arrow-right-from-bracket"></i>
                                <h6>Logout</h6>
                              </div>

                            </div>
                          </>
                        ) : ""
                      }

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </header>
    </>
  )
}

export default Header