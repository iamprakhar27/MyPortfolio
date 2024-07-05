import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useState } from "react";



function Contact() {
  const [showCards, setShowCards] = useState(false);

  return (
    <div
      name="contact"
      className="relative min-h-screen w-full flex flex-col items-center justify-center bg-gray-800 p-8 bg-contain bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/img0.jpg')" }}
    >
      <div className="absolute inset-0 bg-black opacity-80"></div>
      <div className="relative container mx-auto mt-5 mb-4 md:mt-10 md:mb-0 z-10">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-500 text-center underline decoration-2 underline-offset-8 pb-2">
          Connect With Me
        </h1>

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
        
      </div>
    </div>
  );
}

export default Contact;
