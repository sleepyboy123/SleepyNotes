import React from 'react';
import { StaticImage } from "gatsby-plugin-image"

import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`, 'wiki']} />
    <h1>Hello Friend</h1>
    <p>“Sometimes Life’s A Bitch And Then You Keep Living.”</p>
    <p><i>- Diane Nguyen</i></p>
    <StaticImage
      src="../images/Bojack Horseman.png"
      width={500}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="Bojack Horseman"
      style={{ marginBottom: `1.45rem` }}
    />
  </Layout>
);

export default IndexPage;
