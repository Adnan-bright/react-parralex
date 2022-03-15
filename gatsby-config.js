module.exports = {
  siteMetadata: {
      title: ``,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
  //   {
  //   resolve: 'gatsby-source-wordpress',
  //   options: {
  //     "url": "http://localhost:8888/mag-raw-cms/graphql",
  //     // Specify which URL structures to fetch
  //     includedRoutes: [
  //       '**/posts',
  //       '**/tags',
  //       '**/categories'
  //     ]
  //   }
  // },
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