/* eslint-disable no-unused-vars */
import React from 'react'
import styles from './sidebar.module.scss'
import { NavLink } from 'react-router-dom'
import useSidebar from './useSidebar'

// eslint-disable-next-line react/prop-types
const Sidebar = ({toggleDrawer, drawer}) => {


  return (
    <>
      <aside style={{ backgroundColor: '#FCEAEA', borderRadius: '16px', height: '100%' }} className={`p-3 ${styles.sidebar}`}>

        <nav>

          <div className={`${styles.drawer_icon}`} onClick={toggleDrawer}>
            <i className="fa-regular fa-chevron-left"></i>
          </div>

          <h4 style={{ display: drawer ? "" : "none" }}>Logo Here </h4>

          <div>

            <div className={`${styles.nav_item_list} ${drawer ? "" : styles.closed_drawer_nav_items}`}>
              <NavLink to='/' className={({ isActive }) => `${isActive ? styles.active_side_menu : ''} ${styles.side_bar_item} ${drawer ? "is"}  d-flex mt-4`}>
                <i className="fa-sharp fa-regular fa-grid-horizontal"></i>
                <h5 className='ms-1' style={{ display: drawer ? "" : "none" }}>Dashboard</h5>
              </NavLink>
              <NavLink to='/my-courses' className={({ isActive }) => `${isActive ? styles.active_side_menu : ''} ${styles.side_bar_item} d-flex mt-4`}>
                <i className="fa-regular fa-book-open"></i>
                <h5 className='ms-1' style={{ display: drawer ? "" : "none" }}>My Courses</h5>
              </NavLink>
              <NavLink to='/announcement' className={({ isActive }) => `${isActive ? styles.active_side_menu : ''} ${styles.side_bar_item} d-flex mt-4`}>
                <i className="fa-regular fa-bullhorn"></i>
                <h5 className='ms-1' style={{ display: drawer ? "" : "none" }}>Announcement</h5>
              </NavLink>
              <NavLink to='/events' className={({ isActive }) => `${isActive ? styles.active_side_menu : ''} ${styles.side_bar_item} d-flex mt-4`}>
                <i className="fa-regular fa-list"></i>
                <h5 className='ms-1' style={{ display: drawer ? "" : "none" }}>Events</h5>
              </NavLink>
              <NavLink to='/mentors' className={({ isActive }) => `${isActive ? styles.active_side_menu : ''} ${styles.side_bar_item} d-flex mt-4`}>
                <i className="fa-sharp fa-regular fa-graduation-cap"></i>
                <h5 className='ms-1' style={{ display: drawer ? "" : "none" }}>Mentor</h5>
              </NavLink>
              <NavLink to='/progress' className={({ isActive }) => `${isActive ? styles.active_side_menu : ''} ${styles.side_bar_item} d-flex mt-4`}>
                <i className="fa-regular fa-chart-simple"></i>
                <h5 className='ms-1' style={{ display: drawer ? "" : "none" }}>Progress</h5>
              </NavLink>
              <NavLink to='/setting' className={({ isActive }) => `${isActive ? styles.active_side_menu : ''} ${styles.side_bar_item} d-flex mt-4`}>
                <i className="fa-regular fa-gear"></i>
                <h5 className='ms-1' style={{ display: drawer ? "" : "none" }}>Setting</h5>
              </NavLink>
            </div>

            <div className={`${styles.side_bar_img}`} style={{ display: drawer ? "" : "none" }}>
              <img src='./images/side_bar_card.png' alt='...' className='' />
            </div>

          </div>


        </nav>

      </aside>
    </>
  )
}

export default Sidebar