import { NavLink } from "react-router-dom"
import styles from './header.module.scss'

const Header = () => {
    return (
        <>
            {/* header */}
            <div style={{ backgroundColor: '#f5f7fd' }}>
                <header className={`container py-3 d-flex justify-content-between align-items-center ${styles.header}`}>
                    <img src='./images/logo.png' alt='logo here' width={"35px"} />
                    <nav className={`${styles.navbar} mt-3 d-lg-block d-none`}>
                        <ul className='d-flex justify-content-center'>
                            {/* <a href='#' className={styles['active']}> <li>Home</li></a> */}
                            <NavLink to='/' className={({ isActive }) => isActive ? styles.active : ''}><li>Home</li></NavLink>
                            <NavLink to='/courses' className={({ isActive }) => isActive ? styles.active : ''}><li>Courses</li></NavLink>
                            <NavLink to='/about' className={({ isActive }) => isActive ? styles.active : ''}><li>About Us</li></NavLink>
                            <NavLink to='/become-instructor' className={({ isActive }) => isActive ? styles.active : ''}><li>Become an Instructor</li></NavLink>

                        </ul>
                    </nav>
                    <nav className={`${styles.navbar} mt-3 d-lg-none d-block`}>
                        <ul className='d-flex'>
                            {/* <a href='#' className={styles['active']}> <li>Home</li></a>
                      <a href='#'> <li>Courses</li></a>
                      <a href='#'> <li>About Us</li></a>
                      <a href='#'> <li>Become an Instructor</li></a> */}

                            <NavLink to='/' className={({ isActive }) => isActive ? `${styles.active_icon}` : ''}><i className="fa-regular fa-house"></i></NavLink>
                            <NavLink to='/courses' className={({ isActive }) => isActive ? `${styles.active_icon}` : ''}><i className="fa-regular fa-book-open-cover"></i></NavLink>
                            <NavLink to='/about' className={({ isActive }) => isActive ? `${styles.active_icon}` : ''}><i className="fa-regular fa-users"></i></NavLink>
                            <NavLink to='/become-instructor' className={({ isActive }) => isActive ? `${styles.active_icon}` : ''}><i className="fa-regular fa-chalkboard-user"></i></NavLink>


                        </ul>
                    </nav>

                    <div className={`${styles.nav_btns} d-flex`}>
                        {/* <NavLink to='/auth/signup'><button>Get Started</button></NavLink> */}
                        <NavLink to='/auth/signin' className={({isActive}) => isActive? `${styles.active}` : ""}> <p>Log in</p></NavLink>
                        <p>|</p>
                        <NavLink to='/auth/signup' className={({isActive}) => isActive? `${styles.active}` : ""}><p>Register</p></NavLink>
                    </div>

                    {/* <Popup trigger={<button> Get Started</button>} modal position="center center" style={{ backgroundColor: 'red' }}>
                    <div className={styles['popup']}>
                      <h1>Coming Soon!</h1>
                    </div>
                  </Popup> */}
                </header>
            </div>
            {/* header */}
        </>
    )
}

export default Header