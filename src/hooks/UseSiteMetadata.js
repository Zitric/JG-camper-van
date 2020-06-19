import { graphql, useStaticQuery } from 'gatsby';

const useSiteMetadata = () => {
  const data = useStaticQuery(
    graphql`
      query SITE_METADATA_QUERY {
        site {
          siteMetadata {
            titleTemplate
            defaultTitle: title
            defaultDescription: description
            siteUrl: url
            defaultImage: image
          }
        }
      }
    `,
  );

  return data.site.siteMetadata;
};

export default useSiteMetadata;
