import { useStaticQuery, graphql } from "gatsby"

function UseService() {
    const data = useStaticQuery(
        graphql`
              query ServicesData {
              allWpServices {
                edges {
                    node {
                      services {
                        design {
                          designVideo {
                            mediaItemUrl
                          }
                          designVideoUrl {
                            url
                          }
                          designDescription
                        }
                        film {
                          filmDescription
                          filmVideo {
                            mediaItemUrl
                          }
                          filmVideoUrl {
                            url
                          }
                        }
                        tech {
                          techVideo {
                            mediaItemUrl
                          }
                          techVideoUrl {
                            url
                          }
                          techDescription
                        }
                      }
                    }
                  }
                  }
              }
            `
    )
    const serviceData = data?.allWpServices?.edges?.[0]?.node?.services
    const { design, film, tech } = serviceData

    const {designDescription, designVideo, designVideoUrl} = design
    const designData = {
        description:designDescription, 
        video:designVideoUrl? designVideoUrl.url :designVideo.mediaItemUrl ,
    }

    const {filmDescription, filmVideo, filmVideoUrl} = film
    const filmData = {
        description:filmDescription, 
        video:filmVideoUrl? filmVideoUrl.url :filmVideo.mediaItemUrl ,
    }

    const {techDescription, techVideo, techVideoUrl} = tech
    const techData = {
        description:techDescription, 
        video:techVideoUrl? techVideoUrl.url :techVideo.mediaItemUrl ,
    }

    return { designData, filmData, techData }
}

export default UseService