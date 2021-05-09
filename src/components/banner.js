import React from "react"
import PropTypes from "prop-types"
import { Link, useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"

const Banner = ({ imgName = "watercolour-banner.png" }) => {
  const backgroundImg = useStaticQuery(graphql`
    query {
      about: file(relativePath: { eq: "watercolour-banner.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      contact: file(relativePath: { eq: "plant-banner.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      home: file(relativePath: { eq: "dots-banner.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      post: file(relativePath: { eq: "flower-banner.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const imgMap = {
    "/about": "about",
    "/contact": "contact",
    "/": "home",
  }

  const selectedBackground = imgMap[window.location.pathname] || "post"

  console.log({ backgroundImg, selectedBackground })
  return (
    <BackgroundImage
      Tag="header"
      fluid={backgroundImg[selectedBackground].childImageSharp.fluid}
      style={{ height: "50vh" }}
    />
  )
}

Banner.propTypes = {}

export default Banner
