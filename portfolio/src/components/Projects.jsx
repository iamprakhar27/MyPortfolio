import { NavLink } from "react-router-dom"

function Projects() {
    return (
        <>
            <div className="relative h-screen w-full flex flex-col md:flex-row items-start justify-start bg-gray-800 p-8 bg-contain bg-right bg-no-repeat" style={{ backgroundImage: "url('/images/img6.jpg')" }}>
                <div className="absolute inset-0 bg-black opacity-80"></div>
                <div className="relative container mx-auto mt-5 mb-4 md:mt-10 md:mb-0 z-10">
                    <h1 className="text-4xl md:text-5xl font-bold text-blue-500 underline decoration-2 underline-offset-8 pb-2">
                        Projects
                    </h1>
                    <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-white">

                        <div className="group relative max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 transform transition-transform hover:scale-105 hover:shadow-custom-cyan">
                            <NavLink to="#">
                                <img className="rounded-t-lg" src={"/images/img7.jpg"} alt="Project 1" />
                            </NavLink>
                            <div className="p-5 relative z-20">
                                <NavLink to="#">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Portfolio</h5>
                                </NavLink>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Brief description of the project highlighting key features and technologies used.</p>
                                <NavLink to="#" className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 z-30">
                                    Learn More
                                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                                </NavLink>
                            </div>
                            <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-5 rounded-lg">
                                <div className="text-center text-white z-10">
                                    <h5 className="mb-2 text-2xl font-bold">Portfolio</h5>
                                    <p className="mb-3">Detailed project information, technologies used, and other relevant details.</p>
                                </div>
                            </div>
                        </div>

                        <div className="group relative max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 transform transition-transform hover:scale-105 hover:shadow-custom-emerald">
                            <NavLink to="#">
                                <img className="rounded-t-lg" src={"/images/img8.jpeg"} alt="Project 2" />
                            </NavLink>
                            <div className="p-5 relative z-20">
                                <NavLink to="#">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white underline">Life Line Portal</h5>
                                </NavLink>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Life-Line portal is a web-based platform that connects blood donors with hospitals, receivers and medical facilities in need of blood and donations.</p>
                                <NavLink to="https://github.com/iamprakhar27/Life-Line-portal/" className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 z-30">
                                    Learn More
                                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                                </NavLink>
                            </div>
                            <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-5 rounded-lg">
                                <div className="text-center text-white z-10">
                                    <h5 className="mb-2 text-2xl font-bold underline">Technologies Used</h5>
                                    <p className="mb-3">
                                        This project was created using the MERN stack, which includes MongoDB as a NoSQL database used for storing data, Express.js as a web application framework for Node.js, React.js as a JavaScript library for building user interfaces, and Node.js as a JavaScript runtime environment for server-side programming. 
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>


        </>
    );
}

export default Projects;