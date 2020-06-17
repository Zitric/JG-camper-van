import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useLocation } from '@reach/router';

import useSiteMetadata from '../hooks/UseSiteMetadata';

const SEO = ({ title, description, image, article, keywords }) => {
  const {
    titleTemplate,
    defaultTitle,
    defaultDescription,
    siteUrl,
    defaultImage,
  } = useSiteMetadata();
  const { pathname } = useLocation();
  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image || defaultImage}`,
    url: `${siteUrl}${pathname}`,
    keywords: null,
  };

  const canonical = pathname ? `${seo.url}` : null;

  return (
    <Helmet
      htmlAttributes={{
        lang: 'es',
      }}
      title={seo.title}
      titleTemplate={titleTemplate}
      link={
        canonical
          ? [
              {
                rel: 'canonical',
                href: canonical,
              },
            ]
          : []
      }
      meta={[
        { name: 'description', content: seo.description },
        { name: 'image', content: seo.image },
        { property: `og:title`, content: seo.title },
        { property: `og:description`, content: seo.description },
        { property: `og:type`, content: `website` },
        { property: `og:url`, content: seo.url },
        { property: `og:image`, content: seo.image },
      ]}
    >
      {keywords && <meta name="keywords" content={keywords.join(',')} />}
      {(article ? true : null) && <meta property="og:type" content="article" />}
    </Helmet>
  );
};

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  article: PropTypes.bool,
  keywords: PropTypes.arrayOf(PropTypes.string),
};

SEO.defaultProps = {
  title: null,
  description: null,
  image: null,
  article: false,
  keywords: null,
};

export default SEO;
