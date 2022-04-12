import React, {useEffect} from 'react'
import { graphql } from "gatsby"

function Blog({ data }) {

    // const response = data.allWpHeroSection.edges
    // const posts = data?.allWpStories?.edges
    // function createMarkup(post) {
    //     return {__html: post};
    //   }
    return (
        <div
            style={{
                color: "white",
                margin: "200px"
            }}
        >

         <center><h1>Our Stories</h1></center>
            {/* {
                posts?.map((item, index) => {
                    return <div
                    style={{
                        marginTop:"50px",
                        fontFamily: "7graphik-regular"
                    }}
                    key={index}>
                        <img src={item.node.storiesfields.storyIcon.mediaItemUrl} />
                        <h2>{item.node.title}</h2>
                        <p>{item.node.storiesfields.storyDescription}</p>
                        <img src={item.node.storiesfields.storyCover.mediaItemUrl}  />
                        <p
                        style={{
                            borderBottom: "solid",
                            borderColor:"gray",
                            borderWidth: "5px"
                        }}
                        ></p>
                    </div>
                })

            } */}
        </div>
    )
}

// export const pageQuery = graphql`
// query NewQuery {
//     allWpHeroSection {
//       edges {
//         node {
//           heroSection {
//             fieldGroupName
//             videoDescription
//             videoTitle
//             video {
//               id
//               link
//             }
//           }
//         }
//       }
//     }
//   }
//   `
export default Blog