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
                  backgroundImage {
                    mediaItemUrl
                  }
                }
                tech {
                  techVideo {
                    mediaItemUrl
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
  const { designDescription, designVideo,  backgroundImage } =
    design;
  const designData = {
    description: designDescription,
    video: designVideo.mediaItemUrl,
    bgImage: backgroundImage?.mediaItemUrl,
  };

  const {
    filmDescription,
    filmVideo,
    backgroundImage: filmBackgroundImage,
  } = film;
  const filmData = {
    description: filmDescription,
    video: filmVideo.mediaItemUrl,
    bgImage: filmBackgroundImage?.mediaItemUrl,
  };

  const {
    techDescription,
    techVideo,
    backgroundImage: techBackgroundImage,
  } = tech;
  const techData = {
    description: techDescription,
    video: techVideo.mediaItemUrl,
    bgImage: techBackgroundImage?.mediaItemUrl,
  };

  return { designData, filmData, techData };
}

export default UseService;
