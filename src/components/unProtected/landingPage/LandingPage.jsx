import styles from './LandingPage.module.scss';
import Icon from '../../../containers/Icon';
import useLandingPage from './useLandingPage';
import { ClipLoader } from 'react-spinners';
import 'react-multi-carousel/lib/styles.css';
import TestimonialCard from './TestimonialCard';

// import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { NavLink } from 'react-router-dom';


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

  const { switchTab, active, buttons, loading, filteredCourses, pageLoading, categories, faqs, toggleFaq, faqVisibility, search_course, input, navigate_to_courses } = useLandingPage()


  const buttonStyle = {
    backgroundColor: 'white',
    boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
    color: '#0071DC'
  }

  const heroBg = {
    background: 'url(./images/hero-bg.png)',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
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



              {/* hero */}
              <form onSubmit={navigate_to_courses}>
              <section className={styles['hero']} style={heroBg}>

                <h1 className='mt-sm-0 mt-5'>Learn Something <span>New</span> Today</h1>

                <div className={styles['text-field']}>
                  <input
                    placeholder='What do you want to learn?'
                    name='search-box'
                    onChange={search_course}
                    value={input}
                  />
                  <i className="fa-thin fa-magnifying-glass" type='submit'></i>
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
              </form>
              {/* hero */}


              {/* categories */}

              <section className={`${styles.categories} mt-md-5 mt-2 pt-4`}>
                <h2 className='text-center'>Top Categories</h2>

                <div className='container'>

                  <div className={`${styles.categories_list} mt-md-5 mt-4`}>

                    {
                      categories.map((ele, ind) => {
                        return (
                          <>
                            <div className={`${styles.categories_item} d-flex align-items-center`} key={ind}>
                              <img src={ele.img} alt='...' className='img-fluid' />
                              <h5 className='mt-2 ms-3'>{ele.title}</h5>
                            </div>
                          </>
                        )
                      })
                    }

                  </div>

                </div>

              </section>

              {/* categories */}


              {/* courses */}

              <section className={`${styles.courses} pt-md-4 pt-0`}>
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
                  <NavLink to='/auth/signup'><button>Get Started</button></NavLink>
                  {/* <Popup trigger={<button> Get Started</button>} modal position="center center" style={{ backgroundColor: 'red' }}>
                    <div className={styles['popup']}>
                      <h1>Coming Soon!</h1>
                    </div>
                  </Popup> */}
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
              <section className='my-5'>

                <div className='container'>
                  <div className='row g-3'>
                    <div className='col-lg-6'>
                      <div className={`${styles.become_instructor} d-flex justify-content-between align-items-end`}>
                        <div className='p-4'>
                          <h3>Become An Instructor</h3>
                          <p>Top instructors from around the world teach millions of students on EduMall.</p>
                          <NavLink to='/auth/signup'><button>Start teaching today</button></NavLink>
                        </div>
                        <img src='./images/become-instructor.png' alt='...' className='d-sm-block d-none' />
                      </div>
                    </div>
                    <div className='col-lg-6'>
                      <div className={`${styles.become_student} d-flex justify-content-between align-items-end`}>
                        <div className='p-4'>
                          <h3>Transform Access To Education</h3>
                          <p>Create an account to receive our newsletter, course recommendations and promotions.</p>
                          <NavLink to='/auth/signup'><button>Register for free</button></NavLink>
                        </div>
                        <img src='./images/become-student.png' alt='...' className='d-sm-block d-none' />
                      </div>
                    </div>

                  </div>

                </div>
              </section>
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


              {/* FAQS */}

              <section className={styles['faq']}>
                <div className={`text-center ${styles.faq_content}`}>
                  <h5>FAQ’s</h5>
                  <h4>How may we help you?</h4>
                </div>

                <div className='container'>

                  {
                    faqs?.map((ele, ind) => {
                      const isOpen = faqVisibility[`faq${ind + 1}`];
                      return (
                        <div className={`${styles.faq_item} mt-4`} onClick={() => toggleFaq(ind)} style={{cursor:'pointer'}} key={ind}>
                          <div className='d-flex justify-content-between'>
                            <h6>{ele.question}</h6>
                            <i
                              className={`fa-sharp fa-regular ${isOpen ? "fa-chevron-down" : "fa-chevron-up"}`}
                              style={{ color: '#0071DC' }}

                            ></i>
                          </div>
                          <p
                            className={`m-0 faq-answer ${isOpen ? 'faq-answer-open' : ''}`}
                            style={{
                              display: isOpen ? 'block' : 'none',
                            }}
                          >
                            {ele.answer}
                          </p>
                        </div>
                      );
                    })
                  }



                </div>
              </section>

              {/* FAQS */}



            </main>
          </>
        )
      }

    </>
  );
}

export default LandingPage;
