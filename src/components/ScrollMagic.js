import React, { Component, useRef, useEffect } from 'react'
import "./styles/ScrollMagic.css"
import Profile from './resources/profile.jpeg';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowDownIcon } from '@heroicons/react/solid';


export default function ScrollMagic() {

    gsap.registerPlugin(ScrollTrigger);
    const ref = useRef(null);

    useEffect(() => {
        const currElement = ref.current;

        gsap.from(
            currElement.querySelector("#profile"),
            {
                y: 200,
                duration: 1,
                opacity: 0,
                delay: 0,
                ease: "none",
                scrollTrigger: {
                    trigger: currElement.querySelector("#main_trigger"),
                    markers: false,
                }
            });
    }, []);

    useEffect(() => {
        const currElement = ref.current;

        gsap.from(
            currElement.querySelector("#text_1"),
            {
                x: -200,
                duration: 1,
                opacity: 0,
                delay: 0.5,
                ease: "none",
                scrollTrigger: {
                    trigger: currElement.querySelector("#main_trigger"),
                    markers: false,

                }
            });
    }, []);

    useEffect(() => {
        const currElement = ref.current;

        gsap.from(
            currElement.querySelector("#text_2"),
            {
                x: -200,
                duration: 1,
                opacity: 0,
                delay: 1,
                ease: "none",
                scrollTrigger: {
                    trigger: currElement.querySelector("#main_trigger"),
                    markers: false,

                }
            });
    }, []);

    useEffect(() => {
        const currElement = ref.current;

        gsap.from(
            currElement.querySelector("#text_3"),
            {
                x: -200,
                duration: 1,
                opacity: 0,
                delay: 1.5,
                ease: "none",
                scrollTrigger: {
                    trigger: currElement.querySelector("#main_trigger"),
                    markers: false,

                }
            });
    }, []);

    useEffect(() => {
        const currElement = ref.current;

        gsap.from(
            currElement.querySelector("#buttons_1"),
            {
                x: -200,
                duration: 1,
                opacity: 0,
                delay: 2,
                ease: "none",
                scrollTrigger: {
                    trigger: currElement.querySelector("#main_trigger"),
                    markers: false,

                }
            });
    }, []);


    return (
        <section id="ScrollMagic" ref={ref}>

            <div className="container mx-auto px-10 py-10 flex md:flex-row flex-col items-center">
                <div id="main_trigger" className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 id="text_1" className="title-font lg:text-6xl text-3xl font-medium text-white">
                        Hi I'm Sean
                    </h1>
                    <h1 id="text_2" className="title-font lg:text-4xl text-3xl mt-5 mb-10 font-medium text-yellow-500">
                        I love to create applications and more using programming
                    </h1>
                    <div id="text_3">
                        <p id="mainText" className="mb-0 leading-relaxed">
                            I'm currently working as a backend Software Engineer at PayPal Singapore.<br />

                            I just love finding applications for my programming to create cool stuff from games, web apps and so on.
                        </p>
                    </div>

                    <div id="buttons_1" className="flex justify-center mt-8">
                        <a href="#contact"
                            className="inline-flex text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded text-lg">
                            Work With Me
                        </a>
                        <a href="#projects"
                            className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-900 hover:text-white rounded text-lg">
                            See My Past Work
                        </a>
                    </div>
                </div>
                <div id="profile" className="lg:max-w-lg lg:w-f md:w-1/2 sm:w-1/4 w-5/6 flex flex-col text-center">
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
            <div className="flex justify-center">
                <ArrowDownIcon className="animate-bounce w-8 h-8" />
            </div>
        </section>
    )
}