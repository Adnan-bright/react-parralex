import React from 'react'
import * as style from "../../styles/components/reviewContainer.module.css"
import Slider from "react-slick";
import UseReviewContainer from './useReviewContainer';

function ReviewContainer() {
    const {reviewsData} = UseReviewContainer()
    const settings = {
        dots: false,
        infinite: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        speed: 2000,
        autoplaySpeed: 3000,
        pauseOnHover: true
    };

    return (
        <div
            className={style.main}
        >
            <div className={style.mainSection}>
                <img className={style.mainImg} src='/images/contact/singleBox.webp' />
                <div className={style.sliderContainer}>
                    <Slider
                        {...settings}
                        className={style.slider}
                    >
                        {
                            reviewsData.map((item, index) => {
                                return <div key={index} className={style.dataContainer}>
                                    <div className={style.revCont}>
                                        <p className={style.revText}>{item.rating}</p>
                                        <img
                                            className={style.starIcon}
                                            src='/images/contact/star.webp' />
                                    </div>
                                    <center>
                                        <p className={style.recDesc}>{item.feedback}</p>
                                    </center>
                                    <center>
                                        <p className={style.lowerText}><a
                                        style={{
                                            textDecoration: 'none',
                                            color: 'white'
                                        }}
                                        target='_blank'
                                        href={item.reference.url}>{item.reference.title}</a></p>
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