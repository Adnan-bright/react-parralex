import React from 'react'
import { graphql } from "gatsby"

function Blog({ data }) {
    // console.log('data', data.allWpPost.edges)
    // const posts = data?.allWpPost?.edges
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

          blog test
            {/* {
                posts?.map((item, index) => {
                    return <div
                    style={{
                        marginTop:"50px",
                        fontFamily: "graphik-regular"
                    }}
                    key={index}>
                        <h1>{item.node.title}</h1>
                        <p>{item.node.id}</p>
                        <p>
                        <div dangerouslySetInnerHTML={createMarkup(item.node.content)}/>
                            
                        </p>
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
//   query {
//     allWpPost {
//         edges {
//           node {
//             id
//             authorDatabaseId
//             authorId
//             children {
//               id
//             }
//             commentCount
//             commentStatus
//             content
//             databaseId
//             date
//             dateGmt
//             slug
//             status
//             title
//             uri
//           }
//         }
//         totalCount
//       }
//   }`
export default Blog