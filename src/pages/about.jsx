import { useParallax } from "react-scroll-parallax";

export default function AboutPage() {
  const parallax = useParallax({
    translateY: [-0, 15],
  });

  const frontendSkills = [
    {
      id: 1,
      skill: "HTML",
      iconSrc: "/images/skillsIcon/html5.png",
    },
    {
      id: 2,
      skill: "CSS",
      iconSrc: "/images/skillsIcon/css3.png",
    },
    {
      id: 3,
      skill: "TailwindCSS",
      iconSrc: "/images/skillsIcon/tailwind.png",
    },
    {
      id: 4,
      skill: "JavaScript",
      iconSrc: "/images/skillsIcon/js.png",
    },
    {
      id: 5,
      skill: "React.js",
      iconSrc: "/images/skillsIcon/reactjs.png",
    },
    /*  {
      id: 6,
      skill: "Next.js (Familiarity)",
      iconSrc: "/images/skillsIcon/nextjs.png",
    }, */
  ];

  const backendSkills = [
    {
      id: 1,
      skill: "Node.js",
      iconSrc: "/images/skillsIcon/nodejs.png",
    },
    {
      id: 2,
      skill: "Express.js",
      iconSrc: "/images/skillsIcon/expressjs.png",
    },
    
    {
      id: 3,
      skill: "MongoDB",
      iconSrc: "/images/skillsIcon/mongodb.png",
    },
    {
      id: 4,
      skill: "Mongoose",
      iconSrc: "/images/skillsIcon/mongoose.png",
    }, 
  ];

  const devTools = [
    {
      id: 1,
      skill: "Git",
      iconSrc: "/images/skillsIcon/git.png",
    },
    {
      id: 2,
      skill: "GitHub",
      iconSrc: "/images/skillsIcon/github.png",
    },
    {
      id: 3,
      skill: "VS Code",
      iconSrc: "/images/skillsIcon/vscode.png",
    },
    {
      id: 4,
      skill: "Thunder Client",
      iconSrc: "/images/skillsIcon/thunderclient.jpeg",
    },
    {
      id: 5,
      skill: "Post Man",
      iconSrc: "/images/skillsIcon/postman.png",
    },
  ];

  return (
    <>
      <section className=" relative pb-10 flex flex-col items-center gap-5 text-black dark:text-white bg-neutral-900">
        <div
          className="absolute h-full w-full bg-[url('/images/bg_education.png')] bg-slate-800 -z-50 bg-contain bg-blend-screen bg-repeat-y"
          ref={parallax.ref}
        ></div>

        {/* About me Wrapper */}
        <section
          className=" w-full lg:w-[85%] c-min-h-max-w:w-full bg-neutral-300 dark:bg-neutral-800 relative c-min-h-max-w:top-0 lg:-top-44 2xl:-top-40 flex flex-col px-2 py-2 pt-14 pb-14 md:px-0 gap-3 md:gap-5 rounded-2xl"
          id="about"
        >
          <div className="flex place-content-center">
            <h1 className=" text-2xl md:text-4xl 2xl:text-6xl font-serif font-black">
              About Me
            </h1>
          </div>
          <div className="md:px-20 md:py-5 px-2 flex flex-col gap-5 text-justify md:text-lg">
            <p>
              Hi there! I'm an enthusiastic Full-Stack Developer who specializes
              in building responsive and dynamic web applications. With
              proficiency in HTML, CSS, TailwindCSS, JavaScript, React.js,
              NodeJs(ExpressJs) and MongoDB. I like constructing reliable
              back-end solutions and smooth user experiences.
            </p>
            <p>
              Coming to Education, I have completed B.C.A(2023) and M.C.A(2025)
            </p>
            <p>
              My interest in the way that technology can turn concepts into
              reality led me to pursue a career in web development. I have
              refined my abilities in front-end and back-end development over
              the years, which enables me to see projects through to completion.
              I appreciate working with teams to produce high-quality software
              that satisfies user demands and do best in collaborative settings.
            </p>
          </div>
        </section>
        <div className="flex flex-col gap-20 w-full items-center">
          {/* EDUCATION DETAILS Wrapper */}
          {/* <section className="flex flex-col gap-5 pt-14 lg:w-[85%] bg-white dark:bg-black">
            <div className="flex justify-center items-center">
              <h1 className=" text-2xl font-black md:text-6xl font-serif ">
                Education
              </h1>
            </div>
            <table className="  bg-opacity-90 flex flex-col py-10 font-black lg:text-lg">
              <thead>
                <tr className="grid grid-cols-4 md:grid-cols-5 items-center">
                  <th>Course</th>
                  <th className=" md:col-span-2">College</th>
                  <th>
                    Percentage/
                    <br />
                    CGPA
                  </th>
                  <th>Year</th>
                </tr>
              </thead>
              <tbody className="grid grid-rows-4 grid-cols-1 ">
                <tr className=" box-content grid grid-cols-4 md:grid-cols-5 place-items-center py-1">
                  <td>M.C.A.</td>
                  <td className=" md:col-span-2 md:justify-self-start lg:justify-self-center">
                    Dr.SNS Rajalakshmi College of Arts and Science
                  </td>
                  <td>-</td>
                  <td>2023 - 2025</td>
                </tr>
                <tr className="grid grid-cols-4 md:grid-cols-5 place-items-center">
                  <td>B.C.A.</td>
                  <td className=" md:col-span-2 md:justify-self-start lg:justify-self-center">
                    Kongunadu Arts and Science College
                  </td>
                  <td>7.38</td>
                  <td>2020 - 2023</td>
                </tr>
                <tr className="grid grid-cols-4 md:grid-cols-5 place-items-center">
                  <td className=" tracking-wider">
                    12<sup>th</sup>
                  </td>
                  <td className=" md:col-span-2 md:justify-self-start lg:justify-self-center">
                    Metro Matric Higher Secondary School
                  </td>
                  <td>78%</td>
                  <td>2019 - 2020</td>
                </tr>
                <tr className="grid grid-cols-4 md:grid-cols-5 place-items-center">
                  <td className=" tracking-wider">
                    10<sup>th</sup>
                  </td>
                  <td className=" md:col-span-2 md:justify-self-start lg:justify-self-center">
                    Metro Matric Higher Secondary School
                  </td>
                  <td>87%</td>
                  <td>2017 - 2018</td>
                </tr>
              </tbody>
            </table>
          </section> */}
          {/* PROFESSIONAL Wrapper */}
          <section className="flex flex-col gap-10 md:w-[85%] bg-neutral-300  dark:bg-neutral-800  px-2 py-5 md:py-16 w-full rounded-2xl shadow-2xl">
            <div className="flex flex-col items-center">
              <h1 className=" text-2xl md:text-6xl font-extrabold ">
                PROFESSIONAL
              </h1>
              <h3 className="  md:text-2xl font-medium">
                TECHNICAL SKILLS KNOWN
              </h3>
            </div>
            <div className="flex flex-col gap-10 md:text-base lg:text-lg">
              {/* Frontend */}
              <div className="flex flex-col items-center gap-y-10">
                <h2 className=" text-center text-2xl font-bold">Frontend</h2>
                <div className="grid grid-cols-[repeat(auto-fit,minmax(100px,1fr))] w-full  gap-y-5 justify-center items-center max-w-4xl ">
                  {frontendSkills.map((s, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center justify-center gap-1"
                    >
                      <img
                        src={s.iconSrc}
                        className="h-12 w-12 object-contain "
                        alt={s.skill}
                      />
                      <p className="text-center">{s.skill}</p>
                    </div>
                  ))}
                </div>
              </div>
              {/* Backend */}
              <div className="flex flex-col items-center gap-y-10 py-10">
                <h2 className=" text-center text-2xl font-bold">Backend</h2>
                <div className="grid grid-cols-[repeat(auto-fit,minmax(100px,1fr))] w-full justify-items-center items-center gap-y-5 max-w-4xl">
                  {backendSkills.map((s, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center justify-center gap-1"
                    >
                      <img
                        src={s.iconSrc}
                        className="h-12 w-fit object-contain dark:bg-white rounded-full"
                      />
                      <p className="text-center">{s.skill}</p>
                    </div>
                  ))}
                </div>
              </div>
              {/* Tools */}
              <div className="flex flex-col items-center gap-y-10">
                <h2 className=" text-center text-2xl font-bold">Tools</h2>
                <div className="grid grid-cols-[repeat(auto-fit,minmax(100px,1fr))] w-full justify-items-center items-center gap-y-5 max-w-4xl">
                  {devTools.map((s, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center justify-center gap-1"
                    >
                      <img
                        src={s.iconSrc}
                        className="h-12 w-12 object-contain rounded-full"
                      />
                      <p className="text-center">{s.skill}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
}
