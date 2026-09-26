import { Link } from "react-router-dom";

export default function ContactPage() {
  const contactMethods = [
    {
      id: 1,
      label: "LinkedIn",
      value: "linkedin.com/in/roshantp",
      href: "http://www.linkedin.com/in/roshantp",
      imgSrc: "images/linkedin.png",
      target: "_blank",
    },
    {
      id: 2,
      label: "Email",
      value: "roshan.dev.tp@gmail.com",
      href: "mailto:roshan.dev.tp@gmail.com",
      imgSrc: "images/email.png",
      target: "_self",
    },
    {
      id: 3,
      label: "WhatsApp / Phone",
      value: "+91 85239 81494",
      href: "tel:+918523981494", // Makes it clickable on mobile
      imgSrc: "images/whatsapp_phone.png",
      target: "_self",
    },
  ];

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center bg-slate-950 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-purple-900/20 via-slate-950 to-slate-950 overflow-hidden py-24 px-4"
      id="contactpage"
    >
      {/* Main Content Card (Solid background for buttery 60fps performance) */}
      <div className="relative z-10 w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-3xl p-8 md:p-14 shadow-2xl flex flex-col gap-10">
        
        {/* Header Section */}
        <div className="flex flex-col items-center gap-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
            Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Connect</span>
          </h1>
          <p className="text-slate-300 md:text-lg max-w-md leading-relaxed mt-2">
            I'd adore hearing from you! Whether you have a question or just want to say hi, my inbox is always open.
          </p>
        </div>

        {/* Contact Links Grid */}
        <div className="flex flex-col gap-4 w-full mx-auto mt-4">
          {contactMethods.map((method) => (
            <a
              key={method.id}
              href={method.href}
              target={method.target}
              rel={method.target === "_blank" ? "noopener noreferrer" : ""}
              className="group flex items-center gap-4 md:gap-6 p-4 md:p-5 rounded-2xl bg-slate-800 border border-slate-700/50 hover:bg-slate-700 hover:-translate-y-1 hover:border-purple-500/50 hover:shadow-[0_0_20px_rgba(168,85,247,0.15)] transition-all duration-300 w-full"
            >
              {/* Icon Container */}
              <div className="h-14 w-14 shrink-0 flex items-center justify-center bg-slate-900 rounded-full p-3 group-hover:scale-110 transition-transform duration-300">
                <img
                  src={method.imgSrc}
                  alt={method.label}
                  loading="lazy"
                  className="h-full w-full object-contain"
                />
              </div>

              {/* Text Container */}
              <div className="flex flex-col overflow-hidden">
                <span className="text-sm text-slate-400 font-medium mb-1">
                  {method.label}
                </span>
                <span className="text-slate-200 md:text-lg font-semibold truncate group-hover:text-white transition-colors duration-300">
                  {method.value}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}