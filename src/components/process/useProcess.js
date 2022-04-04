import { useStaticQuery, graphql } from "gatsby"

function UseProcess() {
    const data = useStaticQuery(
        graphql`
              query ProcessData {
              allWpProcess {
                edges {
                    node {
                      process {
                        ourProcess {
                          fifthStep {
                            description
                            title
                            icon {
                              mediaItemUrl
                            }
                            sortNumber
                          }
                          firstStep {
                            description
                            title
                            icon {
                              mediaItemUrl
                            }
                            sortNumber
                          }
                          fourthStep {
                            description
                            title
                            icon {
                              mediaItemUrl
                            }
                            sortNumber
                          }
                          secondStep {
                            description
                            title
                            icon {
                              mediaItemUrl
                            }
                            sortNumber
                          }
                          thirdStep {
                            description
                            title
                            icon {
                              mediaItemUrl
                            }
                            sortNumber
                          }
                        }
                      }
                    }
                  }
                  }
              }
            `
    )
    const newData = data?.allWpProcess?.edges?.[0]?.node?.process?.ourProcess

    return { newData}
}

export default UseProcess