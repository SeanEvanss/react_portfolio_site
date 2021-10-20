import React, { useRef, useEffect } from 'react'
import Profile from './resources/profile.jpeg';
import "./styles/Landing.css"
import background from './resources/background.jpeg'
import { ArrowDownIcon } from '@heroicons/react/solid';


export default function Landing() {

    return (
        <section id="landing" >
            <div className="h-screen" style={{ backgroundImage: `url(${background})`, backgroundSize: "cover" }}>
                <div className="container mx-auto flex px-10 py-10 md:flex-row flex col items-center justify-center">
                    <div className="flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center justify-center" >
                        <h1 id="landing" className="title-font lg:text-9xl lg:pb-5 text-3xl font-medium text-center">
                            Welcome to my page
                        </h1>
                    </div>

                </div>
                <div className="flex justify-center py-10" >
                    <ArrowDownIcon className="animate-bounce w-12 h-12" />
                </div>
            </div>

        </section>
    )

}
