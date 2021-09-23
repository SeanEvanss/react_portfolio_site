import React, { Component } from 'react'
import Profile from './resources/profile.jpeg';

export default class About extends Component {
    render() {
        return (
            <section id="About">
                <div className="container mx-auto flex px-10 py-20 md:flex-row flex col items-center">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center" >
                        <h1 className="title-font sm:text-4xl text-3xl font-medium text-white">
                            Hi I'm Sean                            
                        </h1>
                        <h1 className="title-font sm:text-4xl text-3xl mb-10 font-medium text-yellow-500"> 
                            I love to build amazing apps
                        </h1>
                        <p className="mb-0 leading-relaxed">
                            Hi I'm Sean and I'm currently a backend Software Engineer working at PayPal Singapore. I'm wellversed software enginner (obviosuly), machine learning
                            practioner and I love to create cool stuff.
                        </p>
                        <div className="flex justify-center mt-8">
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
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <img
                            className="object-cover object-center rounded"
                            alt="hero"
                            src={Profile}
                        />
                        </div>
                </div>
            </section>
        )
    }
}
