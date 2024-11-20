/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { ProtectedRoutes } from '../protectedRoutes/protectedRoutes'
import Sidebar from '../sidebar/sidebar'
import Header from '../header/header'
import Footer from '../footer/footer'
import styles from './protectedUI.module.scss'
import Preference from '../preference/preference'

const Layout = () => {


    const [drawer, setDrawer] = useState(true)

    const toggleDrawer = () => {
        setDrawer(!drawer)
    }

    const showPreference = false

    return (
        <>

            {
                showPreference ? <Preference /> : (
                    <>
                        <main style={{ display: 'flex', backgroundColor: '#FDFDFF', height: '100vh', }}>

                            <div style={{ height: '100vh', width: drawer ? '20vw' : '8vw', transition: 'all 0.5s' }} className={`p-3 ${styles.sidebar}`}>
                                <Sidebar toggleDrawer={toggleDrawer} drawer={drawer} />
                            </div>


                            <div className={`${styles.web_routing_area}`}>
                                <div style={{ width: drawer ? '78vw' : '90vw', transition: 'all 0.5s', }} className={`${styles.web_content}`}>
                                    <Header />
                                </div>
                                <div className={`${styles.web_content}`} style={{ width: drawer ? '78vw' : '90vw', transition: 'all 0.5s', }}>
                                    <ProtectedRoutes />
                                </div>
                                {/* <div style={{ width: drawer ? '80vw' : '90vw', transition: 'all 0.5s', backgroundColor: 'aqua' }} className={`${styles.web_content}`}>
<Footer />
</div> */}
                            </div>
                        </main>
                    </>
                )
            }
        </>
    )
}

export default Layout
