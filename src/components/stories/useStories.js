import { useStaticQuery, graphql } from "gatsby"

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
              coverImageLink {
                  url
              }
              description
              storyTitle
              storyType
              team
              year
              slug
        }
              content
        
      }
    }
                  }
              }
            `
    )
    const managedData = data?.allWpStories?.edges
    const storiesData = []
    managedData?.map(item => {
        storiesData.push({
            coverImage: item?.node?.stories?.coverImageLink ? item?.node?.stories?.coverImageLink?.url :
                item?.node?.stories?.coverImage?.mediaItemUrl,
                description: item?.node?.stories?.description,
                title: item?.node?.stories?.storyTitle,
                slug: item?.node?.stories?.slug,
                content: item?.node?.content,
                client: item?.node?.stories?.client,
                storyType: item?.node?.stories?.storyType,
                team: item?.node?.stories?.team,
                year: item?.node?.stories?.year,

        })
    })
    return { storiesData }
}

export default UseStories