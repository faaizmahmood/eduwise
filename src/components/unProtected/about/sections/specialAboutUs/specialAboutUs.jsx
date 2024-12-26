/* eslint-disable no-unused-vars */
import React from 'react'
import styles from './specialAboutUs.module.scss'

const SpecialAboutUs = () => {

  const card_content = [
    {
      title: "Expert-Led Courses",
      description: "Learn from industry experts who bring real-world experience to every lesson, ensuring you gain practical and relevant knowledge."
    },
    {
      title: "Flexible Learning",
      description: "Access courses anytime, anywhere, and learn at your own pace, making education fit into your busy lifestyle."
    },
    {
      title: "Certified Success",
      description: "Receive recognized certificates that showcase your skills and open doors to new career opportunities."
    }
  ]

  return (
    <section className={`${styles.specialAboutUs} my-5`}>
      <div className='container'>

        <div className='text-center'>
          <h2>Why Choose Eduwise?</h2>
          <p>Eduwise is designed to offer an exceptional learning experience, with courses tailored to your needs and certifications that boost your career.</p>
        </div>

        <div className='row g-3 mt-3'>

          {
            card_content.map((ele, ind) => {
              return (
                <>
                  <div className={`${styles.card} col-md-4 col-12`}>
                    <img src={`../../../../../../public/images/make_special_img_${ind + 1}.png`} alt='make us special' className='img-fluid' />

                    <h3 className='mt-4'>{ele.title}</h3>
                    <p>{ele.description}</p>
                  </div>
                </>
              )
            })
          }

        </div>

      </div>
    </section>
  )
}

export default SpecialAboutUs