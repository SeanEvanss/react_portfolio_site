import React from 'react'
import { ArrowRightIcon } from '@heroicons/react/solid'

export default function Navbar(){
        

        return (
            <header className="bg-gray-800 md:sticky top-0 z-10">
                <div className="flex xl:p-6 md:p-3 flex-row items-center">
                    <div className="title-font font-medium text-white mb-4 md:mb-0">
                        <a href="#landing" className="ml-3 text-xl">
                            Sean Tang
                        </a>
                    </div>
                    <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-5 flex flex-wrap flex-row items-center justify-center mb-4 md:mb-0">
                        <a href="#skills" className="hover:text-white mr-5">
                            Skills
                        </a>
                        <a href="#projects" className="hover:text-white mr-5">
                            Projects
                        </a>
                        <a href="#contact" className="hover:text-white mr-5">

                        </a>
                    </nav>
                    <a href="https://github.com/SeanEvanss/react_portfolio_site"
                        className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mb-4 md:mb-0 hover:text-white mr-5">
                        See how this site was made
                        <ArrowRightIcon className="w-4 h-4 ml-1" />
                    </a>
                </div>
            </header>
        )
    
}