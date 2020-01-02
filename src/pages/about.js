import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"

const AboutPage = () => {
  return (
    <Layout>
      <Head title="About Me" />
      <h1>About Me</h1>
      <p>
        Hello, My name is <b>Teerapat</b>
      </p>
      <p>I currently learning about web development.</p>
      <p>And also curious about ML/DL</p>
      <p>
        <Link to="/contact">Want to work with me? Reach out.</Link>
      </p>
    </Layout>
  )
}

export default AboutPage
