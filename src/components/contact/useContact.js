import { useStaticQuery, graphql } from "gatsby";

function UseContact() {
  
  const data = useStaticQuery(
    graphql`
      query SocialData {
        allWpSocial {
          edges {
            node {
              social {
                socialLinks {
                  hoverIcon {
                    mediaItemUrl
                  }
                  icon {
                    mediaItemUrl
                  }
                  link {
                    url
                  }
                  linkTitle
                }
              }
            }
          }
        }
      }
    `
  );

  const newData = data?.allWpSocial?.edges?.[0]?.node?.social?.socialLinks;
  const socialData = [];
  newData.map((item) => {
    socialData.push({
      link: item.link.url,
      linkTitle: item.linkTitle,
      icon: item.icon.mediaItemUrl,
      hoverIcon: item.hoverIcon.mediaItemUrl,
    });
  });
  return { socialData };
}

export default UseContact;
