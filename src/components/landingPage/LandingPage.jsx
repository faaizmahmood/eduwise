import styles from './LandingPage.module.scss';
import Icon from '../../containers/Icon';
import useLandingPage from './useLandingPage';
import { ClipLoader } from 'react-spinners';
import 'react-multi-carousel/lib/styles.css';
import TestimonialCard from './TestimonialCard';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';


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
    return <button>{ele.level}</button>;
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
                  {/* <button>Get Started</button> */}
                  <Popup trigger={<button> Get Started</button>} modal position="center center" style={{ backgroundColor: 'red' }}>
                    <div className={styles['popup']}>
                      <h1>Coming Soon!</h1>
                    </div>
                  </Popup>
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

              <section className={styles['get-started']}>
                <div className={styles['get-started-1']}>
                  <h6>Let Us Help</h6>
                  <h5>Finding Your Right Courses</h5>
                </div>
                <div className={styles['get-started-1']}>
                  {/* <button>Get Started</button> */}
                  <Popup trigger={<button> Get Started</button>} modal position="center center" style={{ backgroundColor: 'red' }}>
                    <div className={styles['popup']}>
                      <h1>Coming Soon!</h1>
                    </div>
                  </Popup>
                </div>
                <img src='./images/charge-img.png' alt='charge image' />
              </section>

              {/* Get Started */}

              {/* About */}
              <section className={styles['about']}>
                <div className='container'>
                  <div className='row align-items-center'>

                    <div className='col-lg-4 col-12'>
                      <div className={`text-lg-start text-center ${styles.about_content}`}>
                        <h5>START TO SUCCESS</h5>
                        <h4>Achieve Your Goals with EduMall</h4>
                      </div>
                    </div>

                    <div className='col-lg-8 col-12 mt-lg-0 mt-5'>
                      <div className='row'>
                        <div className='col-sm-3 col-6'>
                          <div className={`text-center ${styles.about_card}`}>
                            <img src='./images/bulb.png' alt='bulb image' />
                            <h5 className='mt-3'>18,099</h5>
                            <p>Student Enrolled</p>
                          </div>
                        </div>
                        <div className='col-sm-3 col-6'>
                          <div className={`text-center ${styles.about_card}`}>
                            <img src='./images/notes.png' alt='bulb image' />
                            <h5 className='mt-3'>18,099</h5>
                            <p>Student Enrolled</p>
                          </div>
                        </div>
                        <div className='col-sm-3 col-6'>
                          <div className={`text-center ${styles.about_card}`}>
                            <img src='./images/graph.png' alt='bulb image' />
                            <h5 className='mt-3'>88%</h5>
                            <p>Learners report career benefits</p>
                          </div>
                        </div>
                        <div className='col-sm-3 col-6'>
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
              </section>
              {/* About */}

              {/* New Section Here */}
              <sections>
                <h1 className='my-5 text-center text-decoration-underline'>New Section Here</h1>
              </sections>
              {/* New Section Here */}

              {/* TESTIMONIALS */}

              <section className={styles['testimonial']}>
                <div className={`text-center ${styles.testimonial_content}`}>
                  <h5>TESTIMONIALS</h5>
                  <h4>See What Our Students Have To Say</h4>
                </div>

                <div className='container'>
                  <div className={`mt-4 ${styles.testimonial_slider}`}>
                    <TestimonialCard
                      title='Code Quality'
                      description='ThemeMove deserves 5 star for theme’s features, design quality, flexibility, and support service!'
                      name='Madley Pondor'
                      position='/ Reporter, San Diego'
                      img='./images/test_img_1.png'
                    />
                    <TestimonialCard
                      title='Code Quality'
                      description='ThemeMove deserves 5 star for theme’s features, design quality, flexibility, and support service!'
                      name='Madley Pondor'
                      position='/ Reporter, San Diego'
                      img='./images/test_img_2.png'
                    />
                    <TestimonialCard
                      title='Code Quality'
                      description='ThemeMove deserves 5 star for theme’s features, design quality, flexibility, and support service!'
                      name='Madley Pondor'
                      position='/ Reporter, San Diego'
                      img='./images/test_img_3.png'
                    />
                    <TestimonialCard
                      title='Code Quality'
                      description='ThemeMove deserves 5 star for theme’s features, design quality, flexibility, and support service!'
                      name='Madley Pondor'
                      position='/ Reporter, San Diego'
                      img='./images/test_img_4.png'
                    />

                  </div>
                </div>
              </section>

              {/* TESTIMONIALS */}

              {/* Footer */}
              <footer className={`pb-2 pt-5 px-sm-0 px-2 ${styles.footer}`}>
                <div className='container pt-3'>
                  <div className="row justify-content-center">
                    <div className="col-lg-3 col-sm-6 mt-sm-0 mt-4">
                      <h5>Logo Here</h5>
                      <p>ThemeMove deserves 5 star for themes features, design quality, flexibility and support service!</p>
                    </div>

                    <div className="col-lg-3 col-sm-6 mt-sm-0 mt-4">
                      <h5>Quick Links</h5>
                      <ul className="list-unstyled mt-3">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Courses</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Features</a></li>
                        <li><a href="#">Become an Instructor</a></li>
                      </ul>
                    </div>

                    <div className="col-lg-3 col-sm-6 mt-sm-0 mt-4">
                      <h5>Social Media</h5>
                      <ul className="list-unstyled mt-3">
                        <li className='my-2'><a href="#"><Icon icon={'Twitter'} /> <span className='ms-2'>Twitter</span></a></li>
                        <li className='my-2'><a href="#"><Icon icon={'Youtube'} /> <span className='ms-2'>YouTube</span></a></li>
                        <li className='my-2'><a href="#"><Icon icon={'Linkedin'} /> <span className='ms-2'>LinkedIn</span></a></li>
                        <li className='my-2'><a href="#"><Icon icon={'Facebook'} /> <span className='ms-2'>Facebook</span></a></li>
                      </ul>
                    </div>

                    <div className="col-lg-3 col-sm-6 mt-sm-0 mt-4">
                      <h5>Contact Us</h5>
                      <ul className="list-unstyled">
                        <li className='my-2'><a href="#"><Icon icon={'call'} /> <span className='ms-2'>(+88) 1990 6886</span></a></li>
                        <li className='my-2'><a href="#"><Icon icon={'mail'} /> <span className='ms-2'> agency@gmail.com</span></a></li>
                        <li className='my-2'><a href="#"><Icon icon={'address'} /> <span className='ms-2'> 5th Street, 21st Floor, New York, USA</span></a></li>
                      </ul>
                    </div>
                  </div>
                  <hr />
                  <div className='d-flex flex-sm-row flex-column justify-content-sm-between text-md-start text-center'>
                    <p>Copyright 2024 All Rights Reserved</p>
                    <p>Privacy Policy</p>
                  </div>
                </div>
              </footer>
              {/* Footer */}


            </main>
          </>
        )
      }


    </>
  );
}

export default LandingPage;
