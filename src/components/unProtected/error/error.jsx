import { useEffect, useState } from 'react';
import styles from './error.module.scss'
import { ClipLoader } from 'react-spinners';
import Header from '../header/header';
import Footer from '../footer/footer';


const Error = () => {

    const [loading, setLoading] = useState(false)

    useEffect(() => {

        setLoading(true)

        setTimeout(() => {
            setLoading(false)
        }, 2000);

    }, [])

    return (
        <>
            {
                loading ? (
                    <>
                        <div className={styles['page-loading']}>
                            <ClipLoader color="#0071DC" />
                        </div>
                    </>
                ) : (
                    <>
                    <Header/>
                        <div className={styles['container']}>
                            <img src='/images/not_found_image.png' alt='Not found image...' width={'400px'} />
                        </div>
                    </>
                )
            }

            <Footer/>
        </>
    )
}

export default Error;