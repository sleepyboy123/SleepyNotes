import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';

import Layout from '../components/layout';

export default function Template({ data }) {
  const { markdownRemark: post } = data;
  return (
    <Layout>
      <Helmet title={`SleepyNotes - ${post.frontmatter.title}`} />
      <div style={{paddingBottom: `1.0rem`}}>
        <h1>{post.frontmatter.title}</h1>
        Written by: {post.frontmatter.author}
        <hr style={{background: `white`, marginTop: `5px`}}></hr>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        author
      }
    }
  }
`;
