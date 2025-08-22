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
    <>
      <section className="relative flex justify-center  2xl:items-center  min-h-screen w-full min-w-[250px]">
        <div className="absolute h-full w-full bg-slate-900 -z-30 bg-[url('/images/bg_project.jpg')] bg-cover bg-top bg-no-repeat bg-blend-screen"></div>
        <div className="flex flex-col gap-6 md:gap-10 2xl:gap-20 pb-10 pt-10 md:pt-14  ">
          <div className="flex justify-center items-center">
            <h1 className=" text-4xl py-1 font-extrabold font-serif text-white">
              My Projects
            </h1>
          </div>
          <div className="grid grid-flow-row gap-y-10 c-base:grid-cols-3 md:w-[90%] md:place-items-center">
            {projects.map((p) => (
              <Link
                to={p.link}
                target="_blank"
                id="p_link"
                key={p.id}
                rel="noopenernoreferrer"
                className="flex justify-center items-end p-1 hover:opacity-75 c-base:min-w-[250px] h-[150px] w-[50%] min-w-[220px] bg-red-500 "
              >
                <span className="hover:opacity-100 text-white font-bold md:text-base lg:text-lg text-center m-auto">
                  {p.projectname}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
