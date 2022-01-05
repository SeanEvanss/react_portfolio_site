import React from 'react'
import { projects } from './data';
import { CodeIcon } from "@heroicons/react/solid";
import "./styles/Projects.css"


export default function Projects() {
    return (
        <section id="projects">
            <div className="container px-8 py-0 mx-auto">
                <div className="flex flex-col w-full mb-20">
                    <div className="text-center mb-10">
                        <CodeIcon className="w-20 inline-block fill-current text-gray-200" />
                        <h1 className="text-4xl font-medium text-gray-200">
                            Projects I've worked on
                        </h1>
                        <p className="mt-10 text-center text-gray-200">
                            Below are some of the projects I've worked on. There's plenty more on my github, so please check it out to get a better idea of the projects I'v worked on.<br />
                            I've mainly developed Android, iOS as well as web applications. Additioally, I have also created several standalone (python,NodeJS) projects.
                        </p>
                        <p id="landing_words" className="mt-10 text-center text-gray-300 text-xl ">
                            Hover over to see the project in action and click on project to be redirected to the project's github page.
                        </p>

                    </div>
                    <div className="flex flex-wrap m-4">
                        {projects.map((project) => (
                            <a href={project.link} key={project.key} className="md:w-1/2 p-4">
                                <div className="flex relative h-60">
                                    <img alt="loading..." className="absolute inset-0 w-full h-full aspect-w-16 aspect-h-9 object-cover object-center" src={project.image_link} />
                                    <div className="px-2 md:px-10 py-4 md:py-8 relative z-5 w-full h-full border-4 border-gray-800 bg-gray-900 opacity-90 hover:opacity-0">
                                        <h2 className="text-custom_orange text-xs md:text-base">
                                            {project.subtitle}
                                        </h2>
                                        <h1 className="title-font text-xs md:text-lg font-medium text-white mb-3">
                                            {project.title}
                                        </h1>
                                        <p className="leading-relaxed text-xs md:text-base">
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