import React from "react"
import { graphql, Link } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../components/layout.js"
import Banner from "../components/banner"
export const data = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        author
        date
      }
      body
    }
  }
`
const BlogPost = ({ data }) => {
  return (
    <>
      <Banner />
      <MDXRenderer>{data.mdx.body}</MDXRenderer>
      <Link to="/">&larr; Back to Homepage</Link>
    </>
  )
}
export default BlogPost
