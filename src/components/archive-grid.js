import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import SEO from "../components/seo"
import styled from "styled-components"
import Layout from "../components/layout"
import PostLink from "../components/post-link"

const ArchiveGrid = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx {
        nodes {
          excerpt
          frontmatter {
            title
            author
            slug
            date
            featuredImage {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `)
  return (
    <GridStyled>
      <h2>Blog Posts</h2>
      <div className="grid">
        {data.allMdx.nodes.map(post => {
          return <PostLink post={post} />
        })}
      </div>
    </GridStyled>
  )
}

export default ArchiveGrid

const GridStyled = styled.div`
  align-items: center;
  padding: 2rem;

  .grid {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
  }

  @media only screen and (min-width: 600px) {
    .grid {
      flex-direction: row;
      flex-wrap: wrap;
    }
  }
`
