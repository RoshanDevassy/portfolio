import { Link } from "react-router-dom";

/* className=" md:h-screen custom-base:min-h-max w-full min-w-[250px] */
export default function ContactPage() {
  return (
    <>
      <section
        className="relative min-h-screen md:flex md:justify-center md:items-center w-full min-w-[250px] text-white"
        id="contactpage"
      >
        <div className=" absolute h-full w-full -z-30 bg-[url('/images/bg_contact.jpg')] bg-cover"></div>
        {/* Wrapper */}
        <div className=" flex flex-col md:flex-row  items-center md:portrait:items-start md:landscape:items-start md:landscape:justify-center xl:justify-self-center md:justify-center gap-16 md:landscape:gap-0  pb-10 pt-10 md:pt-16 lg:pt-20 2xl:pt-28 md:gap-5  md:portrait:w-[95%]">
          {/* Contact Me */}
          <section className="flex flex-col items-center md:items-start gap-9  px-2 md:w-[45%] md:text-lg lg:text-xl">
            <div>
              <h1 className="justify-self-center md:justify-self-auto font-black md:text-xl  2xl:text-4xl font-serif">
                Contact Me
              </h1>
            </div>
            <div className="flex justify-center md:justify-normal ">
              <p
                className=" text-justify
                 md:w-auto px-2 md:px-0 md:landscape:w-[80%] c-base:portrait:w-[75%] "
              >
                I'd adore hearing from you! Kindly contact me personally or Send
                me a message.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <a href="http://www.linkedin.com/in/roshantp" target="_blank">
                <div className="flex gap-2">
                  <img src="images/linkedin.png" alt="linkedin" className="h-6" />
                  Linked In
                </div>
              </a>
              <a href="mailto:roshan.dev.tp@gmail.com">
                <div className="flex gap-2">
                  <img src="images/email.png" alt="email" className="h-6"/>
                roshan.dev.tp@gmail.com
                </div>
              </a>
              <div className="flex gap-2">
               <img src="images/phone.png" alt="call" className="h-6"/> +91 85239 81494
            </div>
            </div>
            
          </section>
          {/* Form */}
          <section className=" md:w-[45%] flex md:landscape:justify-center lg:text-lg">
            <form
              action=""
              className="flex flex-col gap-5 min-w-[250px] max-xs:px-3"
            >
              <div className="flex gap-5 md:w-80 flex-col md:flex-row ">
                <div className="flex flex-col gap-2">
                  <label htmlFor="firstname">First Name</label>
                  <input
                    type="text"
                    name="firstname"
                    id="firstname"
                    className="w-full h-8 p-1 bg-white text-black border-black border"
                    autoComplete="given-name"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="lastname">Last Name</label>
                  <input
                    type="text"
                    name="lastname"
                    id="lastname"
                    className="w-full h-8 p-1 bg-white text-black border-black border"
                    autoComplete="family-name"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email">E-mail</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="w-full h-8 p-1 bg-white text-black border-black border"
                  autoComplete="email"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="phonenumber">Phone</label>
                <input
                  type="tel"
                  name="phonenumber"
                  id="phonenumber"
                  className="h-8 p-1 bg-white text-black border-black border"
                  autoComplete="tel"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="message">Message</label>
                <textarea
                  rows="5"
                  id="message"
                  name="message"
                  className="resize-none p-1 bg-white text-black border-black border"
                  autoComplete="on"
                ></textarea>
              </div>
              <div>
                <button type="submit" className="w-full bg-green-500 py-2">
                  Send Message
                </button>
              </div>
            </form>
          </section>
        </div>
      </section>
    </>
  );
}
