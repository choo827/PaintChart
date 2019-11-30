import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import file from "./../data/file.json"

console.log(file.Blackpink)

const a = file.Blackpink

console.log(a)

const IndexPage = () => (
  <Layout>
    <SEO title="Main" />
  </Layout>
)

export default IndexPage
