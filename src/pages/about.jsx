export default function AboutPage() {
  const frontendSkills = [
    { id: 1, skill: "HTML", iconSrc: "/images/skillsIcon/html5.png" },
    { id: 2, skill: "CSS", iconSrc: "/images/skillsIcon/css3.png" },
    { id: 3, skill: "TailwindCSS", iconSrc: "/images/skillsIcon/tailwind.png" },
    { id: 4, skill: "JavaScript", iconSrc: "/images/skillsIcon/js.png" },
    { id: 5, skill: "React.js", iconSrc: "/images/skillsIcon/reactjs.png" },
  ];

  const backendSkills = [
    { id: 1, skill: "Node.js", iconSrc: "/images/skillsIcon/nodejs.png" },
    { id: 2, skill: "Express.js", iconSrc: "/images/skillsIcon/expressjs.png" },
    { id: 3, skill: "MongoDB", iconSrc: "/images/skillsIcon/mongodb.png" },
    { id: 4, skill: "Mongoose", iconSrc: "/images/skillsIcon/mongoose.png" },
  ];

  const devTools = [
    { id: 1, skill: "Git", iconSrc: "/images/skillsIcon/git.png" },
    { id: 2, skill: "GitHub", iconSrc: "/images/skillsIcon/github.png" },
    { id: 3, skill: "VS Code", iconSrc: "/images/skillsIcon/vscode.png" },
    { id: 4, skill: "Thunder Client", iconSrc: "/images/skillsIcon/thunderclient.jpeg" },
    { id: 5, skill: "Post Man", iconSrc: "/images/skillsIcon/postman.png" },
  ];

  const SkillGrid = ({ skills }) => (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6 w-full">
      {skills.map((s) => (
        <div
          key={s.id}
          // Optimized hover states using only GPU-accelerated properties (transform, opacity, color)
          className="group flex flex-col items-center justify-center p-4 gap-3 bg-slate-800 border border-slate-700/50 rounded-2xl hover:bg-slate-700 hover:-translate-y-1 hover:border-blue-500/50 transition-all duration-300"
        >
          <div className="h-14 w-14 flex items-center justify-center bg-slate-900 rounded-full p-2 group-hover:scale-110 transition-transform duration-300">
            <img
              src={s.iconSrc}
              alt={s.skill}
              loading="lazy" 
              className="h-full w-full object-contain"
            />
          </div>
          <p className="text-slate-300 font-medium text-sm text-center group-hover:text-white transition-colors duration-300">
            {s.skill}
          </p>
        </div>
      ))}
    </div>
  );

  return (
    // Replaced heavy blur orb with a highly performant CSS radial gradient background
    <section className="relative min-h-screen py-24 flex flex-col items-center overflow-hidden bg-slate-950 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-950 to-slate-950 text-slate-200">
      
      <div className="w-full max-w-6xl px-4 md:px-8 flex flex-col gap-12 z-10">
        
        {/* Removed backdrop-blur, used solid bg-slate-900 for max performance */}
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 md:p-12 shadow-2xl">
          <div className="mb-8 border-l-4 border-blue-500 pl-4">
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white">
              About Me
            </h1>
          </div>
          
          <div className="space-y-6 text-slate-300 md:text-lg leading-relaxed">
            <p>
              Hi there! I'm an enthusiastic Full-Stack Developer who specializes
              in building responsive and dynamic web applications. With
              proficiency in HTML, CSS, TailwindCSS, JavaScript, React.js,
              Node.js (Express), and MongoDB, I like constructing reliable
              back-end solutions and smooth user experiences.
            </p>
            <p>
              My educational background includes a B.C.A (2023) and M.C.A (2025).
            </p>
            <p>
              My interest in the way that technology can turn concepts into
              reality led me to pursue a career in web development. I have
              refined my abilities in front-end and back-end development over
              the years, which enables me to see projects through to completion.
              I appreciate working with teams to produce high-quality software
              that satisfies user demands and thrive in collaborative settings.
            </p>
          </div>
        </div>

        {/* Professional Skills Section */}
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 md:p-12 shadow-2xl flex flex-col gap-12">
          
          <div className="text-center space-y-2 mb-4">
            <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
              Professional Arsenal
            </h1>
            <h3 className="text-blue-400 font-mono text-sm md:text-base uppercase tracking-widest">
              Technical Skills & Tools
            </h3>
          </div>

          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-bold text-white border-b border-slate-800 pb-2">Frontend</h2>
            <SkillGrid skills={frontendSkills} />
          </div>

          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-bold text-white border-b border-slate-800 pb-2">Backend</h2>
            <SkillGrid skills={backendSkills} />
          </div>

          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-bold text-white border-b border-slate-800 pb-2">Tools & Environments</h2>
            <SkillGrid skills={devTools} />
          </div>

        </div>
      </div>
    </section>
  );
}