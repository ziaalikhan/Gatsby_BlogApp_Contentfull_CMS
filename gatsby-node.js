const path = require("path");

exports.createPages = async ({ actions, graphql }) => {
    const result = await graphql(`
        {
            allContentfulPosts{
                edges{
                    node{
                        subtitle
                        slug
                        title
                        author
                        content{
                            json
                        }
                        image {
                            fluid{
                            src
                            }
                        }
                    }
                }
            }
        }
  `);
 
  result.data.allContentfulPosts.edges.map((edge) => {
        actions.createPage({
            path: `/blog/${edge.node.slug}`,
            component: path.resolve(`./src/pages/blog-post.js`),
            context: {
                data: edge.node,
            },
        });
    });
};