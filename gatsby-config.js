require("dotenv").config({
  path: `.env`,
});

// And then you can use the config in gatsby-config.js
const config = require("gatsby-plugin-config");

module.exports = {
  siteMetadata: {
    title: `mag-raw`,
    description: `mag-raw is creative support for your business at an affordable cost.`,
    siteUrl: `https://mag-raw.com/`,
  },
  plugins: [
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "static/images/common/favico.png",
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: process.env.GOOGLE_ANALYTICS_TRACKING_ID,
      },
    },
    {
      resolve: "gatsby-source-wordpress",
      options: {
        url: `${process.env.WORDPRESS_BASE_URL}/graphql`,
        // Specify which URL structures to fetch
        includedRoutes: [
          "**/posts",
          "**/tags",
          "**/categories",
          "**/allWpHeroSection",
        ],
        useACF: true,
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./static/images/",
      },
      __key: "images",
    },

    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
};
