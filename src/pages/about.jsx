import { useParallax } from "react-scroll-parallax";


export default function AboutPage() {

  const parallax = useParallax({
    translateY: [-0, 15],
  });

  const skills = [
    {
      id: 1,
      skill: "HTML, CSS, JavaScript",
    },
    {
      id: 2,
      skill: "Tailwind CSS",
    },
    {
      id: 3,
      skill: "React.js",
    },
    {
      id: 4,
      skill: "Next.js (Familiarity)",
    },
    {
      id: 5,
      skill: "Python",
    },
    {
      id: 6,
      skill: "Django (REST API Development)",
    },
    {
      id: 7,
      skill: "Git & GitHub",
    },
  ];

  return (
    <>
      <section className=" relative pb-10 flex flex-col items-center gap-5 text-black dark:text-white" >
        <div
          className="absolute h-full w-full bg-[url('/images/bg_education.png')] bg-slate-800 -z-50 bg-contain bg-blend-screen bg-repeat-y"
          ref={parallax.ref}
        ></div>

        {/* About me Wrapper */}
        <section className=" w-full lg:w-[85%] c-min-h-max-w:w-full bg-black relative c-min-h-max-w:top-0 lg:-top-44 2xl:-top-40 flex flex-col px-2 py-2 pt-14 pb-14 md:px-0 gap-3 md:gap-5 text-white" id="about">
          <div className="flex place-content-center">
            <h1 className=" text-2xl md:text-4xl 2xl:text-6xl font-serif font-black">
              About Me
            </h1>
          </div>
          <div className="md:px-20 md:py-5 px-2 flex flex-col gap-5 text-justify md:text-lg">
            <p>
              Hi there! I'm an enthusiastic Full-Stack Developer who specializes
              in building responsive and dynamic web applications. With
              proficiency in Django, Tailwind CSS, Next.js, and React, I like
              constructing reliable back-end solutions and smooth user
              experiences.
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
          <section className="flex flex-col gap-5 pt-14 lg:w-[85%] text-white bg-black">
            <div className="flex justify-center items-center">
              <h1 className=" text-2xl font-black md:text-6xl font-serif ">
                Education
              </h1>
            </div>
            <table className="  bg-opacity-90 flex flex-col py-10 gap-3 font-black lg:text-lg">
              <thead>
                <tr className="grid grid-cols-4 md:grid-cols-5">
                  <th>Course</th>
                  <th className=" md:col-span-2">College</th>
                  <th>
                    Percentage/
                    <br />
                    Cgpa
                  </th>
                  <th>Year</th>
                </tr>
              </thead>
              <tbody className="grid grid-rows-4 grid-cols-1 gap-2 lg:gap-8">
                <tr className="grid grid-cols-4 md:grid-cols-5 place-items-center">
                  <td>M.C.A.</td>
                  <td className=" md:col-span-2 md:justify-self-start lg:justify-self-center">Dr.SNS Rajalakshmi College of Arts and Science</td>
                  <td>80%</td>
                  <td>2023 - 2025</td>
                </tr>
                <tr className="grid grid-cols-4 md:grid-cols-5 place-items-center">
                  <td>B.C.A.</td>
                  <td className=" md:col-span-2 md:justify-self-start lg:justify-self-center">Kongunadu Arts and Science College</td>
                  <td>78%</td>
                  <td>2020 - 2023</td>
                </tr>
                <tr className="grid grid-cols-4 md:grid-cols-5 place-items-center">
                  <td className=" tracking-wider">
                    12<sup>th</sup>
                  </td>
                  <td className=" md:col-span-2 md:justify-self-start lg:justify-self-center">Metro Matric Higher Secondary School</td>
                  <td>78%</td>
                  <td>2019 - 2020</td>
                </tr>
                <tr className="grid grid-cols-4 md:grid-cols-5 place-items-center">
                  <td className=" tracking-wider">
                    10<sup>th</sup>
                  </td>
                  <td className=" md:col-span-2 md:justify-self-start lg:justify-self-center">Metro Matric Higher Secondary School</td>
                  <td>87%</td>
                  <td>2017 - 2018</td>
                </tr>
              </tbody>
            </table>
          </section>
          {/* PROFESSIONAL Wrapper */}
          <section className="flex flex-col gap-10 md:w-[85%] bg-black  px-2 py-5 md:py-16 w-full">
            <div className="flex flex-col items-center text-white">
              <h1 className=" text-2xl md:text-6xl font-extrabold ">
                PROFESSIONAL
              </h1>
              <h3 className="  md:text-2xl font-medium">
                TECHNICAL SKILLS KNOWN
              </h3>
            </div>
            <div className=" grid  gap-5 md:place-items-center  c-max-w-xs:grid-rows-3 c-max-w-xs:grid-cols-2 md:text-base lg:text-lg">
              {skills.map((s) => (
                <div
                  key={s.id}
                  className={` font-semibold md:font-black font-serif bg-white text-black flex justify-center items-center rounded-md px-3  ${
                    1 === s.id ? " col-span-3 c-max-w-xs:col-span-2 " : ""
                  } min-h-12 md:min-w-32`}
                >
                  {s.skill}
                </div>
              ))}
            </div>
          </section>
        </div>
      </section>
    </>
  );
}
