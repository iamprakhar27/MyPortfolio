import { NavLink } from "react-router-dom";

function About() {
    return (
        <>
            <div name='about' className="relative h-screen w-full flex flex-col md:flex-row items-start justify-start bg-gray-800 p-8 bg-contain bg-center bg-no-repeat" style={{ backgroundImage: "url('/images/img3.jpg')" }}>
                <div className="absolute inset-0 bg-black opacity-80"></div>
                <div className="relative container mx-auto mt-5 mb-5 md:mt-15 md:mb-0 z-10">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                        <div className="col-span-12 md:col-span-6 text-right">
                            <h1 className="text-4xl md:text-5xl font-bold text-blue-500 underline decoration-2 underline-offset-8 pb-2">
                                About Me
                            </h1>
                            <span className="text-4xl md:text-5xl font-bold text-blue-200 mt-4 block ">
                                Hello, I'm Prakhar Gupta Welcome! Feel free to explore.
                            </span>
                        </div>
                        <div className="col-span-12 md:col-span-6 mt-10 md:mt-20">
                            <span className="text-sm md:text-lg font-bold text-blue-200">
                                As a dedicated and innovative MERN stack web developer, I specialize in creating dynamic, responsive, and user-friendly web applications. With a strong proficiency in MongoDB, Express.js, React, and Node.js, I bring ideas to life through seamless full-stack development.
                                During my 5-month industrial training in MCA, I developed a project that significantly enhanced my web application skills. You can explore this project on my <NavLink to="https://github.com/iamprakhar27/Life-Line-portal/">Github</NavLink>
                                With a background in Bachelor of Computer Applications (BCA), I possess strong skills in web application development, database management, software development, data structures, and computer networking. Additionally, I also have a keen interest in cybersecurity and ethical hacking, focusing on maintaining safety and security across the web.
                            </span>
                        </div>
                    </div> 
                </div> 
                 
            </div>
        </>
    );
}

export default About;