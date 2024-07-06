
function Skills() {
  return (
    <>
      <div name="skills" className="relative min-h-screen w-full flex flex-col items-center justify-start bg-gray-800 p-8 bg-contain bg-center bg-no-repeat" style={{ backgroundImage: "url('/images/img4.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-80"></div>
        <div className="relative container mx-auto mt-5 z-10 text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-500 underline decoration-2 underline-offset-8 pb-2">
            Skills
          </h1>
          <span className="text-sm md:text-lg font-bold text-blue-200">
            Here are some skills I have gained, which have helped me in creating various projects.

          </span>
          <div className=" mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-white">
            <div className="bg-gray-900 bg-opacity-40 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-110" style={{ boxShadow: '0 4px 8px rgba(227, 76, 38, 0.6)' }}>
              <div className="text-3xl mb-4">
                <img src="/images/html5.png" alt="HTML" className="mx-auto w-12 h-12" />
              </div>
              <h3 className="text-2xl font-semibold">HTML</h3>
              <p className="mt-2">Building structured and semantic web pages using HTML5.</p>
            </div>

            <div className="bg-gray-900 bg-opacity-40 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-110" style={{ boxShadow: '0 4px 8px rgba(38, 77, 228, 0.6)' }}>
              <div className="text-3xl mb-4">
                <img src="/images/css3.svg" alt="CSS" className="mx-auto w-12 h-12" />
              </div>
              <h3 className="text-2xl font-semibold">CSS</h3>
              <p className="mt-2">Styling websites with CSS3 for a visually appealing design.</p>
            </div>

            <div className="bg-gray-900 bg-opacity-40 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-110" style={{ boxShadow: '0 4px 8px rgba(247, 223, 30, 0.6)' }}>
              <div className="text-3xl mb-4">
                <img src="/images/javascript.png" alt="JavaScript" className="mx-auto w-12 h-12" />
              </div>
              <h3 className="text-2xl font-semibold">JavaScript</h3>
              <p className="mt-2">Creating dynamic and interactive web experiences with JavaScript.</p>
            </div>

            <div className="bg-gray-900 bg-opacity-40 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-110" style={{ boxShadow: '0 4px 8px rgba(138, 42, 240, 0.6)' }}>
              <div className="text-3xl mb-4">
                <img src="/images/bootstrap.svg" alt="Bootstrap" className="mx-auto w-12 h-12" />
              </div>
              <h3 className="text-2xl font-semibold">Bootstrap</h3>
              <p className="mt-2">Utilizing Bootstrap for responsive and mobile-first web development.</p>
            </div>

            <div className="bg-gray-900 bg-opacity-40 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-110" style={{ boxShadow: '0 4px 8px rgba(56, 189, 248, 0.6)' }}>
              <div className="text-3xl mb-4">
                <img src="/images/tailwind.png" alt="TailwindCSS" className="mx-auto w-12 h-12" />
              </div>
              <h3 className="text-2xl font-semibold">TailwindCSS</h3>
              <p className="mt-2">Building modern and utility-first CSS frameworks with TailwindCSS.</p>
            </div>

            <div className="bg-gray-900 bg-opacity-40 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-110" style={{ boxShadow: '0 4px 8px rgba(97, 183, 82, 0.6)' }}>
              <div className="text-3xl mb-4">
                <img src="/images/mongodb.png" alt="MongoDB" className="mx-auto w-25 h-12" />
              </div>
              <h3 className="text-2xl font-semibold">MongoDB</h3>
              <p className="mt-2">Designing and managing NoSQL databases with MongoDB.</p>
            </div>

            <div className="bg-gray-900 bg-opacity-40 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-110" style={{ boxShadow: '0 4px 8px rgba(97, 218, 251, 0.6)' }}>
              <div className="text-3xl mb-4">
                <img src="/images/react.svg" alt="React.js" className="mx-auto w-12 h-12" />
              </div>
              <h3 className="text-2xl font-semibold">React.JS</h3>
              <p className="mt-2">Developing component-based user interfaces with React.js.</p>
            </div>

            <div className="bg-gray-900 bg-opacity-40 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-110" style={{ boxShadow: '0 4px 8px rgba(124, 124, 124, 0.6)' }}>
              <div className="text-3xl mb-4">
                <img src="/images/Expressjs.png" alt="Express.js" className="mx-auto w-25 h-12" />
              </div>
              <h3 className="text-2xl font-semibold">Express.JS</h3>
              <p className="mt-2">Creating RESTful APIs and web applications with Express.js.</p>
            </div>

            <div className="bg-gray-900 bg-opacity-40 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-110" style={{ boxShadow: '0 4px 8px rgba(102, 189, 94, 0.6)' }}>
              <div className="text-3xl mb-4">
                <img src="/images/node.png" alt="Node.js" className="mx-auto w-12 h-12" />
              </div>
              <h3 className="text-2xl font-semibold">Node.JS</h3>
              <p className="mt-2">Building scalable server-side applications using Node.js.</p>
            </div>

            <div className="bg-gray-900 bg-opacity-40 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-110" style={{ boxShadow: '0 4px 8px rgba(124, 124, 124, 0.6)' }}>
              <div className="text-3xl mb-4">
                <img src="/images/GitHub.png" alt="GitHub" className="mx-auto w-12 h-12" />
              </div>
              <h3 className="text-2xl font-semibold">GitHub</h3>
              <p className="mt-2">Version control and collaboration using GitHub.</p>
            </div>

            <div className="bg-gray-900 bg-opacity-40 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-110" style={{ boxShadow: '0 4px 8px rgba(240, 80, 50, 0.6)' }}>
              <div className="text-3xl mb-4">
                <img src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png" alt="Git" className="mx-auto w-12 h-12" />
              </div>
              <h3 className="text-2xl font-semibold">Git</h3>
              <p className="mt-2">Distributed version control system to track changes in source code.</p>
            </div>

            <div className="bg-gray-900 bg-opacity-40 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-110" style={{ boxShadow: '0 4px 8px rgba(66, 133, 244, 0.6)' }}>
              <div className="text-3xl mb-4">
                <img src="images/rest-api.png" alt="REST APIs" className="mx-auto w-25 h-25" />
              </div>
              <h3 className="text-2xl font-semibold">REST API's</h3>
              <p className="mt-2">Architectural style for designing networked applications.</p>
            </div>

            <div className="bg-gray-900 bg-opacity-40 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-110" style={{ boxShadow: '0 4px 8px rgba(55, 118, 171, 0.6)' }}>
              <div className="text-3xl mb-4">
                <img src="https://www.python.org/static/community_logos/python-logo-master-v3-TM.png" alt="Python" className="mx-auto w-30 h-12" />
              </div>
              <h3 className="text-2xl font-semibold">Python</h3>
              <p className="mt-2">High-level programming language for general-purpose programming.</p>
            </div>
          </div>

        </div>
      </div>

    </>
  );
}

export default Skills;