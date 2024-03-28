import React from 'react'
import styles from './Portfolio.module.css'
import AI from './AIimg.png';
import Mobile from './mobileapp.jpg';
import Inform from './information.png';


function Portfolio() {
  return (
    <div className={styles.port_con}>
        <h3 className={styles.port_title}>My Projects</h3>
        <div className={styles.port_list}>
            <div className={styles.port_items}>
                <a href="https://github.com/PtrwTg/MainOurAi"><img src={AI} alt="" /></a>
                <p>Music genre classification with CNN</p>
            </div>
            <div className={styles.port_items}>
                <a href="https://github.com/PtrwTg/Musicgenre_mobile"><img src={Mobile} alt="" /></a>
                <p>Music genre Mobile application</p>
            </div>
            <div className={styles.port_items}>
                <a href="https://devops-resume.vercel.app/"><img src={Inform} alt="" /></a>
                <p>Information website</p>
            </div>
            
        </div>
    </div>
  )
}

export default Portfolio