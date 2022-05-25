import { useStaticQuery, graphql } from "gatsby";

function UseStories() {
  const data = useStaticQuery(
    graphql`
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
                readTime
                sortKey
                video {
                  mediaItemUrl
                }
                videCoverImage {
                  mediaItemUrl
                }
              }
              content
              date
              modified
            }
          }
        }
      }
    `
  );
  const managedData = data?.allWpStories?.edges;
  const storiesData = [];
  managedData?.map((item, index) => {
    storiesData.push({
      id: index + 1,
      coverImage: item?.node?.stories?.coverImage?.mediaItemUrl,
      description: item?.node?.stories?.description,
      title: item?.node?.stories?.storyTitle,
      slug: item?.node?.stories?.slug,
      content: item?.node?.content,
      client: item?.node?.stories?.client,
      storyType: item?.node?.stories?.storyType,
      team: item?.node?.stories?.team,
      year: item?.node?.stories?.year,
      readTime: item?.node?.stories?.readTime,
      sortKey: item?.node?.stories?.sortKey,
      publishDate: item?.node?.date,
      modified: item?.node?.modified,
    });
  });
  return { storiesData };
}

export default UseStories;
