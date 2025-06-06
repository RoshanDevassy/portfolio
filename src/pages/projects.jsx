import { Link } from "react-router-dom";

export default function Projects() {
  const projects = [
    {
      id: 1,
      projectname: "PortFolio",
      link: "",
    },
    {
      id: 2,
      projectname: "Budget Calculator",
      link: "https://calc-budgeting.netlify.app/",
    },
  ];

  return (
    <>
      <section className="relative flex justify-center  2xl:items-center  min-h-screen w-full min-w-[250px]">
        <div className="absolute h-full w-full bg-slate-900 -z-30 bg-[url('/images/bg_project.jpg')] bg-cover bg-top bg-no-repeat bg-blend-screen"></div>
        <div className="flex flex-col gap-6 md:gap-10 2xl:gap-20 pb-10 pt-10 md:pt-14  ">
          <div className="flex justify-center items-center">
            <h1 className=" text-4xl py-1 font-extrabold font-serif">
              My Projects
            </h1>
          </div>
          <div className="flex flex-col items-center  c-base:justify-center md:flex-row gap-10 mt-10 px-2">
            {projects.map((p) =>
              p.id === 1 ? (
                <button
                  className="h-[150px] w-[50%] c-base:min-w-[250px]  min-w-[220px] flex justify-center items-end p-1 hover:opacity-75 bg-blue-500"
                  onClick={() => alert("This is the Current Project")}
                  key={p.id}
                >
                  <span className="hover:opacity-100 text-white font-bold md:text-base lg:text-lg">
                    {p.projectname}
                  </span>
                </button>
              ) : (
                <Link
                  to={p.link}
                  target="_blank"
                  id="p_link"
                  key={p.id}
                  rel="noopenernoreferrer"
                  className="flex justify-center items-end p-1 hover:opacity-75 c-base:min-w-[250px] h-[150px] w-[50%] min-w-[220px] bg-red-500 "
                >
                  <span className="hover:opacity-100 text-white font-bold md:text-base lg:text-lg">
                    {p.projectname}
                  </span>
                </Link>
              )
            )}
          </div>
        </div>
      </section>
    </>
  );
}
