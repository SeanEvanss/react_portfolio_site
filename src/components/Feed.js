import React, { useEffect } from 'react'
import { feedCards } from './data';
import "./styles/Landing.css"




export default function Feed() {
    //Function that allows us to use end of lines in our text for formatting.
    function NewLineText(props){
        const text= props.text;
        const lines = text.split('\n').map(line => <p>{line}</p>);
        return lines;
    }


    return (
        <section id="feed" >
            <div id="landing_div" className="flex flex-col h-screen justify-center items-center">
                <h1 className='text-pure_white p-10'>
                    This is the Feed Page<br />
                    work in progress...
                </h1>
                <div className="flex flex-wrap md:w-1/2 w-2/3">
                {feedCards.map((card) => (
                    <div className='relative h-50 bg-pure_white p-8 rounded-md'>                        
                        <h1 className='text-custom_orange text-xl font-bold'>
                            {card.title}
                        </h1>
                        <h2 className='text-custom_gray text-sm font-bold pb-5'>
                            {card.upload_time}
                        </h2>
                        <img src={card.image} className='rounded-md mb-5'/>
                        <text className="leading-relaxed text-pure_black md:text-base">
                            <NewLineText text={card.description}/>
                        </text>
                        
                    </div>
                ))}
                </div>

            </div>
        </section>
    )
}
