import React from 'react'
import { useStaticQuery, graphql } from "gatsby"

function UseHeroVer() {
    const data = useStaticQuery(
        graphql`
          query HeroData {
          allWpHeroSection {
                edges {
                  node {
                    heroSection {
                      fieldGroupName
                      videoDescription
                      videoTitle
                      video {
                        id
                        link
                      }
                    }
                  }
                }
              }
          }
        `
    )
    const HeroData = data?.allWpHeroSection?.edges?.[0]?.node?.heroSection
    return { HeroData }
}

export default UseHeroVer