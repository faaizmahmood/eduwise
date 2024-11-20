import { BarLoader } from "react-spinners"
import styles from './innerPageLoading.module.scss'

const InnerPageLoading = () => {
  return (
    
    <>
    <div className={styles['page-loading']}>

        {/* <h1>EduWise</h1>
        <p>Smart E-Learning Plate-Form</p> */}
        <div className="mt-2">
            <BarLoader color="#0071DC" />
        </div>
    </div>
</>

  )
}

export default InnerPageLoading