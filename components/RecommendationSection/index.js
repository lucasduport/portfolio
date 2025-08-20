import React from "react";
import Image from "next/image";

const LinkedInLogo = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="inline-block align-middle"
  >
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.026-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.838-1.563 3.036 0 3.599 2.001 3.599 4.601v5.595z" />
  </svg>
);

export default function RecommendationSection({ recommendations }) {
  return (
    <section className="mt-10 laptop:mt-20 p-2 laptop:p-0">
      <h1 className="tablet:m-10 text-2xl text-bold">Recommendations.</h1>
      <div className="mt-5 grid grid-cols-1 tablet:grid-cols-2 gap-4">
        {recommendations.map((rec, idx) => (
          <div
            key={idx}
            className="overflow-hidden rounded-lg p-2 laptop:p-4 first:ml-0 link transition-all ease-out duration-300 bg-transparent dark:bg-transparent border border-gray-800 hover:scale-105 active:scale-100 shadow-lg flex flex-col justify-between h-full"
            style={{ minHeight: "300px" }}
          >
            <div>
              <div className="flex items-center mb-2">
                <span className="text-2xl font-medium mr-2">{rec.name}</span>
                <a
                  href={rec.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-2 text-blue-500 hover:underline"
                  aria-label="LinkedIn"
                >
                  <LinkedInLogo />
                </a>
                {rec.companyLogo && rec.companyUrl && (
                  <a
                    href={rec.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-4"
                    aria-label={rec.company}
                  >
                    <Image
                      src={rec.companyLogo}
                      alt={rec.company + ' logo'}
                      width={32}
                      height={32}
                      className="inline-block align-middle rounded"
                      style={{ background: "transparent" }}
                    />
                  </a>
                )}
              </div>
              <div className="text-lg opacity-50 mb-1">
                {rec.position} @ {rec.company}
              </div>
              <ul className="mt-3 mb-4 list-disc pl-5 text-base">
                {rec.citations.map((quote, i) => (
                  <li key={i} className="mb-2">“{quote}”</li>
                ))}
              </ul>
            </div>
            <div>
              <a
                href={rec.letterUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 text-sm tablet:text-base p-1 laptop:p-2 m-1 laptop:m-2 rounded-lg bg-gradient-to-r from-fuchsia-500 to-blue-500 text-white transition-all duration-300 ease-out hover:scale-105 active:scale-100 link"
              >
                Read the full letter
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
