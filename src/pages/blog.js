import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"

const blog = () => {
  return (
    <Layout>
      <h2>this is a blog page</h2>
      <button>
        <Link to="/">back to home page</Link>
      </button>
    </Layout>
  )
}

export default blog
