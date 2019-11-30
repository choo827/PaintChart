import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import file from "./../data/file.json"



const IndexPage = () => (
  <Layout>
    <SEO title="Main" />
    {file.items.map(s => {
      return (
        <div key={s.title}>
          <img src={s.imageUrl} />
          <span className="image-title">
            <strong>{s.title}</strong>
          </span>
        </div>
      )
    })}
  </Layout>
)

export default IndexPage