import { useStaticQuery, graphql } from "gatsby"

function UseReviewContainer() {
    const data = useStaticQuery(
        graphql`
              query ReviewsData {
              allWpReviews {
                edges {
                  node {
                    reviews {
                      feedback
                      rating
                      reference {
                        title
                        url
                      }
                    }
                  }
                }
                  }
              }
            `
    )

    const newData = data?.allWpReviews?.edges
    const reviewsData = []
    newData?.map((item) => {
        if (item.node.reviews) {
            reviewsData.push({
                feedback: item?.node?.reviews?.feedback,
                rating: item?.node?.reviews?.rating,
                reference: item?.node?.reviews?.reference
            })
        }
    })
    return { reviewsData }
}

export default UseReviewContainer