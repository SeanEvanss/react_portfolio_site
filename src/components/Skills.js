import {BadgeCheckIcon, ChipIcon} from "@heroicons/react/solid"
import { skills } from "./data";
import React, { Component } from 'react'

export default class Skills extends Component {
    render() {
        return (
            <section id="skills">
                <div className="container px-20 py-10 mx-auto">
                    <div className="text-center mb-20">
                        <ChipIcon className="w-20 inline-block mb-4"/>
                        <h1 className="sm:text-4xl text-3xl font-medium text-white">
                            Skills &amp; Frameworks
                        </h1>
                    </div>
                    <p className="text-base leading-relaxed">
                        I'm have a specialisation in both self software engineer as well as machine learning
                        for my professional setting. My most comfortable languages are Java, C++ as well Python. For my professional
                        skills, I set up small RPi servers to handle evrythihng from DNS as well as act a NAS. I also do 3D printing and 
                        designing with software such as Fusion360 as well as Cura.
                    </p>
                </div>
                <div className="flex flex-wrap py-5 lg:w-4/5 sm:mx-auto sm:mb-2 mx-2">
                    {skills.map((skill)=>(
                        <div key={skill} className="p-2 sm:w-1/3 w-full">
                            <div className="bg-gray-800 rounded flex p-3 h-full items-center justify-center ">
                                <BadgeCheckIcon className="text-green-500 w-8 h-8 flex-shrink-0 mr-4"/>
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
}
