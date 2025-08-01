import { useParallax } from "react-scroll-parallax";
import DownloadButton from "../components/downloadbutton";

export default function Home() {

  const parallax1 = useParallax({
    translateY: [-150, 150],
  });

  const parallax2 = useParallax({
    translateY: [-150,150],
  });

  return (
    /* c-min-h-max-w:bg-[url('/images/bg_hero_sm.jpg')] */
    <>
      <div
        className={`relative w-full h-full min-w-[250px]    lg:bg-none    py-16 `} 
        id="homepage"
      >
        <section className=" c-min-h-max-w:min-h-full  lg:min-h-screen">
          <div
            className={`absolute h-full w-full lg:bg-[35vw] xl:bg-[33vw] 2xl:bg-[50vw] -z-50 bg-contain bg-right-top bg-no-repeat bg-slate-500 hidden lg:block  lg:bg-[url('/images/bg_hero_lg.png')] bg-blend-overlay c-min-h-max-w:hidden`}
            ref={parallax1.ref}  
          >
           {/*  <img
              src="/images/heroimg.png"
              alt=""
              className="absolute h-full -top-28 -right-72 filter bg-blend-screen"
             
            /> */}
          </div>
          <div className=" absolute w-full min-h-screen bg-neutral-500 bg-[url('/images/bg_hero_sm.jpg')] c-min-h-max-w:bg-[url('/images/bg_hero_sm.jpg')] bg-cover bg-center -z-50 md:bg-transparent lg:bg-none" ref={parallax2.ref}></div>

          <div className="flex items-center justify-center lg:w-[60%] xl:w-[60%] c-min-h-max-w:w-full c-min-h-max-w:min-h-full lg:min-h-screen ">
            <div className="flex flex-col gap-3 text-black c-min-h-max-w:text-black lg:text-white">
              <h1 className="text-2xl md:text-4xl 2xl:text-6xl font-extrabold leading-tight md:max-w-max tracking-wider ">
                I'M
                <br /> ROSHAN DEVASSY
              </h1>
              <h3 className="md:text-3xl ">FULL STACK DEVELOPER</h3>
              <DownloadButton />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
