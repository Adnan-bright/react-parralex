import { useStaticQuery, graphql } from "gatsby"

function useAboutUs() {
    const data = useStaticQuery(
        graphql`
              query AboutUs {
              allWpAboutUs {
                edges {
                    node {
                      about {
                        aboutUsText
                      }
                    }
                  }
                  }
              }
            `
      )
      const aboutText = data?.allWpAboutUs?.edges?.[0]?.node?.about?.aboutUsText
  return {aboutText}
}

export default useAboutUs