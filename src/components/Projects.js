import React, { Component } from 'react'
import vesp_gif from './resources/vespertine.gif'
import { CodeIcon } from "@heroicons/react/solid";


export default function Projects() {
    return (
        <section id="projects">
            <div className="container px-20 py-20 mx-auto">
                <div className="flex flex-col w-full mb-20">
                    <div className="text-center mb-20">
                        <CodeIcon className="w-20 inline-block"/>
                        <h1 className="text-3xl font-medium text-white-200"> 
                            Projects I've worked on
                        </h1>
                        <p className="mt-10 text-center">
                            I've worked on both web based as well as mobile applications<br/>
                            I've developed apps for Android, iOS, web. Additioally I have also written several cool standalone projects.
                        </p>
                    </div>
                    
                    <img src={vesp_gif} alt="loading..." />
                </div>
            </div>            
        </section>
    )
}
