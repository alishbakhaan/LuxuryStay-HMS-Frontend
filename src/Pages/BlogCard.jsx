import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../index.css";
import { faGrinStars } from "@fortawesome/free-solid-svg-icons";
import { blogCard } from "../Components/Data";

const BlogCard = () => {
  return (
    <div className="min-h-screen mx-10">
      <h1 className="text-4xl font-bold text-white md:pt-40 pt-10 pb-20 font-[Unbounded] text-center">
        Our Blog
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
        {blogCard.map((blog, index) => (
          <div key={index} className=" sm:h-[500px] h-[550px] perspective relative">
            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-cyan-400 via-slate-600 to-cyan-800 animate-pulse blur-lg"></div>
            <div className="relative w-full h-full bg-gradient-to-b from-gray-800 to-gray-900 rounded-lg overflow-hidden shadow-lg text-white transform transition-transform duration-700 cursor-pointer">
              <div className="absolute inset-0 p-4">
                <img
                  src={blog.imgSrc}
                  alt={blog.title}
                  className="rounded-lg shadow-md h-52 w-full object-cover"
                />
                <div className="mt-4">
                  <h2 className="py-1 text-xl font-bold text-gradient bg-clip-text bg-gradient-to-r from-pink-400 to-blue-500">
                    {blog.title}
                  </h2>
                  <p className="py-2 text-sm opacity-80 text-gradient bg-clip-text bg-gradient-to-r from-pink-500 to-green-400">
                    {blog.description}
                  </p>
                  <p className="py-1 text-sm opacity-80 text-gradient bg-clip-text bg-gradient-to-r from-pink-500 to-green-400">
                    {blog.date}
                  </p>
                  <div className="mt-2 flex space-x-4 bg-gray-700 bg-opacity-50 p-2 rounded-lg">
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={faGrinStars} className="text-pink-500 text-lg" />
                    </a>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={faGrinStars} className="text-blue-500 text-lg" />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={faGrinStars} className="text-blue-400 text-lg" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogCard;
