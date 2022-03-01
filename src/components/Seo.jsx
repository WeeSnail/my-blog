import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

const Seo = ({ title, description, coverImage, meta = [] }) => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          image
        }
      }
    }
  `);

  const metaDescription = description || site.siteMetadata.description;
  const titleTemplate = title
    ? `${title} - ${site.siteMetadata.title}`
    : site.siteMetadata.title;
  const image = coverImage || site.siteMetadata.image;

  return (
    <Helmet
      htmlAttributes={{ lang: `en` }}
      title={titleTemplate}
      meta={[
        { charset: 'utf-8' },
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
          name: 'og:image',
          content: image,
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
        },
      ].concat(meta)}
    />
  );
};

export default Seo;
