function About() {
    return ( 
        <>
        <div name='about' className="relative h-screen w-full flex flex-col md:flex-row items-start justify-start bg-gray-800 p-8 bg-contain bg-center bg-no-repeat" style={{ backgroundImage: "url('/images/img3.jpg')" }}>
                <div className="absolute inset-0 bg-black opacity-80"></div>
                <div className="relative container mx-auto mt-15 mb-4 md:mt-56 md:mb-0 z-10">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                        <div className="col-span-12 md:col-span-6 text-right">
                            <h1 className="text-4xl md:text-5xl font-bold text-blue-500 underline decoration-2 underline-offset-8 pb-2">
                                About Me
                            </h1>
                            <span className="text-4xl md:text-5xl font-bold text-blue-200 mt-4 block ">
                                Hi, I'm Prakhar Gupta Nice to meet you take a look around.
                            </span>
                        </div>
                        <div className="col-span-12 md:col-span-6 mt-10 md:mt-20">
                            <span className="text-sm md:text-lg font-bold text-blue-200">
                                As a dedicated & innovative MERN stack web developer, I specialize in creating dynamic, responsive, and user-friendly web applications.
                                With a robust understanding of MongoDB, Express.js, React and Node.js, I bring ideas to life through seamless full-stack development.
                            </span>
                        </div>
                    </div>
                </div>
            </div>    
        </>
     );
}

export default About;