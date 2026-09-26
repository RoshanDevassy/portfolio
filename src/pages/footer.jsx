export default function FooterPage() {
  // Dynamically grabs the current year so you never have to update it manually
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-slate-950 border-t border-slate-800/60 py-8 px-4 mt-auto z-50 relative">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Quick Links Section */}
        <div className="flex flex-wrap justify-center gap-6 text-sm font-medium text-slate-400">
          <a
            href="mailto:roshan.dev.tp@gmail.com"
            className="hover:text-white hover:underline underline-offset-4 decoration-blue-500 transition-all duration-300"
          >
            Email
          </a>
          <a
            href="https://www.linkedin.com/in/roshantp"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white hover:underline underline-offset-4 decoration-blue-500 transition-all duration-300"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/RoshanDevassy"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white hover:underline underline-offset-4 decoration-purple-500 transition-all duration-300"
          >
            GitHub
          </a>
        </div>
        
      </div>
    </footer>
  );
}