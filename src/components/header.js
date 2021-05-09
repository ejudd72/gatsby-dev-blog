import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import styled from "styled-components"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const Header = ({ siteTitle }) => (
  <HeaderStyled>
    <header>
      <div className="header--container">
        <h1>
          <AniLink duration={0.5} swipe to="/" className="header--logo-link">
            {siteTitle}
          </AniLink>
        </h1>

        <nav className="header--navigation">
          <ul className="header--navigation__list">
            <li className="header--navigation__list-item list-item-1">
              <AniLink
                duration={0.5}
                swipe
                className="header--navigation__list-link"
                to="/"
              >
                Home
              </AniLink>
            </li>
            <li className="header--navigation__list-item list-item-2">
              <AniLink
                duration={0.5}
                swipe
                className="header--navigation__list-link"
                to="/about"
              >
                About
              </AniLink>
            </li>
            <li className="header--navigation__list-item list-item-3">
              <AniLink
                duration={0.5}
                swipe
                className="header--navigation__list-link"
                to="/contact"
              >
                Contact
              </AniLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  </HeaderStyled>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

const HeaderStyled = styled.div`
  .header {
    &--container {
      margin: 0 auto;
      max-width: 960;
      padding: 1.45rem 1.0875rem;
      display: flex;
      justify-content: space-between;
    }

    &--logo-link {
      display: block;
      margin: 0;
      color: black;
      text-decoration: none;
    }

    &--navigation {
      &__list {
        border-color: grey;
        border-style: solid;
        border-left: 3px;
        border-right: 3px;
        display: flex;
        justify-content: space-evenly;
        margin: 0;
        padding-inline-start: 0;
        margin-block-start: 0;
        align-content: center;
      }
      &__list-item {
        list-style-type: none;
        margin: 0;
        padding: 10px;
      }
      &__list-link {
        color: black;
        text-decoration: none;
      }
    }

    @media only screen and (max-width: 600px) {
      &--container {
        flex-direction: column;
      }
      &--logo-link {
        text-align: center;
      }
      &--navigation {
        &__list-item {
        }
      }
    }
  }
`
