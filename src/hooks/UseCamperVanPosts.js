import { graphql, useStaticQuery } from 'gatsby';

const useCamperVanPosts = () => {
  const posts = useStaticQuery(graphql`
    query CamperVanRollQuery {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        filter: { frontmatter: { templateKey: { eq: "camper-van-post" } } }
      ) {
        edges {
          node {
            excerpt(pruneLength: 400)
            id
            fields {
              slug
            }
            frontmatter {
              title
              templateKey
              date(formatString: "MMMM DD, YYYY")
              featuredpost
              featuredimage {
                childImageSharp {
                  fluid(maxWidth: 120, quality: 100) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  `);

  const edges = posts.allMarkdownRemark.edges;

  console.log('camper-van edges', edges);

  return edges.map((post) => ({
    id: post.node.id,
    templateKey: post.node.frontmatter.templateKey,
    title: post.node.frontmatter.title,
    date: post.node.frontmatter.date,
    author: post.node.frontmatter.author,
    slug: post.node.fields.slug,
    image: post.node.frontmatter.featuredimage,
    excerpt: post.node.excerpt,
    featuredpost: post.node.frontmatter.featuredpost,
  }));
};

export default useCamperVanPosts;
