import React from 'react'
import styles from './Skills.module.css'
import { FaGitAlt, FaJenkins, FaDocker } from 'react-icons/fa6'
import { SiKubernetes, SiTerraform, SiGrafana, SiPrometheus } from "react-icons/si";

function Skills() {
  return (
    <div className={styles.skill_con}>
      <h3 className={styles.skills_title}>Devops Pipeline Skills</h3>
      <ul className={styles.skills_list}>
        <li className={styles.skill_icon} data-tooltip="Jenkins">
          <FaJenkins />
        </li>
        <li className={styles.skill_icon} data-tooltip="Grafana">
          <SiGrafana />
        </li>
        <li className={styles.skill_icon} data-tooltip="Terraform">
          <SiTerraform />
        </li>
        <li className={styles.skill_icon} data-tooltip="Git">
          <FaGitAlt />
        </li>
        <li className={styles.skill_icon} data-tooltip="Prometheus">
          <SiPrometheus />
        </li>
        <li className={styles.skill_icon} data-tooltip="Kubernetes">
          <SiKubernetes />
        </li>
        <li className={styles.skill_icon} data-tooltip="Docker">
          <FaDocker />
        </li>
      </ul>
    </div>
  )
}

export default Skills