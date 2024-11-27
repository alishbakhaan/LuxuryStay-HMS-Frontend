import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import "../index.css";

const imageSources = [
  "../assets/img1.jpg",
  "../assets/img2.jpg",
  "../assets/img3.jpg",
  "../assets/img4.jpg",
];

const MenuItem = ({ info, name, tag, onHover, onLeave, image }) => {
  return (
    <div
      className="menu-item"
      onMouseEnter={() => onHover(image)}
      onMouseLeave={onLeave}
    >
      <div className="info">
        <p>{info}</p>
      </div>
      <div className="name">
        <p>{name}</p>
      </div>
      <div className="tag">
        <p>{tag}</p>
      </div>
    </div>
  );
};

const Services = () => {
  const [previewImage, setPreviewImage] = useState(null);
  const previewRef = useRef();

  useEffect(() => {
    if (previewImage) {
      gsap.to(previewRef.current, {
        clipPath: "polygon(0%, 100%, 100%, 100%, 100%, 0%, 0%, 0%)",
        duration: 1,
        ease: "power3.out",
      });
    }
  }, [previewImage]);

  const handleMouseMove = (e) => {
    const preview = previewRef.current;
    if (preview) {
      gsap.to(preview, {
        x: e.clientX + 50,
        y: e.clientY - 50,
        duration: 0.5,
        ease: "power3.out",
      });
    }
  };

  return (
    <div className="main" onMouseMove={handleMouseMove}>
      <div className="preview" ref={previewRef}>
        {previewImage && <img src={previewImage} alt="Preview" />}
      </div>
      <div className="menu">
        {imageSources.map((image, index) => (
          <MenuItem
            key={index}
            info="Puma Pov"
            name={`Creative Design ${index + 1}`}
            tag="Creative Design"
            image={image}
            onHover={setPreviewImage}
            onLeave={() => setPreviewImage(null)}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
