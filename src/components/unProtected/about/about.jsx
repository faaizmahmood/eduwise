import React from 'react';
import styles from './about.module.scss'; // Ensure this path is correct
import useAbout from './useAbout.js';
import { ClipLoader } from 'react-spinners';
import Header from '../header/header.jsx';
import Footer from '../footer/footer.jsx';
const About = () => {
  const { loading } = useAbout();

  return (
    <>
      <Header />
      {loading ? (
        <div className={styles['page-loading']}>
          <ClipLoader color="#0071DC" />
        </div>
      ) : (
        <>
          {/* New Section for Start to Success */}
          <section className={styles['first-section']}></section>
          
          {/* New Section */}
          <section className={styles['content']}>
            <div className={styles['start-to-success']}>Start to Success</div>
            <div className={styles['Leading-Global']}>The Leading Global Marketplace for Learning and Instruction</div>
            <div className={styles['subheading']}>
              Neque convallis a cras semper auctor. Libero id faucibus nisl tincidunt eget.
            </div>
          </section>

          {/* New Section */}
          <div style={{ width: '1520px', height: '326px', background: 'linear-gradient(166deg, rgba(251.81, 233.98, 233.98, 0.48) 0%, rgba(241, 243, 248, 0.52) 100%)', }}>
    <div className={styles['container1']}>
        {[
            { years: '15', text: 'Years of Language Education Experience', imgSrc: 'src/components/unProtected/about/10008 26.png' },
            { years: '253,085', text: 'Learners Enrolled in EduMall Courses', imgSrc: 'src/components/unProtected/about/10006 6.png' },
            { years: '135', text: 'Qualified teachers and language experts', imgSrc: 'src/components/unProtected/about/10003 2.png' },
            { years: '2,500+', text: 'Innovative Foreign Language Courses', imgSrc: 'src/components/unProtected/about/10007 6.png' }
        ].map((item, index) => (
            <div key={index} className={styles['box1']}>
                <img className={styles['image']} src={item.imgSrc} alt={`Image for ${item.text}`} />
                <div className={styles['con-h1']}>{item.years}</div>
                <div className={styles['con-p']} style={{ marginBottom: '80px' }}>
                    {item.text}
                </div>
            </div>
        ))}
    </div>
    
</div>


          {/* New Section */}
          <section className={styles['content']}>
            <div className={styles['Leading-Global1']}>What Makes Us Special?</div>
            <div className={styles['subheading']}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
            <div className={styles['container']}>
              {[...Array(3)].map((_, index) => (
                <div key={index} className={styles['box']}>
                  <img className={styles['image']} src="src\components\unProtected\about\Rectangle 34630008.png" alt="Placeholder" />
                  <div className={styles['con-h1']}>Who We Are</div>
                  <div className={styles['con-p']} style={{ marginBottom: '80px' }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy ndisse suscipit sagittis leom dolor sit amet.
                  </div>
                </div>
              ))}
            </div>
          </section>
          {/* New Section */}
          <section>
          <div className={styles['Leading-Global1']} style={{ marginTop: '80px' }}>What Makes Us Special?</div>   
          <div className={styles['subheading']}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
          </section>
          {/* New Section for Images */}
          <section className={styles['content']}>
            {/* First Row of Images */}
            <div className={styles['image-row']}>
              <img
                style={{ width: '450px', height: '397px', margin: '0 20px', borderRadius: '10px' }}
                src="src\components\unProtected\about\Rectangle 34630015.png"
                alt="Image 1"
              />
              <img
                style={{ width: '930px', height: '397px', margin: '0 20px', borderRadius: '10px' }}
                src="src\components\unProtected\about\Rectangle 34630013.png"
                alt="Image 2"
              />
            </div>
            {/* Second Row of Images */}
            <div className={styles['image-row']}>
              <img
                style={{ width: '690px', height: '367px', margin: '0 20px', borderRadius: '10px' }}
                src="src\components\unProtected\about\Rectangle 34630017.png"
                alt="Image 3"
              />
              <img
                style={{ width: '690px', height: '367px', margin: '0 20px', borderRadius: '10px' }}
                src="src\components\unProtected\about\Rectangle 34630008.png"
                alt="Image 4"
              />
            </div>
          </section>
          <div className={styles['button-container']}>
              <div className={styles['button']}>
                Join Our Team
              </div>
            </div>
          <div >

</div>


        </>
      )}
      <Footer />
    </>
  );
};

export default About;