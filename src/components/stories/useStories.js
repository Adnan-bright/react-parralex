import { useStaticQuery, graphql } from "gatsby"

function UseStories() {
    const data = useStaticQuery(
        graphql`
              query StoriesData {
              allWpStories {
                edges {
                    node {
                      stories {
                        description
                        storyTitle
                        coverImage {
                          mediaItemUrl
                        }
                        coverImageLink {
                            url
                          }
                      }
                    }
                  }
                  }
              }
            `
    )
    const managedData = data.allWpStories.edges
    const storiesData = []
    managedData?.map(item => {
        storiesData.push({
            coverImage: item.node.stories.coverImageLink ? item.node.stories.coverImageLink.url :
                item.node.stories.coverImage.mediaItemUrl,
                description: item.node.stories.description,
                title: item.node.stories.storyTitle
        })
    })
    return { storiesData }
}

export default UseStories