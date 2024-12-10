import { useEffect, useState } from "react"
import { toast } from "react-toastify"
import styles from './drafts.module.scss'
import { useSelector } from "react-redux"
import InnerPageLoading from "../../../../containers/pageLoading/InnerPageLoading/innerPageLoading"
import { useNavigate } from "react-router-dom"


const Drafts = () => {

    const [drafts, setDrafts] = useState([])

    const Instructor = useSelector((state) => state.Instructor)

    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()

    useEffect(() => {

        (async () => {

            setLoading(true)

            try {

                const response = await fetch(`https://eduwise-708c009023f3.herokuapp.com/api/course/drafts/${Instructor._id}`)

                if (response.ok) {
                    const draftsData = await response.json()

                    setDrafts(draftsData?.drafts)
                    setLoading(false)
                    return
                }

                toast.error('Error Whie Fetching Recored')
                setLoading(false)

            } catch (error) {
                setLoading(false)
                console.log(error)
                toast.error("Internal Server Error")
            }

        })()

    }, [])

    return (
        <>

            {
                loading ? (
                    <>
                        <InnerPageLoading />
                    </>
                ) : (
                    <>
                        {
                            drafts?.length === 0 ? (
                                <>
                                    <section className={`${styles.no_draft}`}>
                                        <h2>No Course in Draft :{")"}</h2>
                                    </section>
                                </>
                            ) : (
                                <>
                                    <section className={`${styles.drafts}`}>

                                        <div className="row">
                                            {
                                                drafts?.map((ele, ind) => (
                                                    <div className="col-lg-4 col-md-6 col-12 p-1" key={ind}>
                                                        <div className={styles.draftItem || 'draft-item'}>
                                                            <img src={ele?.thumbnail || 'placeholder.jpg'} alt={`Draft ${ind + 1}`} />

                                                            <h5>{ele?.title}</h5>

                                                            <p>Status: <i style={{ color: 'red' }}>Pending</i></p>

                                                            <button onClick={() => {
                                                                navigate(`/add-course/add-quiz/${ele?._id}`, { state: { title: ele?.title } });
                                                            }}>Add Quiz</button>

                                                        </div>
                                                    </div>
                                                ))
                                            }

                                        </div>

                                    </section>
                                </>
                            )
                        }
                    </>
                )
            }


        </>
    )

}


export default Drafts