export default function DownloadButton() {
  return (
    <a 
      href="files/mern_resume.pdf" 
      download="mern_resume.pdf" 
      // Consolidated into the anchor tag directly for better HTML semantics
      className="group relative inline-flex items-center justify-center gap-3 px-8 py-3.5 text-sm md:text-base font-semibold text-white transition-all duration-300 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full shadow-lg hover:from-blue-500 hover:to-purple-500 hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:-translate-y-1 w-fit focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-950"
    >
      <span>Download Resume</span>
      
      {/* Animated Download Arrow SVG */}
      <svg 
        className="w-5 h-5 transition-transform duration-300 group-hover:translate-y-1" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2} 
          d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" 
        />
      </svg>
    </a>
  );
}