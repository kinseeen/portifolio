import { Link } from "react-router-dom";

export default function Home() {
  const projects = [
    {
      id: 1,
      title: "ECOM STORE",
      image: "/images/ecomstorefront.png",
      teaser:
        "A React-based e-commerce site where users can browse and purchase products easily.",
      link: "/ecom-store",
    },
    {
      id: 2,
      title: "AUCTIONARIOUS",
      image: "/images/auctionariousfront.JPG",
      teaser:
        "An auction platform built with Bootstrap where users can bid on items in real-time.",
      link: "/auctionarious",
    },
    {
      id: 3,
      title: "CSS FRAMEWORKS",
      image: "/images/loginPageCss.JPG",
      teaser: "Exploring the world of CSS frameworks — coming soon!",
      link: "/css-frameworks",
    },
  ];

  return (
    <div className="p-8 min-h-screen bg-gray-50">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project) => (
          <Link
            key={project.id}
            to={project.link}
            className="block rounded-2xl overflow-hidden shadow-md bg-white transform transition duration-300 hover:shadow-xl hover:-translate-y-1"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-2">
                {project.title}
              </h2>
              <p className="text-gray-600 text-sm mb-4">{project.teaser}</p>
              <span className="inline-block text-blue-600 font-medium hover:underline">
                Read more →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
