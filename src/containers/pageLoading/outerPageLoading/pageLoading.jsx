
import { BarLoader } from "react-spinners"
import styles from './pageLoading.module.scss'



const PageLoading = () => {


    return (
        <>
            <div className={styles['page-loading']}>

                <h1>EduWise</h1>
                <p>Smart E-Learning Plate-Form</p>
                <div className="mt-2">
                    <BarLoader color="#0071DC" />
                </div>
            </div>
        </>
    )
}

export default PageLoading
