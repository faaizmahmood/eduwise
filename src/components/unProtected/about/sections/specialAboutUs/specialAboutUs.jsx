/* eslint-disable no-unused-vars */
import React from 'react'
import styles from './specialAboutUs.module.scss'

const SpecialAboutUs = () => {

  const card_content = [
    {
      title: "Who We Are",
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy ndisse suscipit sagittis leom dolor sit amet."
    },
    {
      title: "What We Do",
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy ndisse suscipit sagittis leom dolor sit amet."
    },
    {
      title: "Our Mission",
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy ndisse suscipit sagittis leom dolor sit amet."
    }
  ]

  return (
    <section className={`${styles.specialAboutUs} my-5`}>
      <div className='container'>

        <div className='text-center'>
          <h2>What Make Us Spcecial?</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisc ing elit.</p>
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