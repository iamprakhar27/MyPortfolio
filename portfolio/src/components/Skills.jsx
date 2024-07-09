const skills = [
  {
    name: "HTML",
    description: "Building structured and semantic web pages using HTML5.",
    imageUrl: "/images/HTML5.png",
    boxShadowColor: "rgba(227, 76, 38, 0.6)"
  },
  {
    name: "CSS",
    description: "Styling websites with CSS3 for a visually appealing design.",
    imageUrl: "/images/CSS3.svg",
    boxShadowColor: "rgba(38, 77, 228, 0.6)"
  },
  {
    name: "JavaScript",
    description: "Creating dynamic and interactive web experiences with JavaScript.",
    imageUrl: "/images/javaScript.png",
    boxShadowColor: "rgba(247, 223, 30, 0.6)"
  },
  {
    name: "Bootstrap",
    description: "Utilizing Bootstrap for responsive and mobile-first web development.",
    imageUrl: "/images/Bootstrap.svg",
    boxShadowColor: "rgba(138, 42, 240, 0.6)"
  },
  {
    name: "TailwindCSS",
    description: "Building modern and utility-first CSS frameworks with TailwindCSS.",
    imageUrl: "/images/tailwind.png",
    boxShadowColor: "rgba(56, 189, 248, 0.6)"
  },
  {
    name: "MongoDB",
    description: "Designing and managing NoSQL databases with MongoDB.",
    imageUrl: "/images/mongodb.png",
    boxShadowColor: "rgba(97, 183, 82, 0.6)"
  },
  {
    name: "React.JS",
    description: "Developing component-based user interfaces with React.js.",
    imageUrl: "/images/React.svg",
    boxShadowColor: "rgba(97, 218, 251, 0.6)"
  },
  {
    name: "Express.JS",
    description: "Creating RESTful APIs and web applications with Express.js.",
    imageUrl: "/images/Expressjs.png",
    boxShadowColor: "rgba(124, 124, 124, 0.6)"
  },
  {
    name: "Node.JS",
    description: "Building scalable server-side applications using Node.js.",
    imageUrl: "/images/node.png",
    boxShadowColor: "rgba(102, 189, 94, 0.6)"
  },
  {
    name: "GitHub",
    description: "Version control and collaboration using GitHub.",
    imageUrl: "/images/GitHub.png",
    boxShadowColor: "rgba(124, 124, 124, 0.6)"
  },
  {
    name: "Git",
    description: "Distributed version control system to track changes in source code.",
    imageUrl: "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png",
    boxShadowColor: "rgba(240, 80, 50, 0.6)"
  },
  {
    name: "REST API's",
    description: "Architectural style for designing networked applications.",
    imageUrl: "images/rest-api.png",
    boxShadowColor: "rgba(66, 133, 244, 0.6)"
  },
  {
    name: "Python",
    description: "High-level programming language for general-purpose programming.",
    imageUrl: "https://www.python.org/static/community_logos/python-logo-master-v3-TM.png",
    boxShadowColor: "rgba(55, 118, 171, 0.6)"
  },
];

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
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 text-white">
            {skills.map((skill, index) => (
              <div key={index} className="bg-gray-900 bg-opacity-40 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-110" style={{ boxShadow: `0 4px 8px ${skill.boxShadowColor}` }}>
                <div className="text-3xl mb-4">
                  <img src={skill.imageUrl} alt={skill.name} className="mx-auto w-15 h-12" />
                </div>
                <h3 className="text-2xl font-semibold">{skill.name}</h3>
                <p className="mt-2">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
