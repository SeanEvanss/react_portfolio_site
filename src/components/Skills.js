import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid"
import { skills } from "./data";
import React, { useRef, useEffect } from 'react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Skills() {

    gsap.registerPlugin(ScrollTrigger);
    const ref = useRef(null);

    useEffect(() => {
        const currElement = ref.current;
        gsap.from(
            currElement.querySelector("#main_skill"),
            {   
                y: 50,      
                duration:3,
                opacity:0,
                delay: 0,
                scrollTrigger: {
                    trigger: currElement.querySelector("#main_skill"),
                    markers: false,
                    scrub: true,
                    start: "top center+=30%",
                    end: "bottom center+=30%"
                }
            });
    }, [])

    return (
        <section id="skills" ref={ref}>
            <div className="container px-20 py-10 mx-auto">
                <div className="text-center mb-10">
                    <ChipIcon className="w-20 text-gray-200 inline-block mb-4" />
                    <h1 className="sm:text-4xl text-3xl font-medium text-white">
                        Skills &amp; Frameworks
                    </h1>
                </div>
                <p className="text-center leading-relaxed">
                    My skill set spans across SWE (my main focus), but I also have a lot of experience with other technologies such as deep learning, mobile dev and web dev.
                    
                </p>
            </div>
            <div id="main_skill" className="flex flex-wrap py-2 lg:w-4/5 sm:mx-auto mb-2 md:mb-10 mx-2">
                {skills.map((skill) => (
                    <div id="skill" key={skill} className="p-2 sm:w-1/3 w-full">
                        <div className="bg-gray-800 rounded flex p-3 h-full items-center justify-center ">
                            <BadgeCheckIcon className="text-green-500 w-8 h-8 flex-shrink-0 mr-4" />
                            <span className="title-font font-medium text-white">
                                {skill}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
