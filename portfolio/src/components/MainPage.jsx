import { useState } from "react";
import About from "./About";
import Skills from "./Skills"
import Projects from "./Projects"
import Contact from "./Contact";
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from 'react-icons/fa';

function MainPage() {
    const [showCards, setShowCards] = useState(false);
   
    
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
                        <motion.button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() =>setShowCards(!showCards)}
                        >
                            Connect Now
                        </motion.button>
                    </motion.div>
                    {showCards && (
                    <div className="mt-8 flex flex-wrap justify-center space-x-4">
                        <motion.a
                            href="https://www.linkedin.com/in/prakhar-gupta-2a1349161?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white p-4 rounded-lg shadow-lg text-blue-500"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            style={{ color: '#0077B5' }}
                        >
                            <FaLinkedin size={30} />
                        </motion.a>
                        <motion.a
                            href="https://github.com/iamprakhar27"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white p-4 rounded-lg shadow-lg text-blue-500"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            style={{ color: '#181717' }}
                        >
                            <FaGithub size={30} />
                        </motion.a>
                        <motion.a
                            href="https://x.com/the21immortals?t=2MtfrBOxYMYaIZFOYy_iJg&s=09"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white p-4 rounded-lg shadow-lg text-blue-500"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            style={{ color: '#1DA1F2' }}
                        >
                            <FaTwitter size={30} />
                        </motion.a>
                        <motion.a
                            href="mailto:prakharofficial17@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white p-4 rounded-lg shadow-lg text-blue-500"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            style={{ color: '#D44638' }} 
                        >
                            <FaEnvelope size={30} />
                        </motion.a>
                    </div>
                )}
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