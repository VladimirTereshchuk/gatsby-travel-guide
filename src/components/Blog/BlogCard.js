import React from "react"
import styles from "../../css/blog-card.module.css"
import Image from "gatsby-image"
import AniLink from "gatsby-plugin-transition-link"

const BlogCard = ({ blog }) => {
  const { title, slug, published, image } = blog
  return (
    <article className={styles.blog}>
      <div className={styles.imgContainer}>
        <Image fluid={image.fluid} className={styles.img} />
        <AniLink
          fade="true"
          to={`/blog/${slug}`}
          className={styles.link}
          alt="sigle post"
        >
          read more
        </AniLink>
        <h6 className={styles.date}>Published: {published}</h6>
      </div>
      <div className={styles.footer}>
        <h4>{title}</h4>
      </div>
    </article>
  )
}

export default BlogCard
