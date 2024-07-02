import { NavLink } from "react-router-dom";

function Projects() {
  return (
    <>
      <div
        name="projects"
        className="relative min-h-screen w-full flex flex-col items-start justify-start bg-gray-800 p-4 md:p-8 bg-contain bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/img6.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-80"></div>
        <div className="relative container mx-auto mt-5 mb-4 md:mt-0 md:mb-0 z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-500 underline decoration-2 underline-offset-8 pb-2">
            Projects
          </h1>
          <span className="text-sm md:text-lg font-bold text-blue-200">
            Here are some Projects with their GitHub link that I have created from minor projects to major projects.
          </span>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-white">
            {[
              {
                title: "Portfolio",
                techStack: "React.JS, Node.JS, Express.JS, MongoDB, Tailwind CSS",
                image: "/images/img7.jpg",
                link: "https://github.com/iamprakhar27/MyPortfolio/",
                color: "custom-cyan",
              },
              {
                title: "Life Line Portal",
                techStack: "React.JS, Node.JS, Express.JS, MongoDB, Bootstrap",
                image: "/images/img8.jpeg",
                link: "https://github.com/iamprakhar27/Life-Line-portal/",
                color: "custom-emerald",
              },
              {
                title: "MEME Generator",
                techStack: "HTML, CSS, Javascript",
                image: "/images/meme.png",
                link: "https://github.com/iamprakhar27/meme-generator/",
                color: "custom-fuchsia",
              },
              {
                title: "TO-Do List",
                techStack: "HTML, CSS, Javascript",
                image: "/images/todo.png",
                link: "https://github.com/iamprakhar27/todo-list",
                color: "custom-rose",
              },
            ].map((project, index) => (
              <div
                key={index}
                className={`group relative max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 transform transition-transform hover:scale-105 hover:shadow-${project.color}`}
              >
                <NavLink to="#">
                  <img className="rounded-t-lg" src={project.image} alt="" />
                </NavLink>
                <div className="p-5 relative z-20">
                  <NavLink to="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white underline">
                      {project.title}
                    </h5>
                  </NavLink>
                  <p className="mb-3 text-gray-700 dark:text-gray-400 font-bold">
                    Tech stack: {project.techStack}
                  </p>
                  <NavLink
                    to={project.link}
                    className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 z-30"
                  >
                    GitHub
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      ></path>
                    </svg>
                  </NavLink>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
