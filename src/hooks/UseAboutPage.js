import { graphql } from 'gatsby';

const useAboutPage = () => {
  return graphql`
    query AboutPage($id: String!) {
      markdownRemark(id: { eq: $id }) {
        html
        frontmatter {
          title
        }
      }
    }
  `;
};

export default useAboutPage;
