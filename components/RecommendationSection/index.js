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
    <section className="mt-10 laptop:mt-30 p-2 laptop:p-0">
      <h1 className="text-2xl text-bold">Recommendations.</h1>
      <div className="mt-5 laptop:mt-10 grid grid-cols-1 tablet:grid-cols-2 gap-4">
        {recommendations.map((rec, idx) => (
          <div
            key={idx}
            className="overflow-hidden rounded-2xl p-3 laptop:p-5 first:ml-0 link transition-all ease-out duration-300 bg-transparent dark:bg-transparent border border-white/10 hover:border-white/20 hover:scale-105 active:scale-100 shadow-lg flex flex-col justify-between h-full"
            style={{ minHeight: "300px" }}
          >
            <div>
              <div className="flex items-center flex-wrap gap-2 mb-2">
                <span className="text-2xl font-semibold mr-1">{rec.name}</span>
                {rec.linkedin && (
                  <a
                    href={rec.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-400"
                    aria-label="LinkedIn"
                  >
                    <LinkedInLogo />
                  </a>
                )}
                {/* Company name + logo on same line as the name */}
                {rec.company && (
                  <>
                    <span className="opacity-50">•</span>
                    {rec.companyUrl ? (
                      <a
                        href={rec.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 hover:underline"
                        aria-label={rec.company}
                      >
                        <span className="inline-flex items-center gap-2 px-2 py-1 rounded-full border border-white/10 hover:border-white/20 bg-white/5">
                          {rec.companyLogo && (
                            <Image
                              src={rec.companyLogo}
                              alt={rec.company + ' logo'}
                              width={18}
                              height={18}
                              className="inline-block align-middle rounded"
                              style={{ background: "transparent" }}
                            />
                          )}
                          <span className="text-sm opacity-90">{rec.company}</span>
                        </span>
                      </a>
                    ) : (
                      <span className="inline-flex items-center gap-2 px-2 py-1 rounded-full border border-white/10 bg-white/5">
                        {rec.companyLogo && (
                          <Image
                            src={rec.companyLogo}
                            alt={rec.company + ' logo'}
                            width={18}
                            height={18}
                            className="inline-block align-middle rounded"
                            style={{ background: "transparent" }}
                          />
                        )}
                        <span className="text-sm opacity-90">{rec.company}</span>
                      </span>
                    )}
                  </>
                )}
              </div>
              <div className="text-sm uppercase tracking-wide opacity-60 mb-3">{rec.position}</div>
              <div className="space-y-3 mb-4">
                {rec.citations.map((quote, i) => (
                  <div
                    key={i}
                    className="p-3 rounded-lg border border-black/10 bg-black/5 dark:border-white/10 dark:bg-white/5 text-base leading-relaxed italic"
                  >
                    “{quote}”
                  </div>
                ))}
              </div>
            </div>
            <div>
              <a
                href={rec.letterUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 text-sm tablet:text-base px-3 py-2 m-1 laptop:m-2 rounded-lg bg-gradient-to-r from-fuchsia-500 to-blue-500 text-white transition-all duration-300 ease-out hover:scale-105 active:scale-100 link"
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
