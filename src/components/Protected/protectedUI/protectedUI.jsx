/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { ProtectedRoutes } from '../protectedRoutes/protectedRoutes'
import Sidebar from '../sidebar/sidebar'
import Header from '../header/header'
import Footer from '../footer/footer'

const Layout = () => {


    const [drawer, setDrawer] = useState(true)

    const toggleDrawer = () => {
        setDrawer(!drawer)
    }


    return (
        <>
            <main style={{ display: 'flex', backgroundColor:'#FDFDFF' }}>

                <div style={{ height: '100vh', width: drawer ? '20vw' : '8vw', transition:'all 0.5s' }} className='p-3'>
                    <Sidebar toggleDrawer={toggleDrawer} drawer={drawer}/>
                </div>
                

                <div>
                    <div style={{ width: '80vw', backgroundColor: 'aqua' }}>
                        <Header/>
                    </div>
                    <ProtectedRoutes />
                    <div style={{ width: '80vw', backgroundColor: 'aqua' }}>
                        <Footer/>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Layout
