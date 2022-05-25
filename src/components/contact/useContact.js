import { useStaticQuery, graphql } from "gatsby";
import { useEffect, useState } from "react";
import * as style from "../../styles/components/contact.module.css";
function UseContact() {
  const [className, setClassName] = useState(style.toast);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({
    status: "",
    message: "Message",
  });
  useEffect(() => {
    setTimeout(() => {
      setClassName(style.toast);
    }, 3000);
  }, [className]);
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [error, setError] = useState({
    state: false,
    message: "",
  });
  const onFirstNameChange = (event) => {
    setError({
      state: false,
      message: "",
    });
    setValues({ ...values, firstName: event.target.value });
  };
  const onLastNameChange = (event) => {
    setError({
      state: false,
      message: "",
    });
    setValues({ ...values, lastName: event.target.value });
  };
  const onEmailChange = (event) => {
    setError({
      state: false,
      message: "",
    });
    setValues({ ...values, email: event.target.value });
  };
  const onPhoneChange = (event) => {
    setError({
      state: false,
      message: "",
    });
    setValues({ ...values, phone: event.target.value });
  };
  const onMessageChange = (event) => {
    setError({
      state: false,
      message: "",
    });
    setValues({ ...values, message: event.target.value });
  };

  const onSubmit = async (event) => {
    setLoading(true);
    event.preventDefault();
    if (values.email.length === 0 || values.message.length === 0) {
      setError({
        state: true,
        message: ` ${
          values.email === ""
            ? "Email"
            : values.message === ""
            ? "Message field"
            : "Field"
        } is required*`,
      });
    } else {
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(values.email)) {
        var formdata = new FormData();
        formdata.append("first-name", values.firstName);
        formdata.append("last-name", values.lastName);
        formdata.append("your-email", values.email);
        formdata.append("your-phone", values.phone);
        formdata.append("your-message", values.message);

        var requestOptions = {
          method: "POST",
          body: formdata,
          redirect: "follow",
        };
        try {
          const result = await fetch(
            `https://wordpress-668504-2533396.cloudwaysapps.com/wp-json/contact-form-7/v1/contact-forms/726/feedback`,
            requestOptions
          );
          const res = await result.text();
          const response = await JSON.parse(res);
          if (response.status === "mail_sent") {
            setValues({
              firstName: "",
              lastName: "",
              email: "",
              phone: "",
              message: "",
            });
            setError({
              state: false,
              message: "",
            });
            setStatus({
              status: "success",
              message: "Successfully submitted",
            });
            setClassName(style.toast2);
          }
        } catch (error) {
          setLoading(false);
          setStatus({
            status: "error",
            message: "Something went wrong",
          });
          setClassName(style.toast2);
          console.log("error", error);
        }
      } else {
        setError({
          state: true,
          message: "Email is not valid!",
        });
      }
    }
    setLoading(false);
  };
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
  return {
    socialData,
    values,
    onFirstNameChange,
    onLastNameChange,
    onEmailChange,
    onPhoneChange,
    onMessageChange,
    onSubmit,
    error,
    status,
    className,
    loading
  };
}

export default UseContact;
