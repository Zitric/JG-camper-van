import { graphql, useStaticQuery } from 'gatsby';

const useBlogPosts = () => {
  const posts = useStaticQuery(graphql`
    query BlogRollQuery {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
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
            }
          }
        }
      }
    }
  `);

  const edges = posts.allMarkdownRemark.edges;

  return edges.map((post) => ({
    id: post.node.id,
    templateKey: post.node.frontmatter.templateKey,
    title: post.node.frontmatter.title,
    date: post.node.frontmatter.date,
    author: post.node.frontmatter.author,
    slug: post.node.fields.slug,
    excerpt: post.node.excerpt,
    featuredpost: post.node.frontmatter.featuredpost,
  }));
};

export default useBlogPosts;
