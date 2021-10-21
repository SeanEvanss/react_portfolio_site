import React, { Component } from 'react'

export default class Navbar extends Component {
    render() {
        return (
            <header className="bg-gray-800 md:sticky top-0 z-10">
                <div className="container mx-auto flex flex-wrap xl:p-5 md:p-3 flex-row items-center">
                    <div className="title-font font-medium text-white mb-4 md:mb-0">
                        <a href="#landing" className="ml-3 text-xl">
                            Sean Tang
                        </a>
                    </div>
                    <nav className="md: mr-auto md:ml-4 md:py-1 md:pl-5 flex flex-wrap flex-row items-center justify-center">
                        <a href="#skills" className="hover:text-white mr-5">
                            Skills
                        </a>
                        <a href="#projects"  className="hover:text-white mr-5">
                            Projects
                        </a>
                        <a href="#contact"  className="hover:text-white mr-5">
                            
                        </a>
                    </nav>
                </div>
            </header>
        )
    }
}