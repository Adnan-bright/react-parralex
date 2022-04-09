import React, { useState } from 'react'
import * as style from '../../styles/components/storiesViewAll.module.css'
import { all, blogPosts, stories, caseStudies } from '../../../src/components/constant/Constant'
import ContactBanner from '../contactBanner/ContactBanner'
import Footer from '../footer/Footer'
import gsap from 'gsap'
import { navigate } from 'gatsby'
export default function StoriesViewAll() {
    const [tab, setTab] = useState(all)
    const [sort, setSort] = useState(false)
    const handleClick = (id) => {
        navigate('/')
        gsap.to(window, {
            scrollTo: 700 * id,
            duration: .5,
        })
    }
    return (
        <div>
            <img onClick={()=> handleClick(3)} className={style.backArrow} src='../../images/storiesViewAll/back.png' />
            <div className={style.contantContainer}>
                <h1 className={style.title}>stories</h1>
                <div className={style.tabsContainer}>
                    <div className={style.tabs}>
                        <p onClick={() => setTab(all)} className={tab === all ? style.selectTab : style.tab}>all  /</p>
                        <p onClick={() => setTab(blogPosts)} className={tab === blogPosts ? style.selectTab : style.tab}>  blog posts /</p>
                        <p onClick={() => setTab(stories)} className={tab === stories ? style.selectTab : style.tab}> stories /</p>
                        <p onClick={() => setTab(caseStudies)} className={tab === caseStudies ? style.selectTab : style.tab}> case studies</p>
                    </div>
                    <div className={style.downArrowContainer}>
                        <p className={style.downtab}>sort by</p>
                        {sort ?
                            <img onClick={() => setSort(!sort)} className={style.downArrow} src='../../images/storiesViewAll/up.png' />
                            :
                            <>
                                <img onClick={() => setSort(!sort)} className={style.downArrow} src='../../images/storiesViewAll/down.png' />
                                <div className={style.sortImage}>
                                    <p className={style.sortText}>newest</p>
                                    <p className={style.sortText}>A-Z</p>
                                    <p className={style.sortText}>Z-A</p>
                                </div>
                            </>

                        }



                    </div>
                </div>
                <div className={style.line} />
                <div>
                    {tab.map((item, index) => {
                        return (
                            <div>
                                <p className={index === 0 ? style.postTitle : style.postTitleColor}>{item.title}</p>
                                <div className={style.postContainer}>
                                    <div>
                                        <p className={style.postSubTitle}>{item.subTitle}</p>
                                        <p className={style.postHeading}>{item.heading}</p>
                                        <p className={style.postDate}>{item.date}</p>
                                    </div>
                                    <div>
                                        <img className={style.downArrow} src='../../images/storiesViewAll/book.png' />
                                    </div>
                                </div>
                                <div className={style.line} />
                            </div>
                        )
                    })}
                    <center><div className={style.seeAllBtn}>
                        <p>see more</p>
                    </div></center>
                </div>

            </div>
            <div className={style.bannerContainer}>
                <ContactBanner />
            </div>
            <div className={style.footerContainer}>
                <Footer />
            </div>
        </div>
    )
}
