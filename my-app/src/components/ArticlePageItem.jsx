import { Link } from "react-router-dom";
import { useState } from "react";

export default function ProjectArticle({
  title,
  image,
  mainContent,
  liveSite,
  github,
}) {
  const [copied, setCopied] = useState(false);

  const handleCopyCurrentURL = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10 px-6">
      {/* Header / Title */}
      <header className="w-full max-w-5xl text-center mb-6">
        <h1 className="text-4xl font-bold text-gray-900 leading-tight">
          {title}
        </h1>
        <div className="h-1 w-20 bg-blue-600 mx-auto mt-3 rounded-full"></div>
      </header>

      {/* Hero Image */}
      {image && (
        <div className="w-full max-w-5xl mb-6">
          <img
            src={image}
            alt={title}
            className="w-full max-h-[450px] object-cover rounded-lg"
          />
        </div>
      )}

      {/* Main Content */}
      <main className="max-w-3xl w-full text-center">
        <p className="text-gray-700 text-base leading-relaxed mb-8">
          {mainContent}
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {liveSite && (
            <a
              href={liveSite}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition"
            >
              View Live Site
            </a>
          )}
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-gray-800 text-white font-medium rounded-lg hover:bg-gray-900 transition"
            >
              View GitHub README
            </a>
          )}
          <button
            onClick={handleCopyCurrentURL}
            className="px-5 py-2.5 bg-gray-200 text-gray-800 font-medium rounded-lg hover:bg-gray-300 transition"
          >
            {copied ? "Copied!" : "Copy Page URL"}
          </button>
        </div>

        {/* Back link */}
        <div className="text-center">
          <Link
            to="/"
            className="text-blue-600 hover:underline font-medium text-sm"
          >
            ← Back to Home
          </Link>
        </div>
      </main>
    </div>
  );
}
