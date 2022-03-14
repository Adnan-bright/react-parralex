import React from 'react'
import * as style from "../../styles/components/reviewContainer.module.css"
function ReviewContainer() {
    return (
        <div
            className={style.main}
        >
            <div className={style.mainSection}>
                <img className={style.mainImg} src='/images/contact/singleBox.png' />
                <div className={style.dataContainer}>
                    <div className={style.revCont}>
                        <p className={style.revText}>5.0</p>
                        <img
                            className={style.starIcon}
                            src='/images/contact/star.png' />
                    </div>
                    <center>
                        <p className={style.recDesc}>“There are a lot of benefits to working with MAG-RAW, and that’s why I’ll continue to go back to them.”</p>
                    </center>
                    <center>
                        <p className={style.lowerText}>Solutions Advisor, IT Business &#38; Solutions Firm</p>
                    </center>
                </div>
            </div>
        </div>
    )
}

export default ReviewContainer