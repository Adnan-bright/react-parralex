import React, { useContext, useState } from 'react'
import * as style from '../../styles/components/storiesViewAll.module.css'
import { data } from '../../../src/components/constant/Constant'
import ContactBanner from '../contactBanner/ContactBanner'
import Footer from '../footer/Footer'
import gsap from 'gsap'
import { navigate } from 'gatsby'
import UseStories from '../stories/useStories'
import { DataContext } from '../Provider/Provider'
export default function StoriesViewAll() {
    const { selectedType, setPreviousRoute, previousRoute } = useContext(DataContext)

    const { storiesData } = UseStories()
    const [tab, setTab] = useState(selectedType)
    const [sort, setSort] = useState(false)
    const [sortKey, setSortKey] = useState('new')
    const [num, setNum] = useState(10)


    const handleClick = (id) => {
        navigate('/')
        gsap.to(window, {
            scrollTo: 700 * id,
            duration: .5,
        })
    }

    const onClick = (slug) => {
        navigate(slug)
        setPreviousRoute('/allStories')
    }

    storiesData.forEach(object => {
        object.category = 'stories';
    });
    const nData = data.concat(storiesData)

    const selectedData = tab === 'all' ? nData : nData.filter(item => item.category === tab)
    const dataArr = sortKey === 'new' ? selectedData : sortKey === 'up' ?
        selectedData?.sort((a, b) => a?.category?.localeCompare(b?.category)) : sortKey === 'down' ?
            selectedData?.sort((a, b) => b?.category?.localeCompare(a?.category)) : selectedData

    return (
        <div>
            <img onClick={() => handleClick(3)} className={style.backArrow} src='../../images/storiesViewAll/back.png' />
            <div className={style.contantContainer}>
                <h1 className={style.title}>{tab}</h1>
                <div className={style.tabsContainer}>
                    <div className={style.tabs}>
                        <p onClick={() => setTab('all')} className={tab === 'all' ? style.selectTab : style.tab}>all  /</p>
                        <p onClick={() => setTab('blog posts')} className={tab === 'blog posts' ? style.selectTab : style.tab}>  blog posts /</p>
                        <p onClick={() => setTab('stories')} className={tab === 'stories' ? style.selectTab : style.tab}> stories /</p>
                        <p onClick={() => setTab('Case studies')} className={tab === 'Case studies' ? style.selectTab : style.tab}> case studies</p>
                    </div>
                    <div className={style.downArrowContainer}>
                        <p className={style.downtab} onClick={() => setSort(!sort)}>sort by</p>
                        <div>
                            <img onClick={() => setSort(!sort)} className={style.downArrow}
                                src={sort ? '../../images/storiesViewAll/down.png' : '../../images/storiesViewAll/up.png'} />
                            <div className={`${sort ? style.sortImage : style.sortImageHide}`}>
                                <p className={style.sortText}
                                    onClick={() => { setSort(false); setSortKey('new') }}
                                >newest</p>
                                <p className={style.sortText}
                                    onClick={() => { setSort(false); setSortKey('up') }}
                                >A-Z</p>
                                <p className={style.sortText}
                                    onClick={() => { setSort(false); setSortKey('down') }}
                                >Z-A</p>
                            </div>
                        </div>


                    </div>
                </div>
                <div className={style.line} />
                <div>
                    {dataArr?.slice(0, num).map((item, index) => {
                        return (
                            <div onClick={() => item.category === 'stories' && onClick(`/${item.slug}`)} className={style.rowItem}>
                                <p className={item.category === 'blog posts' ? style.postTitleColorBlog :
                                    item.category === 'stories' ? style.postTitleColorStories :
                                        item.category === 'Case studies' ? style.postTitleColorCase : style.postTitle}>{item.category}</p>
                                <div className={style.postContainer}>
                                    <div>
                                        <p className={style.postSubTitle}>{item.title}</p>
                                        <p className={style.postHeading}>{item.description}</p>
                                        <p className={style.postDate}>Mar 1 . 3 MIN read</p>
                                    </div>
                                    <div>
                                        <img className={style.downArrow} src='../../images/storiesViewAll/book.png' />
                                    </div>
                                </div>
                                <div className={style.line} />
                            </div>
                        )
                    })}
                    <center><div
                        style={{
                            cursor: selectedData.length <= 10 ? 'no-drop' : 'default',
                            pointerEvents: selectedData.length <= 10 ? 'none' : 'auto',
                            opacity: selectedData.length <= 10 ? '0.5' : '1',
                        }}
                        onClick={() => num < selectedData.length ? setNum(num + 5) : setNum(10)} className={style.seeAllBtn}>
                        <p>{num < selectedData.length ? 'see more' : selectedData.length <= 10 ?
                            'see more' : 'see less'}</p>
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
