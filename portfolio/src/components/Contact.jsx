import { useState } from "react";
import axios from "axios"

function Contact() {

    const URL = "http://localhost:4000/addcontact"
    const [contact,setcontact] =  useState({name:"",email:"",message:""})
    const handleform = async (e) =>{
        e.preventDefault()

        try{
            const response = await axios.post(URL,contact)
            setcontact({name:"",email:"",message:""})
            console.log(response.data);

        }
        catch(error)
        {
            console.log("error handling data" + error);
        }
    }

    const handlechange = (e) =>{
        setcontact({...contact,[e.target.name]:e.target.value})
    }
    return (
        <>
            <div className="relative h-screen w-full flex flex-col md:flex-row items-start justify-start bg-gray-800 p-8 bg-contain bg-right bg-no-repeat" style={{ backgroundImage: "url('/images/img6.jpg')" }}>
                <div className="absolute inset-0 bg-black opacity-80"></div>
                <div className="relative container mx-auto mt-5 mb-4 md:mt-10 md:mb-0 z-10">

                    <h1 className="text-4xl md:text-5xl font-bold text-blue-500 text-center underline decoration-2 underline-offset-8 pb-2">
                        Contact Now
                    </h1>
                    <form onSubmit={handleform} className="mt-12 space-y-6 max-w-lg mx-auto bg-white bg-opacity-10 p-8 rounded-lg shadow-lg">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-white font-semibold">Name</label>
                            <input type="text" id="name" name="name" onChange={handlechange} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition-shadow duration-300 ease-in-out hover:scale-105 hover:shadow-custom-light-blue" />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-white font-semibold">Email</label>
                            <input type="email" id="email" name="email"  onChange={handlechange} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition-shadow duration-300 ease-in-out hover:scale-105 hover:shadow-custom-light-blue" />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-white font-semibold">Message</label>
                            <textarea id="message" name="message"  onChange={handlechange} rows="4" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition-shadow duration-300 ease-in-out hover:scale-105 hover:shadow-custom-light-blue"></textarea>
                        </div>
                        <div>
                            <button type="submit" className="w-full inline-flex justify-center py-2 px-4 border border-transparent text-sm font-semibold rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 shadow-custom-blue transform transition-transform hover:scale-105">
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Contact;