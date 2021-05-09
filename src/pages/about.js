import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import SEO from "../components/seo"
import styled from "styled-components"
import Banner from "../components/banner"
const AboutPage = () => {
  return (
    <>
      <SEO title="About" />
      <Banner />
      <h1>About</h1>
    </>
  )
}

export default AboutPage
