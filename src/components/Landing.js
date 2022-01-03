import React from 'react'
import "./styles/Landing.css"
import background from './resources/background.jpeg'
import { ArrowDownIcon } from '@heroicons/react/solid';
import { gsap } from 'gsap';
import { Timeline } from 'gsap/gsap-core';

gsap.timeline()
    .from("#landing_words", {"opacity": 0, "scale": 0, duration: 2, ease: "back"})
    .from("#landing_subtitle", {"opacity": 0, "scale": 0, duration: 1, ease: "power4"})

export default function Landing() {
    return (
        <section id="landing" >
            <div className="flex flex-col h-screen justify-center items-center">
                <div className="container mx-auto flex px-10 py-8 flex-col items-center justify-center content-center">
                    <div className="flex flex-wrap md:items-start md:text-left mb-16 md:mb-0 items-center justify-center m-auto">
                        <h1 id="landing_words" className="font-serif lg:text-9xl lg:pb-4 text-3xl font-medium text-center" style={{fontSize:"200px"}}>
                            SEAN TANG
                        </h1>
                        <h2 id="landing_subtitle" className='font-serif lg:text-3xl'>
                            Software Engineer. Data Science. Mobile Developer
                        </h2>
                    </div>

                </div>
                <div className="flex flex-col justify-center items-center py-10">
                    <h3 className='font-serif py-10 lg:text-3xl text-lg' >Scroll</h3>
                    <ArrowDownIcon className="animate-bounce w-20 h-20" />
                </div>
            </div>
        </section>
    )
}
