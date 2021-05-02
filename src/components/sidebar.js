import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import { parseLinksToTree } from '../utils/parse-links-to-tree';

import { slide as Menu } from 'react-burger-menu'

import { NavTree } from './navtree';
import './sidebar.css';

var styles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '36px',
    height: '30px',
    left: '36px',
    top: '36px'
  },
  bmBurgerBars: {
    background: '#E5E5E5'
  },
  bmBurgerBarsHover: {
    background: '#a90000'
  },
  bmCrossButton: {
    height: '24px',
    width: '24px'
  },
  bmCross: {
    background: '#E5E5E5'
  },
  bmMenuWrap: {
    position: 'fixed',
    height: "100%",
    transform: "translate3d(0px, 0px, 0px)"
  },
  bmOverlay: {
    position: 'fixed',
    height: "100%",
    background: 'rgba(0, 0, 0, 0.3)'
  },
  // bmMenu: {
  //   background: '#373a47',
  //   padding: '2.5em 1.5em 0',
  //   fontSize: '1.15em'
  // },
  bmMorphShape: {
    fill: '#373a47'
  },
  // bmItemList: {
  //   color: '#b8b7ad',
  //   padding: '0.8em'
  // },
  bmItem: {
    display: 'inline-block'
  },
}

const Sidebar = ({ className }) => {
  const frontMatter = useStaticQuery(graphql`
    {
      allMarkdownRemark(sort: { fields: [frontmatter___path], order: ASC }) {
        edges {
          node {
            frontmatter {
              path
              title
            }
          }
        }
      }
    }
  `)
  return (
    <Menu styles={ styles } pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" }>
      <NavTree tree={parseLinksToTree(frontMatter['allMarkdownRemark']['edges'])} className={className} />
    </Menu>
  )
}



export default Sidebar;
