const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  siteMetadata: {
    siteUrl: `https://a-my-blog-site-app.netlify.app`,
  },
    plugins: [
        {
          resolve: "gatsby-source-contentful",
          options: {
            spaceId: process.env.ACCESS_TOKEN,
            accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
          },
        },

      ],
}