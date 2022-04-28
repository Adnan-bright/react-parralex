require("dotenv").config({
  path: `.env`,
})

// And then you can use the config in gatsby-config.js
const config = require('gatsby-plugin-config');

module.exports = {
  siteMetadata: {
      title: ``,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
    {
    resolve: 'gatsby-source-wordpress',
    options: {
      "url": `${process.env.WORDPRESS_BASE_URL}/graphql`,
      // Specify which URL structures to fetch
      includedRoutes: [
        '**/posts',
        '**/tags',
        '**/categories',
        '**/allWpHeroSection'
      ],
      useACF: true,
    }
  },
   "gatsby-plugin-image", "gatsby-plugin-react-helmet", "gatsby-plugin-mdx", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./static/images/"
    },
    __key: "images"
  }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages"
  }]
};