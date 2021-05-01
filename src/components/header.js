import * as React from "react"
import PropTypes from "prop-types"
import { Link, StaticQuery, graphql } from "gatsby"

import Search from "./search"

const Header = ({ siteTitle }) => (
  <StaticQuery
    query={graphql`
      query SearchIndexQuery {
        siteSearchIndex {
          index
        }
      }
    `}
    render = {data => (
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
            <Search searchIndex={data.siteSearchIndex.index} />
          </div>
        </div>
      </header>
    )}
  />
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
