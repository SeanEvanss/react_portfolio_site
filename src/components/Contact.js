import React, { useState } from "react";


export default function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    //on form submission
    /**
    @param {Event} e
    */
    const onNameUpdate = (e) => {
        setName(e.target.value);
        console.log(name)
    }

    return (
        <section id="contact">
            <div className="container mx-auto px-5 py-10 flex justify-center">
                <form
                    className="lg:w-2/3 md:w-1/2 flex flex-col w-full md:py-8 mt-8 md:mt-0 items-center"
                    title="form">
                    <h2 className="text-white sm:text-4xl text-3xl mb-5 font-medium title-font" >
                        Contact me
                    </h2>
                    <div className="flex flex-col w-full justify-center">
                        <h3 className="text-white md:mr-5 leading-7">
                            Name: 
                        </h3>
                        <input type="text"
                            id="name"
                            name="name"
                            className="w-full text-gray-800 mb-4 rounded border-2 border-yellow-500"
                            onChange={onNameUpdate}/>

                    </div>
                    <div className="flex flex-col w-full justify-center">
                        <h3 className="text-white md:mr-5 leading-7">
                            Email: 
                        </h3>
                        <input type="text"
                            id="name"
                            name="name"
                            className="w-full text-gray-800 mb-4 rounded border-2 border-yellow-500"
                            onChange={(e)=>{setEmail(e.target.value)}}/>

                    </div>
                    <div className="flex flex-col w-full justify-center">
                        <h3 className="text-white md:mr-5 leading-7">
                            Name: 
                        </h3>
                        <textarea type="text"
                            id="name"
                            name="name"
                            className=" h-32 w-full text-gray-800 mb-4 rounded border-2 border-yellow-500"
                            onChange={(e)=>{setMessage(e.target.value)}}/>

                    </div>
                    <button type="submit" className="py-1 px-3 rounded hover:bg-gray-900 hover:text-white focus:outline-none">
                        Submit
                    </button>
                </form>

            </div>

        </section>
    )

}
