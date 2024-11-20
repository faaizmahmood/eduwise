/* eslint-disable no-unused-vars */
import React from 'react';
import styles from './header.module.scss'
import Icon from '../../../containers/Icon'
import pf_image from '../../../../public/images/profileImg.png'
import messageIcon from '../../../../public/icons/message.png'
import bellIcon from '../../../../public/icons/notification.png'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import useExploreCourses from '../exploreCourses/useExploreCourses';
import { handleSearchInput } from '../../../redux/actions';

const Header = () => {

  const currentUser = useSelector((state) => state.set_up_user)

  const location = useLocation()

  const navigate = useNavigate()

  const dispatch = useDispatch();

  return (
    <>
      <header className={styles['header']}>

        <div className='row align-items-center'>
          <div className='col-8'>
            <div className={styles['search-box']}>

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

            </div>
          </div>

          <div className='col-4'>
            <div className={`${styles.profileSection}`}>
              <div className='row w-100'>
                <div className='col-6'>
                  <div className='row'>
                    <div className='col-6'>
                      <img src={messageIcon} className='Message Icon'/>
                    </div>
                    <div className='col-6'>
                      <img src={bellIcon} />
                    </div>
                  </div>
                </div>
                <div className='col-6' style={{ borderLeft: '2px solid #A6A6A6' }}>
                  <div className='row'>
                    <div className={`col-12 d-flex align-items-center gap-3 ${styles.PImage}`}>
                      <img src={pf_image} />
                      <h3>{currentUser?.fName}</h3>
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