import React from 'react'
import * as style from '../../styles/components/customDots.module.css'
function CustomDots({ dots, activeIndex, onDotClick , isIndex}) {
    const items = dots?.slice(0, Math.floor(dots.length / 6))
    const lastIndex = Math.ceil((dots.length / 2))
    return (
        <div
            className={style.main}
        >
            {
                items.map((item, index) => {
                    return <div onClick={() => onDotClick(index * 8, index)} className={style.item} key={index}>
                        {activeIndex/8=== index && <div className={style.filledItem}>

                        </div>}
                     
                    </div>
                })
            }
        </div>
    )
}

export default CustomDots