import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import Sidebar from './sidebar';
import Header from './header';

import '@progress/kendo-theme-default/dist/all.css';
import './layout.css';
import './layout-custom.css';

const Layout = ({ children }) => {
  const siteTitle = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div id="outer-container">
      <Header siteTitle={siteTitle['site']['siteMetadata']['title']} />
      <div className="container-flex">
        <Sidebar className="sidebar-flex" />
        <div id="page-wrap" className="content-flex" style={{color: `#E5E5E5`}}>
          {children}
        </div>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
