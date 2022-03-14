import React from 'react'
import * as style from "../../styles/components/reviewContainer.module.css"
function ReviewContainer() {
    return (
        <div
            className={style.main}
        >
            <div className={style.mainSection}>
                <img src='/images/contact/singleBox.png' />
            </div>
        </div>
    )
}

export default ReviewContainer