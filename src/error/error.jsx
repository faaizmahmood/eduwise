import styles from './error.module.scss'


const Error = () => {
    return (
        <>
            <div className={styles['container']}>
                <img src='/images/not_found_image.png' alt='Not found image...' width={'400px'} />
            </div>
        </>
    )
}

export default Error;