import React, { useRef, useEffect } from 'react'
import { SocialIcon } from 'react-social-icons';
import "./styles/ScrollMagic.css"
import Profile from './resources/profile.jpeg';

import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";



export default function About() {
    gsap.registerPlugin(ScrollTrigger);
    const ref = useRef(null);

    useEffect(() => {
        const currElement = ref.current;
        gsap.from(
            "#profile",
            {
                x: 200,
                duration: 2,
                opacity: 0,
                delay: 0,
                ease: "linear",
                scrollTrigger: {
                    trigger: "#main_trigger",
                    markers: false,
                    scrub: true,
                    start: "top 90%",
                    end: "bottom center+=20%"
                }
            });

        gsap.from(
            "#text_1",
            {
                x: -500,
                duration: 3,
                opacity: 0,
                scale: 1,
                delay: 0.5,
                ease: "linear",
                scrollTrigger: {
                    trigger: currElement.querySelector("#main_trigger"),
                    markers: false,
                    scrub: true,
                    start: "top 90%",
                    end: "bottom center+=20%"

                }
            });
        gsap.from(
            "#text_2",
            {
                x: -400,
                duration: 3,
                opacity: 0,
                delay: 1,
                ease: "linear",
                scrollTrigger: {
                    trigger: currElement.querySelector("#main_trigger"),
                    markers: false,
                    scrub: true,
                    start: "top 90%",
                    end: "bottom center+=20%"

                }
            });

        gsap.from(
            "#text_3",
            {
                x: -300,
                duration: 3,
                opacity: 0,
                delay: 1.5,
                ease: "linear",
                scrollTrigger: {
                    trigger: currElement.querySelector("#main_trigger"),
                    markers: false,
                    scrub: true,
                    start: "top 90%",
                    end: "bottom center+=20%"

                }
            });
        gsap.from(
            "#buttons_1",
            {
                x: -200,
                duration: 3,
                opacity: 0,
                delay: 2,
                ease: "linear",
                scrollTrigger: {
                    trigger: currElement.querySelector("#main_trigger"),
                    markers: false,
                    scrub: true,
                    start: "top 90%",
                    end: "bottom center+=20%"

                }
            });
    }, []);


    return (
        <section id="ScrollMagic" ref={ref}>

            <div className="container mx-auto px-10 py-10 flex md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <div id="main_trigger">
                        <h1 id="text_1" className="title-font lg:text-6xl text-3xl font-medium text-white">
                            Hi I'm Sean
                        </h1>
                        <h1 id="text_2" className="title-font lg:text-4xl text-3xl mt-5 xl:mb-10 mb-5 font-medium text-custom_orange">
                            I love to create applications and more using programming
                        </h1>
                        <div id="text_3">
                            <p id="mainText" className="mb-0 text-pure_white leading-relaxed">
                                I'm currently working as a backend Software Engineer at <em>PayPal Singapore</em>.<br />

                                I love finding applications for my programming to create cool stuff from games, web apps and so on.
                            </p>
                        </div>
                    </div>

                    <div id="buttons_1" className="flex justify-center mt-8">
                        <a href="#contact"
                            className="inline-flex text-pure_white bg-custom_orange border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded text-lg">
                            Work With Me
                        </a>
                        <a href="#projects"
                            className="ml-4 inline-flex text-pure_white bg-custom_dark_blue border-0 py-2 px-6 focus:outline-none hover:bg-custom_light_blue hover:text-white rounded text-lg">
                            See My Past Work
                        </a>
                        <SocialIcon url='https://www.linkedin.com/in/sean-tang-s96/' className='ml-4 inline-flex' />
                    </div>
                </div>
                <div id="profile" className="lg:max-w-lg md:w-1/3 lg:mt-5 sm:w-1/4 w-5/6 flex flex-col text-center">
                    <img
                        className="object-cover object-center rounded"
                        alt="Profile pic loading..."
                        src={Profile}
                    />
                    <text>
                        (This is how I look, just with, well, black hair)
                    </text>
                </div>
            </div >
        </section>
    )
}