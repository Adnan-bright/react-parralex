import React, {useState} from 'react'
import * as style from '../../styles/components/relatedCases.module.css'
function RelatedCases() {
    const [active, setActive] = useState('film')
    return (
        <div className={style.mai}>
            <div className={style.casesContainer}>
                <div

                    className={style.menu}>
                    <div>
                        <div className={style.menuItemCont}>
                            <p
                                style={{
                                    marginTop: '5px',
                                }}
                                onClick={()=> setActive('film')}
                                className={active ==='film' ? style.menuItemActive:style.menuItem}>Film</p>
                            <div className={active ==='film' ?style.brdrDiv : style.brdrDivHide}></div>
                        </div>
                    </div>
                    <div>
                        <div className={style.menuItemCont}>
                            <p
                                onClick={()=> setActive('design')}
                                className={active ==='design' ? style.menuItemActive:style.menuItem}>Design</p>
                            <div className={active ==='design' ?style.brdrDiv : style.brdrDivHide}></div>
                        </div>
                    </div>
                    <div>
                        <div className={style.menuItemCont}>
                            <p
                                onClick={()=> setActive('tech')}
                                className={active ==='tech' ? style.menuItemActive:style.menuItem}>Tech</p>
                            <div className={active ==='tech' ?style.brdrDiv : style.brdrDivHide}></div>
                        </div>
                    </div>
                    
                </div>
                <div className={style.content}>
                    <div className={style.caseCard}>
                        <div className={style.cardImgContainer}>
                            <img className={style.cardImage}
                                draggable={false} src='/images/common/dummy.png' alt='Image' />
                        </div>
                        <p className={style.cardTitle}>Film</p>
                        <p className={style.cardDescription}> Lorem ipsum dolor sit amet, con ec tetur adipiscing elit</p>
                    </div>
                    <div className={style.caseCard}>
                        <div className={style.cardImgContainer}>
                            <img className={style.cardImage}
                                draggable={false} src='/images/common/dummy.png' alt='Image' />
                        </div>
                        <p className={style.cardTitle}>Film</p>
                        <p className={style.cardDescription}> Lorem ipsum dolor sit amet, con ec tetur adipiscing elit</p>
                    </div>
                    <div className={style.caseCard}>
                        <div className={style.cardImgContainer}>
                            <img className={style.cardImage}
                                draggable={false} src='/images/common/dummy.png' alt='Image' />
                        </div>
                        <p className={style.cardTitle}>Film</p>
                        <p className={style.cardDescription}> Lorem ipsum dolor sit amet, con ec tetur adipiscing elit</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RelatedCases