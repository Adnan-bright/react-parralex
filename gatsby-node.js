exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
    query StoriesData {
      allWpStories {
        edges {
          node {
            stories {
              client
              coverImage {
                mediaItemUrl
              }
              description
              storyTitle
              storyType
              team
              year
              slug
            }
          }
        }
      }
    }
  `);
  const managedData = data.allWpStories.edges;
  const storiesData = [];
  managedData?.map((item) => {
    storiesData.push({
      coverImage: item.node.stories.coverImage.mediaItemUrl,
      description: item.node.stories.description,
      title: item.node.stories.storyTitle,
      slug: item.node.stories.slug,
    });
  });
  storiesData.forEach((item) => {
    const slug = item.slug?.replaceAll(" ", "-");
    actions.createPage({
      path: `allStories/${slug}`,
      component: require.resolve(`./src/components/storyLayout/StoryLayout.js`),
      context: { slug: slug },
    });
  });
};
