import React, { useState } from 'react'


export default function Contact() {
    //const [name, setName] = useState("");
    //const [email, setEmail] = useState("");
    //const [message, setMessage] = useState("");

    return (
        <section id="contact" className="relative">
            <div className="container mx-auto px-5 py-10 flex sm:flex-nowrap flex-wrap">
                <div className="lg:w-2/3 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                    <iframe
                        className="absolute inset-0"
                        title="map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.6977609659884!2d103.76035931523855!3d1.3579652990095927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da104e31056721%3A0x1c0d98f392bad52b!2s92%20Hillview%20Ave%2C%20Singapore%20669592!5e0!3m2!1sen!2ssg!4v1635175133918!5m2!1sen!2ssg"
                        width="100%"
                        height="100%"
                        loading="lazy"
                        style={{ border: 0 }}
                    />
                    <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
                        <div className="lg:w-1/2 px-6">
                            <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                                ADDRESS
                            </h2>
                            <p className="mt-1">
                                92 Hillview Avenue <br />
                                S(669592)
                            </p>
                        </div>
                        <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                            <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                                EMAIL
                            </h2>
                            <h2 className="text-indigo-400 leading-relaxed">
                                1996sean@gmail.com
                            </h2>
                        </div>
                    </div>
                </div>
                <form
                    className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0"
                    title="form">
                    <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font" >
                        Contact me
                    </h2>
                </form>

            </div>

        </section>
    )

}
