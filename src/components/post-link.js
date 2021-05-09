import React from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import styled from "styled-components"

const PostLink = ({ post }) => {
  const { slug, title, featuredImage, date, author } = post.frontmatter
  return (
    <PostLinkStyled key={slug}>
      <Img
        className="post-link--image"
        fluid={featuredImage.childImageSharp.fluid}
      />
      <h3 className="post-link--title">
        <AniLink
          duration={0.5}
          paintDrip
          to={slug}
          className="header--logo-link"
        >
          {title}
        </AniLink>
      </h3>
      <div className="post-link--meta__container">
        <small className="post-link--meta__date">{date}</small>
        <small className="post-link--meta__author">{author}</small>
      </div>
      <p
        className="post-link--excerpt"
        dangerouslySetInnerHTML={{ __html: post.excerpt }}
      />
    </PostLinkStyled>
  )
}
export default PostLink

const PostLinkStyled = styled.div`
  margin: 0.5rem;

  .post-link {
    &--image {
      min-height: 100%;
    }
    &--title {
      text-align: center;
      top: -1rem;
      background-color: rgba(0, 0, 0, 0.2);
      &:hover {
        background-color: red;
      }
      a {
        text-decoration: none;
        color: black;
      }
      a:hover {
        color: dark-grey;
      }
    }
    &--meta {
      position: absolute;
      &__container {
        display: flex;
        justify-content: space-between;
      }
      &__date,
      &__author {
        margin: 10px;
        font-variant: small-caps;
        letter-spacing: 0.4rem;
        line-height: 0.8rem;
      }
    }
  }
  @media only screen and (min-width: 600px) {
    width: 50%;
  }
  @media only screen and (min-width: 900px) {
    width: 33%;
  }
`
