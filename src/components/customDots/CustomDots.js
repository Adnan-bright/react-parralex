import React from 'react'
import * as style from '../../styles/components/customDots.module.css'
function CustomDots({dots, activeIndex}) {
    const items = dots?.slice(0, dots.length / 3)
    return (
        <div 
        className={style.main}
        >
            {
                items.map((item, index) => {
                    return <div className={style.item} key={index}>
                      {activeIndex/2 === index &&  <div className={style.filledItem}>

                        </div>}
                    </div>
                })
            }
        </div>
    )
}

export default CustomDots