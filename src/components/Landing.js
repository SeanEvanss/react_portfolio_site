import React, {useRef, useEffect } from 'react'
import "./styles/Landing.css"
import { ArrowDownIcon } from '@heroicons/react/solid';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";




export default function Landing() {
    gsap.timeline({
        scrollTrigger: {
            trigger: "landing_content",
            markers:true,
            scrub:true,
            pin:true,
            start: "top top",
            end: "+=600",
        }
    })
    .to("#landing_content",{autoAlpha:0,duration:1, stagger:1})
    .to("#scroll_prompt_grp",{autoAlpha:0,duration:1});

    return (
        <section id="landing" >
            <div id="landing_div" className="flex flex-col h-screen justify-center items-center">
                <div className="container mx-auto flex px-10 py-8 flex-col items-center justify-center content-center">
                    <div id="landing_content" className="flex flex-wrap md:items-start md:text-left mb-16 md:mb-0 items-center justify-center m-auto">
                        <h1 id="landing_words" className="font-serif lg:text-9xl lg:pb-4 text-3xl font-medium text-center" style={{ fontSize: "200px" }}>
                            SEAN TANG
                        </h1>
                        <h2 id="landing_subtitle" className='font-serif lg:text-3xl'>
                            Software Engineer. Data Science. Mobile Developer
                        </h2>
                    </div>

                </div>
                <div id="scroll_prompt_grp" className="flex flex-col justify-center items-center py-10">
                    <h3 className='font-serif py-10 lg:text-3xl text-lg' >Scroll</h3>
                    <ArrowDownIcon className="animate-bounce w-20 h-20" />
                </div>
            </div>
        </section>
    )
}
