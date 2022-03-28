import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
import Seo from './seo';

const Head = ({ title, author, description, twitterUsername }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          author
          description
          twitterUsername
        }
      }
    }
  `);

  return (
    <>
      <Seo
        title={title}
        author={author}
        description={description}
        twitterUsername={twitterUsername}
      />
      <Helmet
        title={`${title} | ${data.site.siteMetadata.title}`}
        author={`${data.site.siteMetadata.author}`}
        description={`${data.site.siteMetadata.description}`}
        twitterUsername={`${data.site.siteMetadata.twitterUsername}`}
      >
        <html lang="th" />
      </Helmet>
    </>
  );
};

export default Head;
