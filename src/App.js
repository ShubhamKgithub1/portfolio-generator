import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Preview from "./components/Preview";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

function App() {
  const [portfolioData, setPortfolioData] = useState({
    name: "",
    bio: "",
    profilePicture: "",
    skills: [],
    projects: [],
    socialLinks: {
      github: "",
      linkedin: "",
    },
  });

  const handleDownloadPDF = async () => {
    const element = document.getElementById("preview-container");

    const canvas = await html2canvas(element, {
      scale: 2, // Increase quality
      useCORS: true, // Ensures proper image loading
    });

    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "mm", "a4");
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("portfolio.pdf");
  };

  return (
    <div className="flex h-screen w-[100vw] relative">
      <Sidebar
        portfolioData={portfolioData}
        setPortfolioData={setPortfolioData}
      />
      <div id="preview-container" className="w-[100vw] h-[100vh]">
        <Preview portfolioData={portfolioData} />
      </div>
      {portfolioData?.name !== "" && (
        <div className="absolute bottom-0 right-0 m-8 border-2 rounded-full p-4 flex justify-center items-center shadow-2xl text-white font-bold text-4xl cursor-pointer transition-all duration-200 hover:scale-[1.05] active:scale-[.98]">
          <div className="">
            <button onClick={handleDownloadPDF} className="">
              ⬇
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
