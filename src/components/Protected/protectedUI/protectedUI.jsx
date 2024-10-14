/* eslint-disable no-unused-vars */
import React from 'react'
import { ProtectedRoutes } from '../protectedRoutes/protectedRoutes'
import Sidebar from '../sidebar/sidebar'
import Header from '../header/header'
import Footer from '../footer/footer'

const Layout = () => {
    return (

        <>
            <>
                <main style={{ display: 'flex' }}>
                    <div style={{ height: '100vh', width: '20vw' }} className='p-3'>
                        <Sidebar/>
                    </div>
                    <div>
                        <div style={{ width: '80vw', backgroundColor: 'aqua' }}>
                            <Header/>
                            {/* ... */}
                        </div>
                        <ProtectedRoutes />
                        <div style={{ width: '80vw', backgroundColor: 'aqua' }}>
                            <Footer/>
                        </div>
                    </div>
                </main>
            </>
        </>

    )
}

export default Layout