
export default function DownloadButton() {
  
  return (
    <>
      <a href="files/resume.pdf" download="resume.pdf" className="w-fit">
        <button className="h-10 w-60 bg-blue-900 text-white">
          Download Resume
        </button>
      </a>
    </>
  );
}
