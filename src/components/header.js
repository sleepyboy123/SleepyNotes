import * as React from "react"
import PropTypes from "prop-types"
import { Link, useStaticQuery, graphql } from "gatsby"

import Search from "./search"

const Header = ({ siteTitle }) => {
  const searchIndex = useStaticQuery(graphql`
    query SearchIndexQuery {
      siteSearchIndex {
        index
      }
    }
  `)

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
      <div
      className = "headerName"
      style={{
        margin: `0 auto`,
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
        <div 
        className = "searchBox"
        style={{
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
