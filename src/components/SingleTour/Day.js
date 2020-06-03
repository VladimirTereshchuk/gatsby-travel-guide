import React, { useState } from "react"
import { FaAngleDown, FaAngleUp } from "react-icons/fa"
import styles from "../../css/day.module.css"

const Day = ({ day, info }) => {
  const [showInfo, setShowInfo] = useState(false)
  const toggleInfo = () => {
    setShowInfo(showInfo => !showInfo)
  }
  return (
    <article
      className={
        showInfo ? `${styles.day} ${styles.showInfo}` : `${styles.day}`
      }
    >
      <h4>
        {day}
        <button className={styles.btn} onClick={toggleInfo}>
          {!showInfo ? <FaAngleDown /> : <FaAngleUp />}
        </button>
      </h4>
      {/* {showInfo && <p>{info}</p>} */}
      <p>{info}</p>
    </article>
  )
}

export default Day
