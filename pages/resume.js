import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Cursor from "../components/Cursor";
import Header from "../components/Header";
import Button from "../components/Button";
import { useTheme } from "next-themes";
// Data
import data from "../data/portfolio.json";

const Resume = () => {
  const router = useRouter();
  const theme = useTheme();
  const [mount, setMount] = useState(false);
  const [language, setLanguage] = useState("en");

  // PDF URLs
  const pdfUrls = {
    en: "https://raw.githubusercontent.com/lucasduport/portfolio/main/cvs/CV_EN_2025.pdf",
    fr: "https://raw.githubusercontent.com/lucasduport/portfolio/main/cvs/CV_FR_2025.pdf",
  };

  const openPDF = () => {
    window.open(pdfUrls[language], '_blank');
  };

  useEffect(() => {
    setMount(true);
  }, [router]);
  return (
    <>
      {data.showCursor && <Cursor />}
      <div className={`container mx-auto mb-10 ${data.showCursor && "cursor-none"}`}>
        <Header isBlog />
        {mount && (
          <div className="mt-10 w-full flex flex-col items-center">
            <div className="w-full max-w-4xl mob:p-5 desktop:p-20">
              <h1 className="text-3xl font-bold text-center mb-8">{data.name}&apos;s Resume</h1>
              
              <div className="text-center mb-8">
                <h2 className="text-xl mb-6">
                  Select Language / Choisir la langue
                </h2>

                {/* Language Selection Buttons with Flags */}
                <div className="flex justify-center space-x-6 mb-8">
                  <button
                    className={`flex items-center space-x-3 px-6 py-3 rounded-md transition-all ${
                      language === "en"
                        ? "bg-blue-600 text-white shadow-lg"
                        : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                    }`}
                    onClick={() => setLanguage("en")}
                  >
                    <span className="text-2xl">🇺🇸</span>
                    <span className="font-medium">English</span>
                  </button>
                  <button
                    className={`flex items-center space-x-3 px-6 py-3 rounded-md transition-all ${
                      language === "fr"
                        ? "bg-blue-600 text-white shadow-lg"
                        : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                    }`}
                    onClick={() => setLanguage("fr")}
                  >
                    <span className="text-2xl">🇫🇷</span>
                    <span className="font-medium">Français</span>
                  </button>
                </div>

                {/* View Resume Button */}
                <div className="mb-8">
                  <button
                    onClick={openPDF}
                    className="inline-flex items-center px-8 py-4 bg-blue-600 text-white text-lg font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
                    <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    View Resume
                  </button>
                </div>

                {/* Info Text */}
                <p className="text-gray-600 text-sm max-w-md mx-auto">
                  Click the button above to view the resume in {language === 'en' ? 'English' : 'French'} in a new tab.
                </p>
              </div>

              {/* Resume Preview Card */}
              <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                    <svg className="w-10 h-10 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {language === 'en' 
                      ? `${data.name}'s Resume`
                      : `CV de ${data.name}`
                    }
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {language === 'en' 
                      ? 'View my complete professional experience, skills, and qualifications.' 
                      : 'Consultez mon expérience professionnelle complète, mes compétences et qualifications.'
                    }
                  </p>
                  <div className="flex justify-center space-x-4 text-sm text-gray-500">
                    <span className="flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707" />
                      </svg>
                      PDF Format
                    </span>
                    <span className="flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                      Always Updated
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Resume;