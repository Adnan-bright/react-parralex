import { useStaticQuery, graphql } from "gatsby";

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
                  backgroundImage {
                    mediaItemUrl
                  }
                }
                film {
                  filmDescription
                  filmVideo {
                    mediaItemUrl
                  }
                  filmVideoUrl {
                    url
                  }
                  backgroundImage {
                    mediaItemUrl
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
                  backgroundImage {
                    mediaItemUrl
                  }
                }
              }
            }
          }
        }
      }
    `
  );
  const serviceData = data?.allWpServices?.edges?.[0]?.node?.services;
  const { design, film, tech } = serviceData;
  const { designDescription, designVideo, designVideoUrl, backgroundImage } =
    design;
  const designData = {
    description: designDescription,
    video: designVideoUrl ? designVideoUrl.url : designVideo.mediaItemUrl,
    bgImage: backgroundImage?.mediaItemUrl,
  };

  const {
    filmDescription,
    filmVideo,
    filmVideoUrl,
    backgroundImage: filmBackgroundImage,
  } = film;
  const filmData = {
    description: filmDescription,
    video: filmVideoUrl ? filmVideoUrl.url : filmVideo.mediaItemUrl,
    bgImage: filmBackgroundImage?.mediaItemUrl,
  };

  const {
    techDescription,
    techVideo,
    techVideoUrl,
    backgroundImage: techBackgroundImage,
  } = tech;
  const techData = {
    description: techDescription,
    video: techVideoUrl ? techVideoUrl.url : techVideo.mediaItemUrl,
    bgImage: techBackgroundImage?.mediaItemUrl,
  };

  return { designData, filmData, techData };
}

export default UseService;
