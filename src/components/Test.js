import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import React, {useEffect} from 'react'
import './test.css'
function Test() {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        let sections = gsap.utils.toArray(".panel");
        
        gsap.to(sections, {
          xPercent: -100 * (sections.length - 1),
          ease: "none",
          scrollTrigger: {
            trigger: ".container",
            pin: true,
            scrub: 1,
            
            // base vertical scrolling on how wide the container is so it feels more natural.
            end: () => "+=" + document.querySelector(".container").offsetWidth
          }
        });
        
        
        
        sections.forEach((sct, i) => {
          
          ScrollTrigger.create({
            trigger: sct,
            start: 'top top-=' + (sct.offsetLeft - window.innerWidth/2) * (document.querySelector(".container").offsetWidth/(sct.offsetWidth * (sections.length - 1))),
            end: '+=' + sct.offsetWidth * (document.querySelector(".container").offsetWidth/(sct.offsetWidth * (sections.length - 1))),
            toggleClass: {targets: sct, className: "active"},
        
          })
          
        });
        
        
        
        document.querySelectorAll(".anchor").forEach(element => {
          element.addEventListener('click', function() {
        
            const id = this.getAttribute('href').split('#')[1];
        
            gsap.to(window, {
              scrollTo: ( document.getElementById(id).offsetLeft * (document.querySelector(".container").offsetWidth / (document.querySelector(".container").offsetWidth - window.innerWidth)) ),
              duration: 2
            })
        
          });
        });
    }, [])
    
    return (
        <div>
            <header id="masthead" className="site-header" role="banner">
                <nav className="anchor-nav" role="navigation">
                    <a href="#panel-1" className="anchor">Panel 1</a>
                    <a href="#panel-3" className="anchor">Panel 3</a>
                    <a href="#panel-5" className="anchor">Panel 5</a>
                </nav>
            </header>




            <div className="container">
                <div className="description panel blue">
                    <div><h1>Horizontal snapping sections (simple)</h1>
                        <p>Scroll vertically to scrub the horizontal animation. It also dynamically snaps to the sections in an organic way based on the velocity. The snapping occurs based on the natural ending position after momentum is applied, not a simplistic "wherever it is when the user stops".</p>
                        <div className="scroll-down">Scroll down<div className="arrow"></div></div>
                    </div>
                </div>


                <section className="panel red" id="panel-1">
                    ONE
                    <p id="text-1" style={{position:"absolute", top:"3em "}}>Text example 1 Section 1 </p>
                    <p id="text-2" style={{position:"absolute", top:"9em "}}>Text example 2 test example section 1</p>
                </section>
                <section className="panel orange">
                    TWO
                    <p id="text-3" style={{position:"absolute", top:"3em "}}>Text example 1 Section 2 </p>
                    <p id="text-4" style={{position:"absolute", top:"9em "}}>Text example 2 test example section 1</p>
                </section>
                <section className="panel purple" id="panel-3">
                    THREE
                </section>
                <section className="panel green">
                    FOUR
                </section>
                <section className="panel gray" id="panel-5">
                    FIVE
                </section>

            </div>



            <header>
                <a href="https://greensock.com/scrolltrigger">
                    <img className="greensock-icon" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/16327/scroll-trigger-logo-light.svg" width="200" height="64" />
                </a>
            </header>
        </div>
    )
}

export default Test