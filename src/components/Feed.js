import React, { useEffect } from 'react'
import { feedCards } from './data';
import "./styles/Landing.css"




export default function Feed() {

    return (
        <section id="feed" >
            <div id="landing_div" className="flex flex-col h-screen justify-center items-center">
                <h1 className='text-pure_white p-10'>
                    This is the Feed Page<br />
                    work in progress...
                </h1>
                <div className="flex flex-wrap md:w-1/2 w-2/3">
                {feedCards.map((card) => (
                    <div className='relative h-50 bg-pure_white p-10 rounded-md'>
                        <img src={card.image}/>
                        <h1 className='text-custom_orange text-xl pb-5'>
                            {card.title}
                        </h1>
                        <text className="leading-relaxed text-pure_black md:text-base">
                        
                            {card.description}                                                
                        </text>
                        
                    </div>
                ))}
                </div>

            </div>
        </section>
    )
}
