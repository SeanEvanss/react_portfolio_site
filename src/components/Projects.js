import React, { Component } from 'react'
import { projects } from './data';
import vesp from "./resources/vespertine.gif"
import { CodeIcon } from "@heroicons/react/solid";


export default function Projects() {
    return (
        <section id="projects">
            <div className="container px-20 py-20 mx-auto">
                <div className="flex flex-col w-full mb-20">
                    <div className="text-center mb-20">
                        <CodeIcon className="w-20 inline-block" />
                        <h1 className="text-3xl font-medium text-white-200">
                            Projects I've worked on
                        </h1>
                        <p className="mt-10 text-center">
                            I've worked on both web based as well as mobile applications<br />
                            I've developed apps for Android, iOS, web. Additioally I have also written several cool standalone projects.
                        </p>
                    </div>
                    <div className="flex flex-wrap m-4">
                        {projects.map((project) => (
                            <a href={project.link} key={project.key} className="md:w-1/2 p-4">
                                <div className="flex relative h-60">
                                    <img alt="loading..." className="absolute inset-0 w-full h-full aspect-w-16 aspect-h-9 object-cover object-center" src={project.image_link} />
                                    <div className="px-10 py-8 relative z-5 w-full h-full border-4 border-gray-800 bg-gray-900 opacity-90 hover:opacity-0">
                                        <h2 className="text-yellow-500">
                                            {project.subtitle}
                                        </h2>
                                        <h1 className="title-font text-lg font-medium text-white mb-3">
                                            {project.title}
                                        </h1>
                                        <p className="leading-relaxed">
                                            {project.description}
                                        </p>
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

/*

                                    */