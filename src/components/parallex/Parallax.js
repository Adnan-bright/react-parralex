import React, {useState, useRef, useLayoutEffect,} from 'react'
import { motion, useViewportScroll, useTransform, useSpring, useReducedMotion } from 'framer-motion'

function Parallax({ children, offset }) {
    const [elementTop, setElementTop] = useState(0)
    const [clientwidth, setClientWidth] = useState(0)
    const ref = useRef(null)

    const prefersReducedMotion = useReducedMotion()

    const initial = elementTop - clientwidth
    // end our animation when we've scrolled the offset specified
    const final = elementTop + offset

    const { scrollX } = useViewportScroll()
    const xRange = useTransform(scrollX, [initial, final], [offset, -offset])

    const x = useSpring(xRange, [initial, final], [offset, -offset])

    useLayoutEffect(() => {
        const element = ref.current
        // save our layout measurements in a function in order to trigger
        // it both on mount and on resize
        const onResize = () => {
          // use getBoundingClientRect instead of offsetTop in order to
          // get the offset relative to the viewport
          setElementTop(element.getBoundingClientRect().top + window.scrollX || window.pageYOffset)
          setClientWidth(window.innerWidth)
        }
        onResize()
        window.addEventListener('resize', onResize)
        return () => window.removeEventListener('resize', onResize)
      }, [ref])
  // Don't parallax if the user has "reduced motion" enabled
  if (prefersReducedMotion) {
    return <>{children}</>
  }
  
    return  <motion.div ref={ref} style={{ x }}>{children}</motion.div>
}

export default Parallax