import React, { useEffect, useRef } from 'react'
import { ParallaxProvider, useParallax, Parallax } from 'react-scroll-parallax';
import { useHorizontalScroll } from './hooks/useHorizontalScroll';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import './test.css'
import HeroVer1 from './heroVer1/HeroVer1';
import AboutUS from './aboutUs/AboutUs';
function Test() {
    gsap.registerPlugin(ScrollTrigger);
    const ref = useRef(null);



    useEffect(() => {
        const element = ref.current;

        let arrow = element.querySelector(".arrow");
        let arrowRight = element.querySelector(".arrow-right");
        if (arrow) {
            gsap.to(arrow, { y: 12, ease: "power1.inOut", repeat: -1, yoyo: true });
        }

        if (arrowRight) {
            gsap.to(arrowRight, {
                x: -12,
                ease: "power1.inOut",
                repeat: -1,
                yoyo: true,
            });
        }
    }, []);

    useEffect(() => {
        let sections = gsap.utils.toArray(".panel");
        gsap.to(sections, {
            xPercent: -100 * (sections.length - 1),
            ease: "none",
            scrollTrigger: {
                trigger: ".container",
                pin: true,
                scrub: 1,
                snap: 1 / (sections.length - 1),
                // base vertical scrolling on how wide the container is so it feels more natural.
                end: "+=3500",
            },
        });
    }, []);

    const scrollRef = useHorizontalScroll();
    return (
        <div >
            <div
                ref={ref}
            >
                <div className="container">
                   <div className="description panel ">
                     <HeroVer1 />
                    </div>
                    <div className="description2 panel blue">
                     <AboutUS />
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Test