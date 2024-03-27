import React from 'react'
import styles from './Skills.module.css'
import { FaReact, FaGitAlt, FaNode ,FaJenkins,FaDocker } from 'react-icons/fa6'
import { SiKubernetes,SiTerraform } from "react-icons/si";


function Skills() {
  return (
    <div className={styles.skill_con}>
        <h3 className={styles.skills_title}>My Skill Set</h3>
        <ul className={styles.skills_list}>
            <li>
                <FaJenkins />
            </li>
            <li>
                <FaReact />
            </li>
            <li>
                <SiTerraform />
            </li>
            <li>
                <FaGitAlt />
            </li>
            <li>
                <FaNode />
            </li>
            <li>
                <SiKubernetes />
            </li>
            <li>
                <FaDocker />
            </li>
        </ul>
    </div>
  )
}

export default Skills