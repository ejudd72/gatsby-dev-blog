import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"

import BackgroundImage from "gatsby-background-image"
import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "watercolour-banner.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <Seo title="Home" />
      <BackgroundImage
        tag="header"
        fluid={data.file.childImageSharp.fluid}
        style={{
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center bottom",
          height: "30vh",
        }}
      ></BackgroundImage>
    </Layout>
  )
}

export default IndexPage
