import React from 'react'
import { ArrowRightIcon } from '@heroicons/react/solid'
import { Link } from 'react-router-dom'
import { Link as LinkScroller, animateScroll as scroll } from "react-scroll";

export default function Navbar() {
    
    return (
        <header className="bg-pure_black md:sticky top-0 z-10 shadow-lg shadow-custom_orange/80  hover:shadow-custom_orange/50">
            <div className="flex xl:p-6 md:p-3 flex-row items-center">
                <div className="title-font font-medium text-pure_white mb-4 md:mb-0">
                    <Link to="/react_portfolio_site/" onClick={scroll.scrollToTop} className="ml-3 text-xl">
                        Sean Tang
                    </Link>
                </div>
                <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-5 flex flex-wrap flex-row items-center justify-center mb-4 md:mb-0">
                    <LinkScroller
                        to="skills"
                        activeClass="active"
                        smooth={true}
                        spy={true}
                        duration={500}
                        offset={-100}
                        className="hover:text-pure_white mr-5">
                        Skills
                    </LinkScroller>
                    <LinkScroller
                        to="projects"
                        activeClass="active"
                        smooth={true}
                        spy={true}
                        duration={500}
                        offset={-100}
                        className="hover:text-pure_white mr-5">
                        Projects
                    </LinkScroller>
                    <LinkScroller
                        to="contact"
                        activeClass="active"
                        smooth={true}
                        spy={true}
                        duration={500}
                        offset={-100}
                        className="hover:text-pure_white mr-5">
                        Contact
                    </LinkScroller>
                    
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