import React from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import useHorizontalScroll from '../hooks/useHorizontalScroll'
import Layout from '../components/layout/Layout';
import * as style from '../styles/services.module.css'
import Service1 from '../components/service1/Service1';
function Services() {
    const scrollRef = useHorizontalScroll();
    return (
        <Layout >
                <div className={style.main}>
                    <Service1 />
                </div>
            {/* <Parallax  horizontal={true} pages={2} style={{ top: '0', left: '0' }}>
                <ParallaxLayer
                    offset={0}
                    speed={2.5}
                    style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <p>Scroll down</p>
                </ParallaxLayer>

                <ParallaxLayer offset={1} speed={2} style={{ backgroundColor: '#ff6d6d' }} />

                <ParallaxLayer
                    offset={1}
                    speed={0.5}
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        color: 'white',
                    }}>
                    <p>Scroll up</p>
                </ParallaxLayer>
            </Parallax> */}
        </Layout>

    )
}

export default Services