/* eslint-disable no-unused-vars */
import React from 'react'
import styles from './sidebar.module.scss'
import { NavLink } from 'react-router-dom'
import useSidebar from './useSidebar'
import { useSelector } from 'react-redux'


// eslint-disable-next-line react/prop-types
const Sidebar = ({ toggleDrawer, drawer }) => {

  // const currentUser = useSelector((state)=> state.set_up_user)
  const currentUser = {
    role: 'instructor'
  }

  const side_bar_item_style = {
    padding: drawer ? "13px 20px" : '15px'
  }





  return (
    <>
      <aside style={{ backgroundColor: '#FCEAEA', borderRadius: '16px', height: '100%' }} className={`p-3 ${styles.sidebar}`}>

        <nav>

          <div className={`${styles.drawer_icon} d-lg-block d-none`} onClick={toggleDrawer}>
            <i className="fa-regular fa-chevron-left"></i>
          </div>

          {
            drawer ? <h4 className='d-lg-block d-none'>EduWise </h4> : ""
          }


          <div className=''>

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

              {currentUser.role === 'instructor' && (
                <NavLink to='/add-courses' style={side_bar_item_style} className={({ isActive }) => `${isActive ? styles.active_side_menu : ''} ${styles.side_bar_item} d-flex align-items-baseline mt-lg-4`}>
                  <i className="fa-regular fa-upload"></i>
                  <h5 className='ms-1' style={{ display: drawer ? "" : "none" }}>Add Courses</h5>
                </NavLink>
              )}

              <NavLink to='/mentors' style={side_bar_item_style} className={({ isActive }) => `${isActive ? styles.active_side_menu : ''} ${styles.side_bar_item} d-flex align-items-baseline mt-lg-4`}>
                <i className="fa-sharp fa-regular fa-graduation-cap"></i>
                <h5 className='ms-1' style={{ display: drawer ? "" : "none" }}>Mentor</h5>
              </NavLink>

              <NavLink to='/progress' style={side_bar_item_style} className={({ isActive }) => `${isActive ? styles.active_side_menu : ''} ${styles.side_bar_item} d-flex align-items-baseline mt-lg-4`}>
                <i className="fa-regular fa-chart-simple"></i>
                <h5 className='ms-1' style={{ display: drawer ? "" : "none" }}>Progress</h5>
              </NavLink>

              <NavLink to='/setting' style={side_bar_item_style} className={({ isActive }) => `${isActive ? styles.active_side_menu : ''} ${styles.side_bar_item} d-flex align-items-baseline mt-lg-4`}>
                <i className="fa-regular fa-gear"></i>
                <h5 className='ms-1' style={{ display: drawer ? "" : "none" }}>Setting</h5>
              </NavLink>

            </div>

            <div className={`${styles.side_bar_img} d-lg-block d-none`} style={{ display: drawer ? "" : "none" }}>
              <img src='../../../../public/images/side_bar_card.png' alt='...' className='' />
            </div>

          </div>

        </nav>

      </aside>
    </>
  )
}

export default Sidebar