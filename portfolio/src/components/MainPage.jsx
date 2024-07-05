import About from "./About";
import Skills from "./Skills"
import Projects from "./Projects"
import Contact from "./Contact";
import { motion } from 'framer-motion';

function MainPage() {
   

    return (
        <> 
            <section name="home" className="hero-container relative h-screen w-full flex items-center justify-center bg-gray-800">
                <div className="absolute inset-0 bg-black opacity-70"></div>
                <motion.div
                    className="relative z-10 flex flex-col items-center text-center"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <motion.h1
                        className="text-4xl md:text-6xl font-bold text-white"
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                    >
                        Hi, I'm Prakhar Gupta
                    </motion.h1>
                    <motion.p
                        className="mt-4 text-lg md:text-2xl text-gray-300"
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 1 }}
                    >
                        MERN Stack Developer & Cybersecurity Enthusiast
                    </motion.p>
                    <motion.div
                        className="flex mt-8 space-x-4"
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 1.5 }}
                    >
                        <a href="/download/Prakhar-Gupta-CV.pdf" download>
                            <motion.button
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                Download CV
                            </motion.button>
                        </a>
                        
                    </motion.div>
              
                </motion.div>

                
            </section>
            <About />
            <Skills />
            <Projects />
            <Contact />

        </>
    );
}

export default MainPage;