import { useState, useEffect } from "react";
import { gsap } from "gsap";
import '../index.css'
import {services} from '../Components/Data'
const MenuComponent = () => {
  const imageSources = [
    "./assets/img1.jpg",
    "./assets/img2.jpg",
    "./assets/img3.jpg",
    "./assets/img4.jpg",
    "./assets/img1.jpg",
    "./assets/img2.jpg",
    "./assets/img3.jpg",
    "./assets/img4.jpg",
  ];

  const [hoveredImage, setHoveredImage] = useState("");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    // Attach mousemove listener to update coordinates
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      // Cleanup the listener when the component unmounts
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const handleMouseEnter = (src) => {
    setHoveredImage(src);

    // Animate the preview image's appearance
    gsap.to(".preview-img img", {
      clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
      duration: 1,
      ease: "power3.out",
    });
  };

  const handleMouseLeave = () => {
    // Animate the preview image's disappearance
    gsap.to(".preview-img img", {
      clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
      duration: 1,
      ease: "power3.in",
    });

    setHoveredImage(""); // Reset the image
  };

  return (
    <div className="w-full h-full relative md:pt-40 pt-10">
       <div className='h-1 w-20 bg-cyan-400 rounded-xl mx-auto my-5'></div>
      <h1 className="text-4xl font-bold text-white pb-20 font-[Unbounded] text-center">
        Our Services
      </h1>
      {/* Preview Image */}
      {hoveredImage && (
        <div
          className="absolute w-[225px] h-[275px] rounded-lg z-10 pointer-events-none preview "
          style={{
            transform: `translate(${mousePosition.x + 10}px, ${mousePosition.y + 10}px)`,
          }}
        >
          <div className="preview-img absolute w-full h-full">
            <img
              src={hoveredImage}
              alt="Preview"
              className="absolute rounded-lg top-0 left-0 w-full h-full shadow-2xl"
            />
          </div>
        </div>
      )}

      {/* Menu Items */}
      <div className=" space-y-10"
      onMouseLeave={handleMouseLeave}
      >
       {services.map((item, index) => (
          <div
            key={index}
            className="flex md:flex-row flex-col group  md:justify-between justify-center gap-10 w-full cursor-pointer"
          >
            <div className="bg-cyan-500 rounded-lg w-20 h-2 m-auto md:hidden"></div>
            <div className="info group-hover:text-gray-500 transition duration-300 text-sm font-medium uppercase md:text-left text-center pr-4">
              <p>{item.info}</p>
            </div>
            <div className="name group-hover:text-gray-500 transition duration-300 text-xl font-extrabold text-center capitalize">
              <p onMouseEnter={() => handleMouseEnter(imageSources[index])}>{item.name}</p>
            </div>
            <div className="tag group-hover:text-gray-500 transition duration-300 text-sm font-medium uppercase md:text-right text-center pl-4">
              <p>{item.tag}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuComponent;
