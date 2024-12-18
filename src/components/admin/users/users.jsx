
import { useState } from 'react'
import styles from './users.module.scss'
import { BeatLoader } from 'react-spinners'
import Students from './components/students/students'
import Instructor from './components/instructors/instructor'
import useUsers from './useUsers'

const Users = () => {

    const [userType, setUserType] = useState("users")

    const { loading } = useUsers()


    const handelChange = (e) => {
        setUserType(e.target.value)
    }

    return (
        <>

            <section className={`${styles.users}`}>

                <div className='text-end'>
                    <select onChange={handelChange}>
                        <option value="users">Users</option>
                        <option value="instructor">Instructor</option>
                    </select>
                </div>

                {
                    loading ? (
                        <>
                            <section className={`${styles.loading}`}>
                                <BeatLoader color='#0071DC' />
                            </section>
                        </>
                    ) : (
                        <>

                            {
                                userType === "users" ? (
                                    <>
                                        <Students />
                                    </>
                                ) : (
                                    <>
                                        <Instructor />
                                    </>
                                )
                            }
                        </>
                    )
                }


            </section>

        </>
    )
}


export default Users