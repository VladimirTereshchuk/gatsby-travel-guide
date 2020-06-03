import React from "react"
import styles from "../../css/tour.module.css"
import Img from "gatsby-image"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { FaMapMarkedAlt } from "react-icons/fa"

const Tour = ({ tour }) => {
  // console.log(tour)
  const { name, price, country, days, images, slug } = tour

  return (
    <article className={styles.tour}>
      <div className={styles.imgContainer}>
        <Img fluid={images[0].fluid} className={styles.img} />
        <AniLink fade to={`/tours/${slug}`} className={styles.link}>
          details
        </AniLink>
      </div>
      <div className={styles.footer}>
        <h3>{name}</h3>
        <div className={styles.info}>
          <div className={styles.country}>
            <FaMapMarkedAlt className={styles.icon} />
            <h4>{country}</h4>
          </div>
          <div className={styles.details}>
            <h6>{days} days</h6>
            <h6>from ${price}</h6>
          </div>
        </div>
      </div>
    </article>
  )
}

export default Tour
