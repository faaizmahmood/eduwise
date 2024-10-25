/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import InnerPageLoading from '../../../containers/pageLoading/InnerPageLoading/innerPageLoading'

const DashBoard = () => {

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  })


  return (
    <>
      {
        loading ? (
          <>
            <InnerPageLoading />
          </>
        ) : (
          <>
            <h1>Dashboard</h1>
          </>
        )
      }
    </>
  )
}

export default DashBoard