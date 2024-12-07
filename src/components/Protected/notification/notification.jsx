/* eslint-disable no-unused-vars */
import React from 'react'
import styles from './notification.module.scss'

const Notification = () => {
  return (
    <main className={`${styles.notification}`}>

<h2>Notifications</h2>

      {
        [...Array(10)].map((_, ind)=>{
            return(
                <>
                    <section className={`${styles.notification_item} mt-3`} key={ind}>
{ind + 1}
                    </section>
                </>
            )
        })
      }
    </main>
  )
}

export default Notification