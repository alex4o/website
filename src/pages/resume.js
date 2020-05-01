import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout/"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Resume" />
    <h1>Hello I am Aleksandar Bonin</h1>
    <p>
      I am a Software Hacker working on magical things. Welcome to my website.
    </p>

    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
