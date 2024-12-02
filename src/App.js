import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Preview from "./components/Preview";
import jsPDF from 'jspdf';

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



const handleDownloadPDF = () => {
  const doc = new jsPDF();
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(20);
  doc.text(`${portfolioData.name || 'Your Name'}`, 20, 20);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(12);
  doc.text(`${portfolioData.bio || 'Your bio goes here...'}`, 20, 30);

  doc.addPage();
  doc.text('Skills:', 20, 20);
  portfolioData.skills.forEach((skill, index) => {
    doc.text(`- ${skill}`, 20, 30 + index * 10);
  });

  doc.addPage();
  doc.text('Projects:', 20, 20);
  portfolioData.projects.forEach((project, index) => {
    doc.text(
      `${index + 1}. ${project.name} - ${project.description}`,
      20,
      30 + index * 10
    );
    if (project.link) {
      doc.text(`   Link: ${project.link}`, 20, 40 + index * 10);
    }
  });

  doc.save('portfolio.pdf');
};



  return (
    <div className="flex h-screen relative">
      <Sidebar
        portfolioData={portfolioData}
        setPortfolioData={setPortfolioData}
      />

      <Preview portfolioData={portfolioData} />
      {portfolioData?.name !== "" && (
        <div className="absolute bottom-0 right-0 m-8 bg-white rounded-full p-4 flex justify-center items-center shadow-2xl text-white font-bold text-4xl cursor-pointer transition-all duration-200 hover:scale-[1.05] active:scale-[.98]">
          
          {Object.keys(portfolioData).some((key) => portfolioData[key]) && (
  <div className="">
    <button
      onClick={handleDownloadPDF}
      className=""
    >⬇
    </button>
  </div>
)}
        </div>
      )}
    </div>
  );
}

export default App;
