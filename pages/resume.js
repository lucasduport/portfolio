import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Cursor from "../components/Cursor";
import Header from "../components/Header";
import { useTheme } from "next-themes";
// Data
import data from "../data/portfolio.json";

const Resume = () => {
  const router = useRouter();
  const theme = useTheme();
  const [mount, setMount] = useState(false);
  const [language, setLanguage] = useState("en");

  // PDF URLs (use local API proxy)
  const pdfUrls = {
    en: "/api/pdf/en",
    fr: "/api/pdf/fr",
  };

  // always show embedded viewer

  useEffect(() => {
    setMount(true);
  }, [router]);

  return (
    <>
      <Head>
        <title>{data.name} - Resume</title>
        <meta name="description" content="Lucas Duport's professional resume and CV. Passionate EPITA student based in Paris, France." />
        <meta name="author" content="Lucas Duport" />
        
        {/* Open Graph / Facebook / LinkedIn */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Lucas Duport - Resume & CV" />
        <meta property="og:description" content="Professional resume and CV of Lucas Duport. Passionate EPITA student based in Paris, France." />
        <meta name="image" property="og:image" content="https://lucasduport.cc/images/avatar.png" />
        <meta property="og:image" content="https://lucasduport.cc/images/avatar.png" />
        <meta property="og:image:secure_url" content="https://lucasduport.cc/images/avatar.png" />
        <meta property="og:image:width" content="400" />
        <meta property="og:image:height" content="400" />
        <meta property="og:image:alt" content="Lucas Duport - Resume" />
        <meta property="og:url" content="https://lucasduport.cc/resume" />
        <meta property="og:site_name" content="Lucas Duport Portfolio" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Lucas Duport - Resume & CV" />
        <meta name="twitter:description" content="Professional resume and CV of Lucas Duport. Passionate EPITA student based in Paris, France." />
        <meta name="twitter:image" content="https://lucasduport.cc/images/avatar.png" />
        <meta name="twitter:image:alt" content="Lucas Duport - Resume" />
      </Head>
      {data.showCursor && <Cursor />}
      <div className={`container mx-auto ${data.showCursor && "cursor-none"}`}>
        <Header isBlog />
        {mount && (
          <div className="w-full flex flex-col items-center">
            <div className="w-full max-w-4xl mob:p-3 desktop:p-5">              
              <div className="text-center">
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
                  {/* Download Button */}
                  <a
                    href={pdfUrls[language]}
                    download
                    className="flex items-center space-x-3 px-6 py-3 rounded-md transition-all bg-gray-200 text-gray-800 hover:bg-gray-300"
                  >
                    <span className="text-2xl">⬇️</span>
                    <span className="font-medium">Download</span>
                  </a>
                </div>
              </div>

              {/* Embedded PDF Viewer */}
              <div className="w-full" style={{ height: "80vh" }}>
                <iframe
                  src={`${pdfUrls[language]}#pagemode=none&navpanes=0&scrollbar=0&view=Fit&zoom=page-fit`}
                  width="100%"
                  height="100%"
                  className="border border-gray-200 rounded-lg shadow-lg"
                  style={{ minHeight: "80vh" }}
                ></iframe>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Resume;