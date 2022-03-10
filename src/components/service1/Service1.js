import React, { useState, useEffect } from 'react'
import * as style from '../../styles/components/service1.module.css'
import { motion } from 'framer-motion'

function Service1({ count }) {
    const [index, setIndex] = useState(0)
    useEffect(() => {
        setIndex(count)
    }, [count])
    return (
        <div
            className={style.main}
        >
            <div
            >
                <motion.h1 key={index}
                    animate={{
                        marginLeft: ['200px', '60px']
                    }}
                    transition={{ duration: 1.5, easings: "easeInOut" }}
                    className={style.heading}>services</motion.h1>
            </div>
            <div className={style.imagesContainer}>
                <motion.div
                >
                    <motion.div
                        key={index}
                        animate={{
                            left: ["100px", '0px']
                        }}
                        transition={{ duration: .8, easings: "easeInOut" }}
                        className={style.imgCont}> <img className={style.imgItem} src='/images/services/img1.png' />
                        <h2 className={style.imgText}>film</h2>
                        <p className={style.imglowerText}>
                            Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit,
                            sed do eiusmod.</p>
                        <img className={style.playIcon} src='/icons/playIcon.png' />
                    </motion.div>
                </motion.div>
                <div
                >
                    <motion.div
                        key={index}
                        animate={{
                            left: ["100px", '0px']
                        }}
                        transition={{ duration: 1, easings: "easeInOut" }}
                        className={style.imgCont}> <img className={style.imgItem} src='/images/services/img2.png' />
                        <h2 className={style.imgText}>Design</h2>
                        <p className={style.imglowerText}>
                            Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit,
                            sed do eiusmod.</p>
                        <img className={style.playIcon} src='/icons/playIcon.png' />
                    </motion.div>
                </div>
                <div
                >
                    <motion.div
                    key={index}
                        animate={{
                            left: ["100px", '0px']
                        }}
                        transition={{ duration: 1.2, easings: "easeIn" }}
                        className={style.imgCont}> <img className={style.imgItem} src='/images/services/img3.png' />
                        <h2 className={style.imgText}>Tech</h2>
                        <p className={style.imglowerText}>
                            Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit,
                            sed do eiusmod.</p>
                        <img className={style.playIcon} src='/icons/playIcon.png' />
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Service1