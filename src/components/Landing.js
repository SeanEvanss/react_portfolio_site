import React, { useRef, useEffect } from 'react'
import Profile from './resources/profile.jpeg';
import "./styles/Landing.css"
import background from './resources/background.jpeg'
import { ArrowDownIcon } from '@heroicons/react/solid';


export default function Landing() {

    return (
        <section id="landing" >
            <div className="flex flex-col h-screen justify-center items-center" style={{ backgroundImage: `url(${background})`, backgroundSize: "cover" }}>
                <div className="container mx-auto flex px-10 py-10 flex-col items-center justify-center content-center">
                    <div className="flex flex-wrap md:items-start md:text-left mb-16 md:mb-0 items-center justify-center m-auto">
                        <h1 id="landing_words" className="font-serif lg:text-9xl lg:pb-5 text-3xl font-medium text-center">
                            Welcome
                        </h1>
                    </div>

                </div>
                <div className="flex justify-center py-10">
                    <ArrowDownIcon className="animate-bounce w-20 h-20" />
                </div>
            </div>

        </section>
    )

}
