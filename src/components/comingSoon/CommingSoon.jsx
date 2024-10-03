import styles from './CommingSoon.module.css'

const CommingSoon = () => {
    return (
        <section id="coming-soon" className={styles['coming-soon']}>
            <h2>Smart Learn</h2>
            <h1>Learn Something <span>New</span> Today</h1>
            <button disabled>Coming Soon</button>
        </section>
    )
}

export default CommingSoon