import React from "react"
import Layout from "../components/Layout"
// import { Link } from "gatsby"
import StyledHero from "../components/StyledHero"
import { graphql } from "gatsby"
import BlogList from "../components/Blog/BlogList"

const blog = ({ data }) => {
  return (
    <Layout>
      <StyledHero img={data.blogBcg.childImageSharp.fluid} />
      <BlogList />
    </Layout>
  )
}
export const query = graphql`
  query {
    blogBcg: file(relativePath: { eq: "blogBcg.jpeg" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 4100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default blog
