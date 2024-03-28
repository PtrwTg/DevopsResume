import React from 'react'
import styles from './Hero.module.css'
import { FaGithub,FaLinkedinIn,FaFacebookF, } from 'react-icons/fa6'
import { TypeAnimation } from 'react-type-animation'

function Hero() {
  return (
    <div className={styles.hero_wrapper}>
        <div className={styles.container}>
            <div className={styles.hero_con}>
                <div className={styles.hero_info}>
                    <h3 className={styles.text_2}>Pattarawit Duangmak</h3>
                    <br />
                    <p className={styles.text_3}>
                       <span style={{ marginRight: '10px'}}>I want to be</span> 
                        <TypeAnimation
                          sequence={[
                            'a Intern',
                            'a DevOps Engineer Intern ',
                            2000,
                          ]}                         
                          speed={5}
                          repeat={Infinity}
                        />
                    </p>
                    <p className={styles.text_1}><br />To Whom It May Concern, Hiring Manager</p>
                    <p className={styles.text_4}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I'm writing this website to say how interested I am about DevOps Engineer Intern role. <br />

I have developed a variety of abilities during my time in college. I have produced an Android <br />
application  that enables users to test machine learning models that I have developed for the  <br /> purpose   of identifying music genres. I also have experience creating information-sharing  <br /> websites and am quite skilled at creating web and mobile applications. <br /> <br /> 

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I am sure that my experience and skills will be a huge asset to the DevOps Engineer  <br /> position , and I am excited about the chance to join your team.
Do not hesitate to get in <br /> touch with me  if you think that my skills meet the requirements of your company.  <br />  I appreciate your attention in advance.</p>
                    <p className={styles.text_1}> <br />Regards, <br /> Pattarawit D. (Tiger)</p>
                    <ul className={styles.hero_social}>
                        <li><a href="https://github.com/PtrwTg"><FaGithub /></a></li>
                        <li><a href="https://www.linkedin.com/in/pattaravit-duangmark-a33114273/"><FaLinkedinIn /></a></li>
                        <li><a href="https://www.facebook.com/profile.php?id=100009995017635"><FaFacebookF /></a></li>
                    </ul>
    </div>
      <div className={styles.hero_img}></div>
    </div>
    </div>
    </div>
  )
}

export default Hero