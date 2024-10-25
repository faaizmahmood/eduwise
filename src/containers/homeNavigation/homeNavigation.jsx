

import { useNavigate } from 'react-router-dom'
import styles from './homeNaigation.module.scss'

function HomeNavigation() {

    const navigate = useNavigate()

    return (
        <>
            <div className={`${styles.home_navigation}`} onClick={() => navigate('/')}>
                <i className="fa-regular fa-house-user"></i>
            </div>
        </>
    )
}

export default HomeNavigation