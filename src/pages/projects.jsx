import { Link } from "react-router-dom";

export default function Projects() {
  const projects = [
    {
      id: 1,
      projectname: "Website Clone",
      link: "https://ecommerce-eren-clone.netlify.app/",
    },
    {
      id: 2,
      projectname: "Budget Calculator",
      link: "https://calc-budgeting.netlify.app/",
    },
    {
      id: 3,
      projectname: "Solar Panel Fault Detection Using Deep Learning",
      link: "https://frontend-solarpanel.onrender.com",
    },
    {
      id: 4,
      projectname: "Product Website(Fake API)",
      link: "http://fakeapi0.netlify.app",
    },
    {
      id: 5,
      projectname: "E-commerce Website",
      link: "https://ecommerce-project-alpha-five.vercel.app/",
    },
  ];

  return (
    <section className="relative flex justify-center items-center min-h-screen w-full overflow-hidden">
      
      {/* 1. Optimized Background: Removed bg-blend-screen which is heavy on the GPU */}
      <div className="absolute inset-0 bg-slate-900 -z-30 bg-[url('/images/bg_project.jpg')] bg-cover bg-center bg-no-repeat opacity-40"></div>
      
      {/* 2. Optimized Overlay: Removed backdrop-blur, using a solid dark tint instead */}
      <div className="absolute inset-0 bg-gray-900/60 -z-20"></div>

      <div className="w-full max-w-7xl px-4 py-16 flex flex-col gap-12 z-10">
        <div className="flex justify-center items-center">
          <h1 className="text-4xl md:text-5xl font-extrabold font-serif text-white tracking-wide drop-shadow-md">
            My Projects
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center w-full mx-auto">
          {projects.map((p) => (
            <Link
              to={p.link}
              target="_blank"
              key={p.id}
              rel="noopener noreferrer"
              
              /* 3. Optimized Cards: Replaced bg-white/10 and backdrop-blur with bg-slate-800/80 */
              className="group relative flex justify-center items-center h-[180px] w-full max-w-[350px] p-6 
                         bg-slate-800/80 border border-slate-700/50 rounded-2xl shadow-lg 
                         hover:bg-slate-700/95 hover:-translate-y-2 hover:shadow-2xl hover:border-blue-400/50 
                         transition-all duration-300 ease-in-out cursor-pointer overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <span className="relative z-10 text-white font-bold text-lg md:text-xl text-center group-hover:text-blue-300 transition-colors duration-300 drop-shadow-sm">
                {p.projectname}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}