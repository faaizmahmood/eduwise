import styles from './LandingPage.module.css';
import Icon from '../../containers/Icon';
import useLandingPage from './useLandingPage';
import { ClipLoader } from 'react-spinners';


// eslint-disable-next-line react/prop-types
const CardItems = ({ icon, title, subTitle, description }) => {
  return (
    <>
      <div className={styles['card-items']}>
        <Icon icon={icon} />
        <h2>{title}</h2>
        <h2>{subTitle}</h2>
        <p>{description}</p>
      </div>
    </>
  )
}
// buttton  
const renderButton = (ele) => {
  if (ele.level === "All Levels") {
    return <button disabled style={{ backgroundColor: '#DCF4F6', color: '#44D9E1' }}>{ele.level}</button>;
  } else if (ele.level === "Beginners") {
    return <button style={{ backgroundColor: '#E7E8FF', color: '#7A75FE' }}>{ele.level}</button>;
  } else if (ele.level === "Intermediate") {
    return <button style={{ backgroundColor: '#E9F5EC', color: '#93C795' }}>{ele.level}</button>;
  } else if (ele.level === "Advanced") {
    return <button style={{ backgroundColor: '#FFE0B2', color: '#FF9800' }}>{ele.level}</button>;
  } else {
    return <button>{ele.level}</button>; // Default case
  }
};

const LandingPage = () => {

  const { switchTab, active, buttons, loading, filteredCourses, pageLoading } = useLandingPage()


  const buttonStyle = {
    backgroundColor: 'white',
    boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
    color: '#0071DC'
  }

  return (
    <>

      {
        pageLoading ? (
          <>
            <div className={styles['page-loading']}>
              <ClipLoader color="#0071DC" />
            </div>
          </>
        ) : (
          <>
            <main id="landing-page" className={styles['landing-page']}>

              {/* header */}
              <div style={{ backgroundColor: '#f5f7fd' }}>
                <header className={`container py-3 d-flex justify-content-between align-items-center ${styles.header}`}>
                  <img src='./images/smart-learn-logo.png' alt='logo here' width={"200px"} />
                  <button>Get Started</button>
                </header>
              </div>
              {/* header */}

              {/* hero */}
              <section className={styles['hero']}>

                <h1>Learn Something <span>New</span> Today</h1>

                <div className={styles['text-field']}>
                  <input
                    placeholder='What do you want to learn?'
                    name='search-box'
                    value={""}
                  />
                  <i className="fa-thin fa-magnifying-glass"></i>
                </div>

                <div className={styles['hero-cards']}>
                  <CardItems
                    icon={'note'}
                    title={'6000+'}
                    subTitle={'Online Courses'}
                    description={'Explore wide-range of online courses'}
                  />
                  <CardItems
                    icon={'star'}
                    title={'Top'}
                    subTitle={'Instructors'}
                    description={'Learn from the best experts of the subjects'}
                  />
                  <CardItems
                    icon={'history'}
                    title={'Portable'}
                    subTitle={'Programs'}
                    description={'Allow you to learn anywhere, anytime'}
                  />
                </div>

              </section>
              {/* hero */}


              {/* courses */}

              <section className={styles['courses']}>
                <h2>Most Popular Courses</h2>

                <div className={`mt-3 ${styles.tabs}`}>
                  {
                    buttons.map((ele, ind) => {
                      return (
                        <>
                          <button style={active[`btn${ind + 1}`] ? buttonStyle : null} onClick={() => switchTab(ind + 1, ele)}>{ele}</button>
                        </>
                      )
                    })
                  }
                </div>

                <div className={`container ${styles.courses_list}`}>
                  {
                    loading ? (
                      <div className={styles['course-loading']}>
                        <ClipLoader color="#0071DC" />
                      </div>
                    ) : (
                      <>
                        {
                          filteredCourses.length !== 0 ? (
                            filteredCourses.map((ele, ind) => {
                              return (
                                <>
                                  <div className={styles['course-card']} key={ind}>
                                    <div className={`position-relative ${styles.course_card_head}`}>
                                      <img src={`./images/${ele.image}`} alt='course_thumbail_1' className='img-fluid' />
                                      <div className={styles['courses_card_btns']}>
                                        {
                                          ele.isFeatured ? <button disabled className={styles['courses_card_btn']} style={{ backgroundColor: '#D31819' }}>FEATURED</button> : ""
                                        }
                                        {
                                          ele.isFree ? <button disabled className={styles['courses_card_btn']} style={{ backgroundColor: '#6CBD7E' }}>FREE</button> : ""
                                        }
                                        {
                                          ele.discount === 0 ? "" : <button disabled className={styles['courses_card_btn']} style={{ backgroundColor: '#0071DC' }}>-{ele.discount}%</button>
                                        }
                                      </div>

                                    </div>
                                    <div className={`text-start ${styles.course_card_body}`}>
                                      {
                                        renderButton(ele)
                                      }
                                      <h3>{ele.description}</h3>
                                      <h4>{ele.instructor}</h4>
                                    </div>
                                  </div>
                                </>
                              )
                            })
                          ) : (
                            <>
                              <div className={styles['course-not-available']}>
                                <h2>Courses not available</h2>
                                <img src='./images/not_found_image.png' alt='Not found image...' width={'300px'} />
                              </div>
                            </>
                          )
                        }
                      </>
                    )


                  }
                </div>
              </section>

              {/* courses */}

              {/* Get Started */}

              <div className={styles['get-started']}>
                <div className={styles['get-started-1']}>
                  <h6>Let Us Help</h6>
                  <h5>Finding Your Right Courses</h5>
                </div>
                <div className={styles['get-started-1']}>
                  <button>Get Started</button>
                </div>
                <img src='./images/charge-img.png' alt='charge image' />
              </div>

              {/* Get Started */}

              {/* About */}
              <div className={styles['about']}>
                <div className='container'>
                  <div className='row align-items-center'>

                    <div className='col-4'>
                      <div className={styles['about-content']}>
                        <h5>START TO SUCCESS</h5>
                        <h4>Achieve Your Goals with EduMall</h4>
                      </div>
                    </div>

                    <div className='col-8'>
                      <div className='row'>
                        <div className='col-3'>
                          <div className={`text-center ${styles.about_card}`}>
                            <img src='./images/bulb.png' alt='bulb image' />
                            <h5 className='mt-3'>18,099</h5>
                            <p>Student Enrolled</p>
                          </div>
                        </div>
                        <div className='col-3'>
                          <div className={`text-center ${styles.about_card}`}>
                            <img src='./images/notes.png' alt='bulb image' />
                            <h5 className='mt-3'>18,099</h5>
                            <p>Student Enrolled</p>
                          </div>
                        </div>
                        <div className='col-3'>
                          <div className={`text-center ${styles.about_card}`}>
                            <img src='./images/graph.png' alt='bulb image' />
                            <h5 className='mt-3'>88%</h5>
                            <p>Learners report career benefits</p>
                          </div>
                        </div>
                        <div className='col-3'>
                          <div className={`text-center ${styles.about_card}`}>
                            <img src='./images/courses.png' alt='bulb image' />
                            <h5 className='mt-3'>4,038</h5>
                            <p>Courses from top instructors</p>
                          </div>
                        </div>
                      </div>
                    </div>


                  </div>
                </div>
              </div>
              {/* About */}

            </main>
          </>
        )
      }


    </>
  );
}

export default LandingPage;
