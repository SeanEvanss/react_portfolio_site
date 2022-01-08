import React from 'react'
import { ArrowRightIcon } from '@heroicons/react/solid'
import { Link } from 'react-router-dom'

export default function Navbar(){
        

        return (
            <header className="bg-pure_black md:sticky top-0 z-10">
                <div className="flex xl:p-6 md:p-3 flex-row items-center">
                    <div className="title-font font-medium text-pure_white mb-4 md:mb-0">
                        <Link to="/react_portfolio_site/"  className="ml-3 text-xl">
                            Sean Tang
                        </Link>                        
                    </div>
                    <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-5 flex flex-wrap flex-row items-center justify-center mb-4 md:mb-0">
                        <a href="#skills" className="hover:text-pure_white mr-5">
                            Skills
                        </a>
                        <a href="#projects" className="hover:text-pure_white mr-5">
                            Projects
                        </a>
                        <a href="#contact" className="hover:text-pure_white mr-5">
                            Contact
                        </a>
                        <Link to="/react_portfolio_site/project_feed/" className="hover:text-pure_white mr-5">
                            Feed page
                        </Link>
                    </nav>
                    <a href="https://github.com/SeanEvanss/react_portfolio_site"
                        className="inline-flex items-center bg-custom_gray border-0 text-pure_white py-1 px-3 focus:outline-none hover:bg-custom_beige rounded text-base mb-4 md:mb-0 hover:text-gray-400 mr-5">
                        See how this site was made
                        <ArrowRightIcon className="w-4 h-4 ml-1" />
                    </a>
                </div>
            </header>
        )
    
}