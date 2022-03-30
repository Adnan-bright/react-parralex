import React from 'react'
import * as style from "../../styles/components/reviewContainer.module.css"
import Slider from "react-slick";

function ReviewContainer() {

    const settings = {
        dots: false,
        infinite: false,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,

    };
    const items = [
        {
            ratings: '4.7',
            feedback: "“There are a lot of benefits to working with MAG-RAW, and that’s why I’ll continue to go back to them.”",
            reference: "Solutions Advisor, IT Business &#38; Solutions Firm"
        },
        {
            ratings: '5.0',
            feedback: "“There are a lot of benefits to working with MAG-RAW, and that’s why I’ll continue to go back to them.”",
            reference: "lorem ipsum"
        },
    ]

    return (
        <div
            className={style.main}
        >
            <div className={style.mainSection}>
                <img className={style.mainImg} src='/images/contact/singleBox.png' />
                <div className={style.sliderContainer}>
                    <Slider
                        {...settings}
                        className={style.slider}
                    >
                        {
                            items.map((item, index) => {
                                return <div key={index} className={style.dataContainer}>
                                    <div className={style.revCont}>
                                        <p className={style.revText}>{item.ratings}</p>
                                        <img
                                            className={style.starIcon}
                                            src='/images/contact/star.webp' />
                                    </div>
                                    <center>
                                        <p className={style.recDesc}>{item.feedback}</p>
                                    </center>
                                    <center>
                                        <p className={style.lowerText}>{item.reference}</p>
                                    </center>
                                </div>
                            })
                        }

                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default ReviewContainer