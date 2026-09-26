import { Award, ExternalLink, Calendar, Building, FileBadge } from 'lucide-react';

const placeholderCertifications = [
  {
    id: 1,
    title: "Data Science with Python",
    issuer: "PySpiders, Bengaluru ",
    issueDate: "July 2026",
    thumbnail: null, 
    link : "/images/certifications/Pyspider.pdf",
  },
  {
    id: 2,
    title: "MERN Stack Development",
    issuer: "AITech Academy, Coimbatore",
    issueDate: "August 2025",
    thumbnail: null,
    link : "/images/certifications/mern_stack_certify.pdf"
  },
  {
    id: 3,
    title: "Programming Essentials in Python",
    issuer: "ICT ACADEMY",
    issueDate: "August 2021",
    thumbnail: null,
    link : "/images/certifications/ICT_ACADEMY.pdf"
  },
  {
    id: 4,
    title: "Git Certification Course",
    issuer: "Programming Hub",
    issueDate: "February 2024",
    thumbnail: null,
    link : "/images/certifications/git_cert.pdf"
  }  
];

const CertificationCard = ({ cert, link }) => {
  return (
    <div className="group flex flex-col bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ease-out">
      
      {}
      <div className="h-36 bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center border-b border-slate-100 relative overflow-hidden group-hover:from-blue-50 group-hover:to-indigo-50 transition-colors duration-300">
        {cert.thumbnail ? (
          <img 
            src={cert.thumbnail} 
            alt={`${cert.title} badge`} 
            className="h-24 w-24 object-contain z-10"
          />
        ) : (
          <div className="h-20 w-20 bg-white rounded-2xl shadow-sm flex items-center justify-center z-10 text-blue-600 border border-slate-100 transform group-hover:scale-110 transition-transform duration-300">
            <Award size={40} strokeWidth={1.5} />
          </div>
        )}
        {/* Decorative background shapes */}
        <div className="absolute -right-10 -top-10 w-40 h-40 bg-blue-500/5 rounded-full blur-2xl group-hover:bg-blue-500/10 transition-colors duration-300"></div>
        <div className="absolute -left-10 -bottom-10 w-32 h-32 bg-indigo-500/5 rounded-full blur-2xl group-hover:bg-indigo-500/10 transition-colors duration-300"></div>
      </div>

      {}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-slate-800 mb-4 line-clamp-2 leading-tight group-hover:text-blue-600 transition-colors">
          {cert.title}
        </h3>
        
        <div className="mt-auto space-y-3 mb-6">
          <div className="flex items-center text-sm text-slate-600">
            <Building size={16} className="mr-3 text-slate-400 flex-shrink-0" />
            <span className="font-medium truncate">{cert.issuer}</span>
          </div>
          <div className="flex items-center text-sm text-slate-500">
            <Calendar size={16} className="mr-3 text-slate-400 flex-shrink-0" />
            <span>Issued: {cert.issueDate}</span>
          </div>
        </div>

        {/* Action Button - href left empty for user to fill */}
        <a 
          href={link} 
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center w-full py-2.5 px-4 bg-white text-slate-700 text-sm font-semibold border border-slate-200 rounded-xl hover:bg-slate-50 hover:border-blue-200 hover:text-blue-600 transition-all duration-200 group/btn"
        >
          <FileBadge size={16} className="mr-2 text-slate-400 group-hover/btn:text-blue-500 transition-colors" />
          View Certificate
          <ExternalLink size={16} className="ml-auto text-slate-400 group-hover/btn:text-blue-500 transition-colors" />
        </a>
      </div>
    </div>
  );
};

export default function Certifications() {
  return (
    <div className="min-h-screen bg-slate-50 py-20 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Certifications
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-slate-600 leading-relaxed">
            A showcase of my professional qualifications, continuous learning, and technical achievements across various platforms.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {placeholderCertifications.map((cert) => (
            <CertificationCard key={cert.id} cert={cert} link={cert.link} />
          ))}
        </div>

      </div>
    </div>
  );
}