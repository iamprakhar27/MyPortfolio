import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

function Contact() {
  return (
    <div
      name="contact"
      className="relative min-h-screen w-full flex flex-col items-center justify-center bg-gray-800 p-4 md:p-8 bg-contain bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/img0.jpg')" }}
    >
      <div className="absolute inset-0 bg-black opacity-80"></div>
      <div className="relative container mx-auto mt-5 mb-4 md:mt-5 md:mb-0 z-10 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-500 underline decoration-2 underline-offset-8 pb-2">
          Connect With Me
        </h1>
        <div className="mt-8 flex flex-wrap justify-center space-x-4">
          <NavLink
            to="https://www.linkedin.com/in/prakhar-gupta-2a1349161?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white p-4 rounded-lg shadow-lg transition-transform transform hover:scale-110"
            style={{ color: '#0077B5', boxShadow: `0 4px 8px rgba(66, 133, 244, 0.6)` }}>
            <FaLinkedin size={30} />
          </NavLink>
          <NavLink to="https://github.com/iamprakhar27"  target="_blank" rel="noopener noreferrer"  className="bg-white p-4 rounded-lg shadow-lg transition-transform transform hover:scale-110" style={{ color: '#181717' , boxShadow: `0 4px 8px rgba(124, 124, 124, 0.6)`}} >
            <FaGithub size={30} />
          </NavLink>

          <NavLink to="https://x.com/the21immortals?t=2MtfrBOxYMYaIZFOYy_iJg&s=09" target="_blank" rel="noopener noreferrer" className="bg-white p-4 rounded-lg shadow-lg transition-transform transform hover:scale-110" style={{ color: '#1DA1F2',boxShadow: `0 4px 8px rgba(66, 133, 244, 0.6)` }}>
            <FaTwitter size={30} />
          </NavLink>

          <NavLink to="mailto:prakharofficial17@gmail.com" target="_blank" rel="noopener noreferrer" className="bg-white p-4 rounded-lg shadow-lg transition-transform transform hover:scale-110" style={{ color: '#D44638',boxShadow: `0 4px 8px rgba(227, 76, 38, 0.6)` }}>
            <FaEnvelope size={30} />
          </NavLink>
          
        </div>
      </div>
    </div>
  );
}

export default Contact;
