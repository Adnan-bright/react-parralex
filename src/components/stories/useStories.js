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
                      story
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
            `
    )
    const managedData = data.allWpStories.edges
    const storiesData = []
    managedData?.map(item => {
        storiesData.push({
            coverImage: item.node.stories.coverImageLink ? item.node.stories.coverImageLink.url :
                item.node.stories.coverImage.mediaItemUrl,
                description: item.node.stories.description,
                title: item.node.stories.storyTitle,
                slug: item.node.stories.slug
        })
    })
    return { storiesData }
}

export default UseStories