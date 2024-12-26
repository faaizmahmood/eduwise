/* eslint-disable no-constant-condition */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import styles from './sidebar.module.scss'
import { Navigate, NavLink, useNavigate } from 'react-router-dom'
import useSidebar from './useSidebar'
import { useSelector } from 'react-redux'
import instructorImage from '../../../../public/images/side_bar_card.png'


// eslint-disable-next-line react/prop-types
const Sidebar = ({ toggleDrawer, drawer }) => {

  const userMode = useSelector((state) => state.user_mode);

  const side_bar_item_style = {
    padding: drawer ? "13px 20px" : '15px'
  }

  const [isAdmin, setIsAdmin] = useState(false)

  const currentUser = useSelector((state) => state.set_up_user)


  useEffect(() => {
    if (
      currentUser?.email === "faizzafar44@gmail.com" ||
      currentUser?.email === "awaisamjad.official@gmail.com" 
    ) {
      setIsAdmin(true);
    } else {
      setIsAdmin(false);
    }
  }, [currentUser]);


  return (
    <>
      <aside style={{ backgroundColor: '#FCEAEA', borderRadius: '16px', }} className={`p-3 ${styles.sidebar}`}>

        <nav>

          <div className={`${styles.drawer_icon} d-lg-block d-none`} onClick={toggleDrawer}>
            <i className="fa-regular fa-chevron-left"></i>
          </div>

          {
            drawer ? <h4 className='d-lg-block d-none'>EduWise </h4> : ""
          }


          <div className=''>

            {
              isAdmin ? (
                <>
                  <div className={`${styles.nav_item_list} ${drawer ? "" : styles.closed_drawer_nav_items} d-lg-block d-flex justify-content-between`}>

                    <NavLink to='/' style={side_bar_item_style} className={({ isActive }) => `${isActive ? styles.active_side_menu : ''} ${styles.side_bar_item} ${drawer ? "is" : ""}  d-lg-flex align-items-baseline mt-lg-4`}>
                      <i className="fa-sharp fa-regular fa-grid-horizontal"></i>
                      <h5 className='ms-1' style={{ display: drawer ? "" : "none" }}>Dashboard</h5>
                    </NavLink>

                    <NavLink to='/instructors-application' style={side_bar_item_style} className={({ isActive }) => `${isActive ? styles.active_side_menu : ''} ${styles.side_bar_item} d-flex align-items-baseline mt-lg-4`}>
                      <i className="fa-regular fa-book-open"></i>
                      <h5 className='ms-1' style={{ display: drawer ? "" : "none" }}>Application</h5>
                    </NavLink>

                    <NavLink to='/app-users' style={side_bar_item_style} className={({ isActive }) => `${isActive ? styles.active_side_menu : ''} ${styles.side_bar_item} d-flex align-items-baseline mt-lg-4`}>
                      <i className="fa-regular fa-users"></i>
                      <h5 className='ms-1' style={{ display: drawer ? "" : "none" }}>users</h5>
                    </NavLink>


                    <NavLink to='/admin-analytics' style={side_bar_item_style} className={({ isActive }) => `${isActive ? styles.active_side_menu : ''} ${styles.side_bar_item} d-flex align-items-baseline mt-lg-4`}>
                      <i className="fa-duotone fa-regular fa-chart-simple"></i>
                      <h5 className='ms-1' style={{ display: drawer ? "" : "none" }}>Analytics</h5>
                    </NavLink>

                    <NavLink to='/setting' style={side_bar_item_style} className={({ isActive }) => `${isActive ? styles.active_side_menu : ''} ${styles.side_bar_item} d-flex align-items-baseline mt-lg-4`}>
                      <i className="fa-regular fa-gear"></i>
                      <h5 className='ms-1' style={{ display: drawer ? "" : "none" }}>Setting</h5>
                    </NavLink>

                  </div>

                  {/* <div className={`${styles.side_bar_img} d-lg-block d-none`} style={{ display: drawer ? "" : "none" }}>
                    <img src={instructorImage} alt='...' className='' />
                  </div> */}


                </>
              ) : (
                <>
                  {
                    userMode ? (
                      <>
                        <div className={`${styles.nav_item_list} ${drawer ? "" : styles.closed_drawer_nav_items} d-lg-block d-flex justify-content-between`}>

                          <NavLink to='/' style={side_bar_item_style} className={({ isActive }) => `${isActive ? styles.active_side_menu : ''} ${styles.side_bar_item} ${drawer ? "is" : ""}  d-lg-flex align-items-baseline mt-lg-4`}>
                            <i className="fa-sharp fa-regular fa-grid-horizontal"></i>
                            <h5 className='ms-1' style={{ display: drawer ? "" : "none" }}>Dashboard</h5>
                          </NavLink>

                          <NavLink to='/add-course' style={side_bar_item_style} className={({ isActive }) => `${isActive ? styles.active_side_menu : ''} ${styles.side_bar_item} d-flex align-items-baseline mt-lg-4`}>
                            <i className="fa-regular fa-book-open"></i>
                            <h5 className='ms-1' style={{ display: drawer ? "" : "none" }}>Add Courses</h5>
                          </NavLink>

                          <NavLink to='/drafts' style={side_bar_item_style} className={({ isActive }) => `${isActive ? styles.active_side_menu : ''} ${styles.side_bar_item} d-flex align-items-baseline mt-lg-4`}>
                          <i className="fa-regular fa-pen-to-square"></i>
                            <h5 className='ms-1' style={{ display: drawer ? "" : "none" }}>Drafts</h5>
                          </NavLink>

                          <NavLink to='/manage-courses' style={side_bar_item_style} className={({ isActive }) => `${isActive ? styles.active_side_menu : ''} ${styles.side_bar_item} d-flex align-items-baseline mt-lg-4`}>
                            <i className="fa-sharp fa-regular fa-gear-complex-code"></i>
                            <h5 className='ms-1' style={{ display: drawer ? "" : "none" }}>Manage</h5>
                          </NavLink>


                          {/* <NavLink to='/view-trends' style={side_bar_item_style} className={({ isActive }) => `${isActive ? styles.active_side_menu : ''} ${styles.side_bar_item} d-flex align-items-baseline mt-lg-4`}>
                            <i className="fa-regular fa-chart-line-up"></i>
                            <h5 className='ms-1' style={{ display: drawer ? "" : "none" }}>view Trends</h5>
                          </NavLink>*/}

                          <NavLink to='/instrcutor-analytics' style={side_bar_item_style} className={({ isActive }) => `${isActive ? styles.active_side_menu : ''} ${styles.side_bar_item} d-flex align-items-baseline mt-lg-4`}>
                            <i className="fa-duotone fa-regular fa-chart-simple"></i>
                            <h5 className='ms-1' style={{ display: drawer ? "" : "none" }}>Analytics</h5>
                          </NavLink> 

                        </div>

                        {/* <div className={`${styles.side_bar_img} d-lg-block d-none`} style={{ display: drawer ? "" : "none" }}>
                          <img src={instructorImage} alt='...' className='' />
                        </div> */}


                      </>
                    ) : (
                      <>
                        <div className={`${styles.nav_item_list} ${drawer ? "" : styles.closed_drawer_nav_items} d-lg-block d-flex justify-content-between`}>

                          <NavLink to='/' style={side_bar_item_style} className={({ isActive }) => `${isActive ? styles.active_side_menu : ''} ${styles.side_bar_item} ${drawer ? "is" : ""}  d-lg-flex align-items-baseline mt-lg-4`}>
                            <i className="fa-sharp fa-regular fa-grid-horizontal"></i>
                            <h5 className='ms-1' style={{ display: drawer ? "" : "none" }}>Dashboard</h5>
                          </NavLink>

                          <NavLink to='/my-courses' style={side_bar_item_style} className={({ isActive }) => `${isActive ? styles.active_side_menu : ''} ${styles.side_bar_item} d-flex align-items-baseline mt-lg-4`}>
                            <i className="fa-regular fa-book-open"></i>
                            <h5 className='ms-1' style={{ display: drawer ? "" : "none" }}>My Courses</h5>
                          </NavLink>

                          <NavLink to='/explore-courses' style={side_bar_item_style} className={({ isActive }) => `${isActive ? styles.active_side_menu : ''} ${styles.side_bar_item} d-flex align-items-baseline mt-lg-4`}>
                            <i className="fa-regular fa-magnifying-glass"></i>
                            <h5 className='ms-1' style={{ display: drawer ? "" : "none" }}>Explore</h5>
                          </NavLink>


                          <NavLink to='/saved-courses' style={side_bar_item_style} className={({ isActive }) => `${isActive ? styles.active_side_menu : ''} ${styles.side_bar_item} d-flex align-items-baseline mt-lg-4`}>
                            <i className="fa-solid fa-bookmark"></i>
                            <h5 className='ms-1' style={{ display: drawer ? "" : "none" }}>Saved Courses</h5>
                          </NavLink>


                          <NavLink to='/all-certificate' style={side_bar_item_style} className={({ isActive }) => `${isActive ? styles.active_side_menu : ''} ${styles.side_bar_item} d-flex align-items-baseline mt-lg-4`}>
                            <i className="fa-regular fa-file-certificate"></i>
                            <h5 className='ms-1' style={{ display: drawer ? "" : "none" }}>Certificates</h5>
                          </NavLink>
                          {/* 
                          <NavLink to='/profile' style={side_bar_item_style} className={({ isActive }) => `${isActive ? styles.active_side_menu : ''} ${styles.side_bar_item} d-flex align-items-baseline mt-lg-4`}>
                            <i className="fa-regular fa-user"></i>
                            <h5 className='ms-1' style={{ display: drawer ? "" : "none" }}>Profile</h5>
                          </NavLink> */}

                          <NavLink to='/setting' style={side_bar_item_style} className={({ isActive }) => `${isActive ? styles.active_side_menu : ''} ${styles.side_bar_item} d-flex align-items-baseline mt-lg-4`}>
                            <i className="fa-regular fa-gear"></i>
                            <h5 className='ms-1' style={{ display: drawer ? "" : "none" }}>Setting</h5>
                          </NavLink>

                        </div>


                        <NavLink to='/become-instructor/form'><div className={`${styles.side_bar_img} d-lg-block d-none`} style={{ display: drawer ? "" : "none" }}>
                          <img src={instructorImage} alt='...' className='' />
                        </div>
                        </NavLink>
                      </>
                    )
                  }
                </>
              )
            }

          </div>

        </nav>

      </aside>
    </>
  )
}

export default Sidebar