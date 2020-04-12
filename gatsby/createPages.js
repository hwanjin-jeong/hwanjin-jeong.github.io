const {resolve} = require('path')

module.exports = async ({ actions: { createPage }, graphql }) => {
  const { data, errors } = await graphql(`
            {
                allMarkdownRemark {
                    edges {
                        node {
                            html
                            frontmatter {
                                title
                            }
                        }
                    }
                }
            }
  `);

  if (errors) {
    throw errors;
  }
  
  data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.title,
      context: {
        html: node.html,
        title: node.frontmatter.title,
      },
      component: resolve('./src/components/template/PostTemplate.tsx'),
    });
  });
}
