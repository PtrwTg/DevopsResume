//Services.jsx 
import React from 'react'
import styles from './Services.module.css'
import { FaCode, FaLaptopCode, FaCloud, FaPython , FaGolang ,FaJava , FaReact ,FaNode ,FaAws,FaGoogle } from 'react-icons/fa6'
import { MdWeb } from "react-icons/md";
import { SiDart , SiFlutter} from "react-icons/si";
function Services() {
  return (
    <div className={styles.services_con}>
        <h3 className={styles.services_title}>Other Skills</h3>
        <div className={styles.services_list}>
            <div className={styles.services_items}>
                <FaCode />
                <h4>Languages</h4>
                <p style={{ position: 'relative' }}>
                    <span className={styles.skill_icon} data-tooltip="Python">
                        <FaPython />
                    </span>
                    <span className={styles.skill_icon} data-tooltip="Golang">
                        <FaGolang />
                    </span>
                    <br />
                    <span className={styles.skill_icon} data-tooltip="HTML/CSS/JS">
                        <MdWeb />
                    </span>
                    <span className={styles.skill_icon} data-tooltip="Java">
                        <FaJava />
                    </span>
                    <span className={styles.skill_icon} data-tooltip="Dart">
                        <SiDart />
                    </span>
                </p>
            </div>
            <div className={styles.services_items}>
                <FaLaptopCode />
                <h4>Framework</h4>
                <p style={{ position: 'relative' }}>
                    <span className={styles.skill_icon} data-tooltip="React">
                        <FaReact />
                    </span>
                    <span className={styles.skill_icon} data-tooltip="Node.js">
                        <FaNode />
                    </span>
                    <br />
                    <span className={styles.skill_icon} data-tooltip="Flutter">
                        <SiFlutter />
                    </span>
                </p>
            </div>
            <div className={styles.services_items}>
                <FaCloud />
                <h4>Currently Practicing</h4>
                <p style={{ position: 'relative' }}>
                    <span className={styles.skill_icon} data-tooltip="AWS">
                        <FaAws />
                    </span>
                    <br />
                    <span className={styles.skill_icon} data-tooltip="Google Cloud Platform">
                        <FaGoogle />
                    </span>
                </p>
            </div>
        </div>
    </div>
  )
}

export default Services