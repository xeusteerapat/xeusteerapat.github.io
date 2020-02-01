import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const Head = ({ title }) => {
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
  `)

  return (
    <Helmet
      title={`${title} | ${data.site.siteMetadata.title}`}
      author={`${data.site.siteMetadata.author}`}
      description={`${data.site.siteMetadata.description}`}
      twitterUsername={`${data.site.siteMetadata.twitterUsername}`}
    />
  )
}

export default Head
