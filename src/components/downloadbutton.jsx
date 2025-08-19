
export default function DownloadButton() {
  
  return (
    <>
      <a href="files/mern_resume.pdf" download="mern_resume.pdf" className="w-fit">
        <button className="h-10 w-60 bg-blue-900 text-white">
          Download Resume
        </button>
      </a>
    </>
  );
}
