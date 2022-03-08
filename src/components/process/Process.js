import React, { useState } from 'react'
import * as style from '../../styles/components/process.module.css'

function Process() {
    const [hover, setHover] = useState('')
    return (
        <div className={style.main}>
            <h1 className={style.heading}>
                OUR PROCESS
            </h1>
            <div className={style.topRow}>
                <div
                    onMouseEnter={() => setHover('expansion')}
                    onMouseLeave={() => setHover('')}
                    className={hover === '' ? style.imageContainer5 : hover === 'expansion' ? style.imageContainer5Active : style.imageContainer5Blur}

                >
                    <img src='/images/process/icon5.png' />
                    <p className={style.imageText}
                    >Expansion</p>
                </div>
            </div>
            <div className={style.midRow}>
                <div
                    onMouseEnter={() => setHover('planning')}
                    onMouseLeave={() => setHover('')}
                    className={hover === '' ? style.imageContainer3 : hover === 'planning' ? style.imageContainer3Active : style.imageContainer3Blur}>
                    <img src='/images/process/icon2.png' />
                    <p className={style.imageText}>Planning</p>
                </div>
                <div
                    onMouseEnter={() => setHover('deployment')}
                    onMouseLeave={() => setHover('')}
                    className={hover === '' ? style.imageContainer4 : hover === 'deployment' ? style.imageContainer4Active : style.imageContainer4Blur}
                >
                    <img src='/images/process/icon4.png' />
                    <p className={style.imageText}>Deployment</p>
                </div>
            </div>
            <div className={style.bottomRow}>
                <div
                    onMouseEnter={() => setHover('ideation')}
                    onMouseLeave={() => setHover('')}
                    className={hover === '' ? style.imageContainer1 : hover === 'ideation' ? style.imageContainer1Active : style.imageContainer1Blur}
                >
                    <img src='/images/process/icon1.png' />
                    <p className={style.imageText}>Ideation</p>
                </div>
                <div
                    onMouseEnter={() => setHover('creation')}
                    onMouseLeave={() => setHover('')}
                    className={hover === '' ? style.imageContainer2 : hover === 'creation' ? style.imageContainer2Active : style.imageContainer2Blur}>

                    <img src='/images/process/icon3.png' />
                    <p className={style.imageText}>Creation</p>
                </div>
            </div>
        </div>
    )
}

export default Process