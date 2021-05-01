import * as React from "react"
import PropTypes from "prop-types"
import { Link, useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Search from "./search"

const Header = ({ siteTitle, open, setOpen }) => {
  const searchIndex = useStaticQuery(graphql`
    query SearchIndexQuery {
      siteSearchIndex {
        index
      }
    }
  `)

  const toggleMenu = () => {
    setOpen(!open);
  }

  return(
    <header
    style={{
      background: `#222831`,
      // marginBottom: `1.45rem`,
      position: `fixed`,
      width: `100vw`,
      height: `96.188px`
    }}
    >
      {open ? 
        <StaticImage
          src="../images/arrow-left.png"
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="Close"
          width={36}
          quality={95}
          style={{
            position: `absolute`,
            left: `3%`,
            top: `32px`,
            margin: `0px`,
          }}
          className = "arrow"
          onClick={() => {toggleMenu()}}
        />
      :
        <StaticImage
          src="../images/arrow-right.png"
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="Open"
          width={36}
          quality={95}
          style={{
            position: `absolute`,
            position: `absolute`,
            left: `3%`,
            top: `32px`,
            margin: `0px`,
          }}
          onClick={() => {toggleMenu()}}
        />
      }
      {/* <div onClick={() => {toggleMenu()}}>Hello</div> */}
      <div
      style={{
        margin: `0 auto`,
        maxWidth: `90%`,
        padding: `1.45rem 1.0875rem`,
      }}
      >
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: `#E5E5E5`,
              textDecoration: `none`,
            }}
          >
            {siteTitle}
          </Link>
        </h1>
        <div style={{
          position: `absolute`,
          right: `10%`,
          top: `32px`,
          margin: `0px`,
        }}>
          <Search searchIndex={searchIndex['siteSearchIndex']['index']} />
        </div>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
