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
    <div className="max-w-4xl mx-auto p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">{title}</h1>

      {image && (
        <img
          src={image}
          alt={title}
          className="w-full h-64 object-cover rounded-lg mb-6"
        />
      )}
      <p className="text-gray-700 mb-6">{mainContent}</p>
      <div className="flex gap-4 mb-6">
        {liveSite && (
          <a
            href={liveSite}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
          >
            View Live Site
          </a>
        )}
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-900 transition"
          >
            View GitHub README
          </a>
        )}
        <button
          onClick={handleCopyCurrentURL}
          className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition"
        >
          {copied ? "Copied!" : "Copy Page URL"}
        </button>
      </div>
      <div>
        <Link to="/" className="text-blue-600 hover:underline font-medium">
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}
