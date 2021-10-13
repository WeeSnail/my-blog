import React from 'react';
import {Helmet} from 'react-helmet';
import {useStaticQuery, graphql} from 'gatsby';

const Seo = ({ title, description, meta = [] }) => {

  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
          }
       }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description;
  const titleTemplate = title ? `${title} | ${site.siteMetadata.title}` : site.siteMetadata.title;

  return (
    <Helmet
      htmlAttributes={{lang: `en`}}
      title={titleTemplate}
      meta={[
        {
          name: 'description',
          content: metaDescription,
        },
        {
          name: 'og:title',
          content: title,
        },
        {
          name: 'og:description',
          content: metaDescription,
        },
        {
          name: 'og:type',
          content: `website`,
        },
        {
          name: 'twitter:title',
          content: title,
        },
        {
          name: 'twitter:description',
          content: metaDescription,
        },
        {
          name: 'twitter:card',
          content: 'summary',
        },
        {
          name: 'twitter:creator',
          content: site.siteMetadata.twitter || ``,
        }
      ].concat(meta)}
    />
  )
};

export default Seo;
