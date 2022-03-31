import React from 'react'
import * as style from '../../styles/components/customDots.module.css'
function CustomDots({dots, activeIndex, onDotClick}) {
    const items = dots?.slice(0, dots.length / 3)
    return (
        <div 
        className={style.main}
        >
            {
                items.map((item, index) => {
                    return <div onClick={()=> onDotClick(index*2)} className={style.item} key={index}>
                      {activeIndex/2 === index &&  <div className={style.filledItem}>

                        </div>}
                    </div>
                })
            }
        </div>
    )
}

export default CustomDots