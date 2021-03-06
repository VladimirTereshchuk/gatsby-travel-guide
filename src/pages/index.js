import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Banner from "../components/Banner"
import About from "../components/Home/About"
import Services from "../components/Home/Services"
import StyledHero from "../components/StyledHero"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import FeaturedTours from "../components/Home/FeaturedTours"

export default function Home({ data }) {
  return (
    <div>
      <Layout>
        <StyledHero home="true" img={data.defaultBcg.childImageSharp.fluid}>
          <Banner
            title="Discover Unknown Lands"
            info="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque, voluptatibus."
          >
            <AniLink fade to="/tours" className="btn-white">
              explore tours
            </AniLink>
          </Banner>
        </StyledHero>
        <About />
        <Services />
        <FeaturedTours />
      </Layout>
    </div>
  )
}
export const query = graphql`
  query {
    defaultBcg: file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 4100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
