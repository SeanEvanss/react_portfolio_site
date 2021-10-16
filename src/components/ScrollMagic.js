import React, { Component, useRef, useEffect } from 'react'
import { gsap } from 'gsap';
import { ScrollTrigger, ScrollToPlugin } from "gsap/ScrollTrigger";
import "./styles/ScrollMagic.css"
import Profile from './resources/profile.jpeg';
import { projects } from './data';

export default function ScrollMagic() {

    gsap.registerPlugin(ScrollTrigger);
    const ref = useRef(null);

    useEffect(() => {
        gsap.from("#profile", {
            x: -1500,
            duration: 3,
            delay: 1,
            ease:"bounce",
            scrollTrigger: {
                trigger: "#profile",
            }
        });
    }, []);


    return (
        <section id="ScrollMagic"  className="container mx-auto flex px-10 py-10 md:flex-row flex col items-center justify-center">
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
        </section >
    )
}

/*
<div className="container px-20 py-20 mx-auto">
                <div className="flex flex-col w-full center-items justify-center">
                    <Controller>
                        <Scene duration={600}
                            pin={{ pushFollowers: true }}
                            triggerHook={0.5}
                            offset={100}>
                            <div>
                                <h1 className="text-5xl text-center text-white">
                                    Totally not blatant Apple ripoff
                                </h1>
                            </div>
                        </Scene>
                        <div>
                            <h2 className="text-3xl text-center text-white pt-10">
                                Let's see, what do they normally do now ?<br />
                                Maybe something like this-

                            </h2>
                        </div>

                        <Scene
                            duration={800}
                            triggerHook={0.50}
                            pin={{ pushFollowers: false }}>
                            <Timeline
                                target={
                                    <img
                                        className="object-cover object-center rounded"
                                        alt="Profile pic loading..."
                                        src={Profile}
                                    />
                                }>
                                <Tween from={{ opacity: -1 }} to={{ opacity: 1 }} />
                            </Timeline>
                        </Scene>

                    </Controller>
                </div>

            </div>
*/


