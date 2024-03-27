import React from 'react'
import styles from './Hero.module.css'
import { FaGithub,FaLinkedinIn,FaFacebookF, } from 'react-icons/fa6'
import { TypeAnimation } from 'react-type-animation'
import { Tilt } from 'react-tilt'

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
                            ' : )',
                            'a DevOps engineer Intern : )',
                            1000,
                          ]}                         
                          speed={50}
                          repeat={Infinity}
                        />
                    </p>
                    <p className={styles.text_4}>Hello, I am a student who is seeking an
internship position in DevOps. <br /><br />
The reason I am interested in this position is
because I have a passion for Network,<br /><br />
Security, Operations and Cloud Computing. I
have a good understanding
of the fundamentals <br /><br /> in these areas and have
prepared myself with knowledge
of the tools used in this field. <br /><br /> I am someone
who is eager to learn new things and
constantly strive to improve myself every day. <br /><br />
If given the opportunity to work with your
organization, <br /><br /> I will demonstrate how much I
can grow and learn with my own efforts</p><br />
                    <p className={styles.text_1}>I look forward to talking with you soon.</p>
                    <ul className={styles.hero_social}>
                        <li><a href="https://github.com/PtrwTg"><FaGithub /></a></li>
                        <li><a href="https://www.linkedin.com/in/pattaravit-duangmark-a33114273/"><FaLinkedinIn /></a></li>
                        <li><a href="https://www.facebook.com/profile.php?id=100009995017635"><FaFacebookF /></a></li>
                    </ul>
    </div>
    <Tilt scale={1.2} transitionspeed={2500} tiltReverse={true}>
      <div className={styles.hero_img}></div>
      </Tilt>
    </div>
    </div>
    </div>
  )
}

export default Hero