import React from 'react'
import Layout from '../components/Layout';
import {graphql} from 'gatsby';
import Seo from '../components/Seo';

const About = ({data}) => {
  return (
    <Layout>
    <Seo title={`About`} />
      <p>{data.site.siteMetadata.body.content}</p>
    </Layout>
  )
}

export const query = graphql`
query {
    site {
        siteMetadata {
            title
            body {
                content
            }
        }
    }
}
`

export default About;

