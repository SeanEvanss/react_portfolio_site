import React, { useState } from "react";
import { InboxIcon } from "@heroicons/react/solid";

export default function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");


    //For anyone wondering why I had a discrete function for onNameUpdate,
    //it's because I wanted to show the diff between inline and discrete fucntions to do the same thing.        
    /**
    @param {Event} e
    */
    const onNameUpdate = (e) => {
        setName(e.target.value);
    }

    //on form submission
    const handleSubmit = (e) => {
        //Prevents the browser from executing the default action of the form (in this case, reloading the page)
        e.preventDefault();
        //Yes, I will change this to the actual API endpoint during production.
        const URL = "http://localhost:8080/users"
        const requestOptions = {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'apikey': process.env.REACT_APP_API_KEY,
            },
            body: JSON.stringify({ name, email, message })
        };
        //The actual API request based on our supplied URL and request options
        fetch(URL, requestOptions)
            .then(response => alert("Message sent! I will reach out to you ASAP"))
            .catch(error => console.log("Form submission error: ", error));
        //Resets our form upon submission
        e.target.reset();
    }

    return (
        <section id="contact">
            <div className="container mx-auto px-5 py-5 flex justify-center">
                <form
                    className="lg:w-2/3 md:w-1/2 flex flex-col w-full md:py-8 mt-8 md:mt-0 items-center"
                    title="form"
                    onSubmit={handleSubmit}>
                    <InboxIcon className="w-20 text-gray-200" />
                    <h2 className="text-gray-200 sm:text-4xl text-3xl mb-5 font-medium title-font" >
                        Contact me
                    </h2>
                    <p className="text-center"> 
                        Thanks for taking the time to reach out! I always appreciate any opportunities or even potential collaborations.
                        <br />
                        Feel free to drop your contact info and message below and I will get back to you as soon as I can.
                    </p>
                    <div className="flex flex-col w-full justify-center">
                        <h3 className="text-white md:mr-5 leading-7">
                            Name:
                        </h3>
                        <input type="text"
                            id="name"
                            name="name"
                            className="w-full text-gray-800 mb-4 rounded border-2 border-yellow-500"
                            onChange={onNameUpdate} />

                    </div>
                    <div className="flex flex-col w-full justify-center">
                        <h3 className="text-white md:mr-5 leading-7">
                            Email:
                        </h3>
                        <input type="text"
                            id="name"
                            name="name"
                            className="w-full text-gray-800 mb-4 rounded border-2 border-yellow-500"
                            onChange={(e) => { setEmail(e.target.value) }} />

                    </div>
                    <div className="flex flex-col w-full justify-center">
                        <h3 className="text-white md:mr-5 leading-7">
                            Message:
                        </h3>
                        <textarea type="text"
                            id="message"
                            name="message"
                            className=" h-32 w-full text-gray-800 mb-4 rounded border-2 border-yellow-500"
                            onChange={(e) => { setMessage(e.target.value) }} />

                    </div>
                    <button type="submit" className="py-2 px-4 rounded text-xl hover:bg-gray-900 hover:text-white focus:outline-none">
                        Submit
                    </button>
                </form>

            </div>

        </section>
    )

}
