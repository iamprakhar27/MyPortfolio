// import { NavLink } from "react-router-dom"
import { useState } from "react";
import About from "./About";
import Skills from "./Skills"
import Projects from "./Projects"
import Contact from "./Contact";
// import Education from "./Education";

function MainPage() {
    const [showSocials, setShowSocials] = useState(false);

    const handleConnectClick = () => {
        setShowSocials(!showSocials);
    };
    return (
        <>
            {/* hero section starts here */}
            <div className="relative h-screen w-full flex flex-col md:flex-row items-start justify-start bg-slate-900 p-8 bg-contain bg-right bg-no-repeat" style={{ backgroundImage: "url('/images/img1.jpg')" }}>
                <div className="absolute inset-0 bg-black opacity-60"></div>
                <div className="relative container mx-auto mt-15 mb-4 md:mt-56 md:mb-0 z-10">
                    <div className="relative w-full max-w-4xl p-12 bg-white bg-opacity-5 shadow-lg rounded-lg" style={{ boxShadow: "0 5px 7px rgba(0, 0, 0, 0.2), 0 2px 4px rgba(0, 0, 0, 0.16), 0 0 11px rgba(66, 153, 225, 0.8)" }}>
                        <h1 className="text-4xl md:text-5xl font-bold text-blue-300">
                            Hello, I am
                        </h1>
                        <h1 className="text-6xl md:text-8xl font-bold text-blue-500">
                            Prakhar Gupta
                        </h1>
                        <h1 className="text-lg md:text-xl font-bold text-blue-300">
                            MERN Stack Developer & A Cybersecurity Enthusiast
                        </h1>
                        <div className="flex mt-4">
                            <a href="/download/Prakhar-Gupta-Resume.pdf" download className="inline-flex mr-4">
                                <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-full inline-flex items-center transform transition-transform hover:translate-y-1 hover:shadow-2xl hover:-translate-y-1 hover:scale-105 shadow-lg" style={{ boxShadow: "0 4px 14px 0 rgba(66, 153, 225, 0.6)" }}>
                                    <span>Download CV</span>
                                </button>
                            </a>
                            <button
                                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-full inline-flex items-center transform transition-transform hover:translate-y-1 hover:shadow-2xl hover:-translate-y-1 hover:scale-105 shadow-lg" style={{ boxShadow: "0 4px 14px 0 rgba(66, 153, 225, 0.6)" }}
                                onClick={handleConnectClick} >
                                <span>Connect Now</span>
                            </button>
                        </div>
                        {showSocials && (
                            <div className="flex justify-center mt-4 space-x-4 transition-all duration-300 ease-in-out">
                                <a href="https://x.com/the21immortals?t=2MtfrBOxYMYaIZFOYy_iJg&s=09" className="bg-[#1DA1F2] text-white rounded-full p-3 transform transition-transform hover:scale-150 hover:shadow-lg" style={{ boxShadow: "0 4px 14px 0 rgba(66, 153, 225, 0.6)" }}>
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M23.954 4.569c-.885.392-1.83.656-2.825.775 1.014-.609 1.794-1.574 2.163-2.723-.949.555-2.005.959-3.127 1.184-.896-.957-2.17-1.555-3.591-1.555-2.717 0-4.92 2.2-4.92 4.917 0 .39.043.765.127 1.125-4.09-.205-7.719-2.164-10.141-5.144-.426.729-.666 1.573-.666 2.475 0 1.71.87 3.223 2.191 4.107-.807-.026-1.566-.248-2.23-.616v.061c0 2.386 1.697 4.377 3.946 4.828-.414.111-.849.171-1.296.171-.316 0-.623-.03-.921-.086.631 1.953 2.445 3.376 4.6 3.416-1.68 1.32-3.8 2.104-6.102 2.104-.396 0-.788-.023-1.175-.067 2.188 1.402 4.768 2.221 7.548 2.221 9.142 0 14.307-7.721 14.307-14.417 0-.22-.004-.438-.014-.655.983-.71 1.834-1.597 2.506-2.607z" />
                                    </svg>
                                </a>
                                <a href="https://www.linkedin.com/in/prakhar-gupta-2a1349161?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app " className="bg-[#0077B5] text-white rounded-full p-3 transform transition-transform hover:scale-150 hover:shadow-2xl shadow-lg" style={{ boxShadow: "0 4px 14px 0 rgba(66, 153, 225, 0.6)" }}>
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M22.225 0H1.771C.791 0 0 .781 0 1.759v20.483C0 23.219.791 24 1.771 24h20.451C23.209 24 24 23.219 24 22.242V1.759C24 .781 23.209 0 22.225 0zM7.125 20.452H3.56V9H7.13v11.452h-.005zM5.345 7.684c-1.146 0-2.078-.932-2.078-2.079s.931-2.079 2.078-2.079c1.147 0 2.078.932 2.078 2.079-.001 1.147-.932 2.079-2.078 2.079zm15.107 12.768h-3.561v-5.6c0-1.334-.025-3.051-1.858-3.051-1.859 0-2.144 1.451-2.144 2.955v5.696h-3.561V9h3.422v1.561h.05c.478-.901 1.643-1.85 3.379-1.85 3.615 0 4.28 2.379 4.28 5.472v6.269z" />
                                    </svg>
                                </a>
                                <a href="https://github.com/iamprakhar27" className="bg-[#333] text-white rounded-full p-3 transform transition-transform hover:scale-150 hover:shadow-2xl shadow-lg" style={{ boxShadow: "0 4px 14px 0 rgba(66, 153, 225, 0.6)" }}>
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 .5C5.372.5 0 5.872 0 12.499c0 5.301 3.438 9.798 8.207 11.388.599.112.793-.26.793-.577 0-.285-.01-1.04-.015-2.042-3.338.727-4.042-1.612-4.042-1.612-.545-1.383-1.333-1.75-1.333-1.75-1.09-.744.083-.729.083-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.809 1.304 3.49.997.108-.775.418-1.304.76-1.605-2.664-.303-5.466-1.332-5.466-5.931 0-1.31.47-2.381 1.236-3.221-.125-.303-.535-1.522.116-3.176 0 0 1.008-.322 3.3 1.23a11.521 11.521 0 013.003-.403c1.018.004 2.042.137 3.003.403 2.291-1.552 3.297-1.23 3.297-1.23.654 1.654.244 2.873.119 3.176.769.84 1.235 1.911 1.235 3.221 0 4.61-2.807 5.625-5.478 5.921.43.371.815 1.102.815 2.222 0 1.605-.014 2.897-.014 3.293 0 .321.192.694.801.576C20.565 22.293 24 17.8 24 12.499 24 5.872 18.627.5 12 .5z" />
                                    </svg>
                                </a>
                                {/* <a href="https://instagram.com" className="bg-[#E1306C] text-white rounded-full p-3 transform transition-transform hover:scale-150 hover:shadow-2xl shadow-lg" style={{ boxShadow: "0 4px 14px 0 rgba(66, 153, 225, 0.6)" }}>
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.332 3.608 1.308.974.974 1.246 2.242 1.308 3.608.059 1.266.07 1.646.07 4.851 0 3.205-.012 3.585-.07 4.851-.062 1.366-.332 2.633-1.308 3.608-.975.974-2.242 1.246-3.608 1.308-1.266.059-1.646.07-4.851.07-3.205 0-3.585-.012-4.851-.07-1.366-.062-2.633-.332-3.608-1.308-.974-.975-1.246-2.242-1.308-3.608-.059-1.266-.07-1.646-.07-4.851 0-3.205.012-3.585.07-4.851.062-1.366.332-2.633 1.308-3.608.975-.974 2.242-1.246 3.608-1.308C8.415 2.175 8.795 2.163 12 2.163zm0-2.163C8.741 0 8.332.01 7.052.07 5.775.129 4.538.391 3.513 1.416 2.488 2.441 2.225 3.678 2.166 4.955.107 6.201 0 6.613 0 12c0 5.387.107 5.799.166 7.048.059 1.277.322 2.514 1.347 3.539 1.025 1.025 2.262 1.288 3.539 1.347 1.249.059 1.661.166 7.048.166 5.387 0 5.799-.107 7.048-.166 1.277-.059 2.514-.322 3.539-1.347 1.025-1.025 1.288-2.262 1.347-3.539.059-1.249.166-1.661.166-7.048 0-5.387-.107-5.799-.166-7.048-.059-1.277-.322-2.514-1.347-3.539-1.025-1.025-2.262-1.288-3.539-1.347C15.668.01 15.259 0 12 0zM12 5.838a6.162 6.162 0 100 12.324A6.162 6.162 0 0012 5.838zm0 10.167a4.005 4.005 0 110-8.01 4.005 4.005 0 010 8.01zm6.406-11.846a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" />
                                    </svg>
                                </a>
                                <a href="https://facebook.com" className="bg-[#1877F2] text-white rounded-full p-3 transform transition-transform hover:scale-150 hover:shadow-2xl shadow-lg" style={{ boxShadow: "0 4px 14px 0 rgba(66, 153, 225, 0.6)" }}>
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24h11.495v-9.294H9.692V11.05h3.128V8.289c0-3.1 1.892-4.787 4.655-4.787 1.325 0 2.464.099 2.794.143v3.24h-1.917c-1.504 0-1.795.715-1.795 1.762v2.31h3.59l-.467 3.656h-3.123V24h6.116C23.407 24 24 23.407 24 22.675V1.325C24 .593 23.407 0 22.675 0z" />
                                    </svg>
                                </a> */}
                                <a href="mailto:prakharofficial17@gmail.com" className="bg-[#D14836] text-white rounded-full p-3 transform transition-transform hover:scale-110 hover:shadow-2xl shadow-lg" style={{ boxShadow: "0 4px 14px 0 rgba(66, 153, 225, 0.6)" }}>
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 12.713l11.996-8.314c-.044-.41-.195-.804-.441-1.148-.382-.53-.95-.883-1.602-1.045-.463-.11-.933-.207-1.396-.297-.897-.176-1.79-.312-2.686-.394-2.124-.198-4.243-.18-6.365-.001-.922.078-1.842.215-2.756.394-.484.088-.963.191-1.441.301-.664.16-1.227.511-1.613 1.043-.248.346-.401.742-.448 1.153L12 12.713zm-1.571-2.058l-7.975-5.532c-.063-.044-.126-.09-.191-.129-.037.174-.063.353-.079.533-.108 1.275-.15 2.553-.13 3.83.017 1.09.079 2.179.183 3.266.104 1.062.238 2.121.411 3.174.225 1.347.497 2.688.81 4.024.309 1.309.667 2.606 1.082 3.883.023.072.057.14.087.209h17.995c.027-.07.061-.138.086-.209.412-1.273.768-2.563 1.082-3.869.314-1.344.586-2.693.814-4.048.171-1.038.304-2.082.406-3.133.104-1.088.166-2.179.183-3.268.02-1.27-.017-2.54-.11-3.806a8.503 8.503 0 00-.086-.533c-.066.037-.128.084-.191.128L13.571 10.655z" />
                                    </svg>
                                </a>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            {/* hero section ends here */}

            <About />
            {/* <Education/> */}
            <Skills />
            <Projects/>
            <Contact/>

        </>
    );
}

export default MainPage;