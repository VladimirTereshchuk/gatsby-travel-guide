import React from "react"
import Layout from "../components/Layout"
// import { Link } from "gatsby"
import StyledHero from "../components/StyledHero"
import { graphql } from "gatsby"

const blog = ({ data }) => {
  return (
    <Layout>
      <StyledHero img={data.blogBcg.childImageSharp.fluid} />
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
