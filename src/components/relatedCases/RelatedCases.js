import React, { useState } from 'react'
import * as style from '../../styles/components/relatedCases.module.css'
import UseStories from '../stories/useStories'
import { motion, AnimatePresence } from "framer-motion";
function RelatedCases() {
    const {storiesData} = UseStories()
    
    const [active, setActive] = useState('film')
    const filteredData = storiesData?.filter((item) => item?.storyType?.toLowerCase() === active.toLowerCase())

    return (
        <div className={style.main}>
            <div className={style.casesContainer}>
                <div

                    className={style.menu}>
                    <div>
                        <div className={style.menuItemCont}>
                            <p
               
                                onClick={() => setActive('film')}
                                className={active === 'film' ? style.menuItemActive : style.menuItem}>Film</p>
                            <div className={active === 'film' ? style.brdrDiv : style.brdrDivHide}></div>
                        </div>
                    </div>
                    <div>
                        <div className={style.menuItemCont}>
                            <p
                                onClick={() => setActive('design')}
                                className={active === 'design' ? style.menuItemActive : style.menuItem}>Design</p>
                            <div className={active === 'design' ? style.brdrDiv : style.brdrDivHide}></div>
                        </div>
                    </div>
                    <div>
                        <div className={style.menuItemCont}>
                            <p
                                onClick={() => setActive('tech')}
                                className={active === 'tech' ? style.menuItemActive : style.menuItem}>Tech</p>
                            <div className={active === 'tech' ? style.brdrDiv : style.brdrDivHide}></div>
                        </div>
                    </div>

                </div>
                <div className={style.content}>
                    <AnimatePresence exitBeforeEnter>
                    {
                        filteredData.map((item, index) => {
                            return <motion.div 
                            key={active}
                            animate={{ opacity: 1, y: 0 }}
                            initial={{ opacity: 0, y: 20 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.15 }}
                            className={style.caseCard}>
                                <div className={style.cardImgContainer}>
                                    <img className={style.cardImage}
                                        draggable={false} src={item.coverImage} alt='Image' />
                                </div>
                                <p className={style.cardTitle}>{item.title}</p>
                                <p className={style.cardDescription}>{item.description }</p>
                            </motion.div>
                        })
                    }
                    </AnimatePresence>

                </div>
            </div>
        </div>
    )
}

export default RelatedCases