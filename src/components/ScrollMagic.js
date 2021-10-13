import React, { Component } from 'react'
import { Controller, Scene } from 'react-scrollmagic'
import { Tween, Timeline } from 'react-gsap'


export default function ScrollMagic() {
    return (
        <section id="ScrollMagic">
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
                            <h2 className="text-3xl text-center text-white">
                                Let's see, what do they normally do now ? 
                                Maybe something like this-

                            </h2>
                        </div>
                        <Scene
                            duration={1500}
                            triggerHook={0.25}
                            pin={{ pushFollowers: true }}>

                            <Timeline
                                target={
                                    <h1 className="text-8xl text-center text-white">
                                        Innovation
                                    </h1>
                                }>
                                <Tween from={{ opacity: -1 }} to={{ opacity: 1 }} />
                            </Timeline>
                        </Scene>
                    </Controller>
                </div>

            </div>


        </section>
    )
}


