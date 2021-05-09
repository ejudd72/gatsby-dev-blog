import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import SEO from "../components/seo"
import styled from "styled-components"
import Layout from "../components/layout"
import Banner from "../components/banner"
const ContactPage = () => {
  return (
    <>
      <SEO title="Contact" />
      <Banner />
      <h1>Contact</h1>
    </>
  )
}

export default ContactPage
