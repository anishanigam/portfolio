import { useState, useCallback } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { MdArrowBack, MdArrowForward, MdArrowOutward } from "react-icons/md";

const projects = [
  {
    title: "Chalchitra Film Club — Screening Poster",
    category: "Film Club & Event Collaterals",
    tools: "Photoshop, Film Poster Aesthetics",
    image: "/images/work/poster-chalchitra.png",
    link: "https://drive.google.com/drive/folders/1wWczwSUHJs07DnKFeW1SV3C4D1eqQXyi",
  },
  {
    title: "TEDx MNNIT — Keynote & Speaker Launch",
    category: "Event Branding & Key Visuals",
    tools: "Adobe Photoshop, Illustrator, Typography",
    image: "/images/work/tedx-vijender-chauhan.png",
    link: "https://drive.google.com/drive/folders/1Z0rSlAjobVZWBmRR47YzNFmgkx28bocj",
  },
  {
    title: "Demon Slayer Tanjiro — Streetwear Graphic Tee",
    category: "Apparel & Merchandise Design",
    tools: "Illustrator, Photoshop, Screen Print Setup",
    image: "/images/work/tshirt-tanjiro.png",
    link: "https://drive.google.com/drive/folders/1x2tHqWn5-8zGHLZMu78bT-FHtAAQ8vUi",
  },
  {
    title: "Gourmet Snack Brand — Social Ad Campaign",
    category: "Social Media & Advertising",
    tools: "Adobe Photoshop, Product Mockup, Ad Design",
    image: "/images/work/insta-snack.png",
    link: "https://drive.google.com/drive/folders/17-ChONx8hR4UFjkEBGQbYytOyEMEKg7w",
  },
  {
    title: "Razzmatazz — National Fest Main Flyer",
    category: "Print Media & Event Collaterals",
    tools: "Adobe Photoshop, Illustrator, Print Layout",
    image: "/images/work/flyer-razzmatazz.png",
    link: "https://drive.google.com/drive/folders/1rPirKzsTA-bpzuMjPzEPDMTcEULfa9yV",
  },
  {
    title: "TEDx MNNIT — Official Event Theme",
    category: "Stage Visuals & Key Visuals",
    tools: "Photoshop, Illustrator, 3D Mockup",
    image: "/images/work/tedx-event.png",
    link: "https://drive.google.com/drive/folders/1Z0rSlAjobVZWBmRR47YzNFmgkx28bocj",
  },
  {
    title: "Modern Apparel Icon — Minimalist Logo",
    category: "Logo Design & Monograms",
    tools: "Adobe Illustrator, Vector Geometry",
    image: "/images/work/logo-hanger.png",
    link: "https://drive.google.com/drive/folders/1Dy9o7RNX6C3yew4fddJ1yTlpS_S_Rpup",
  },
  {
    title: "Luxury Jewellery — Editorial Social Promo",
    category: "Commercial Brand Creatives",
    tools: "Photoshop, Retouching, Social Media",
    image: "/images/work/insta-jewellery.png",
    link: "https://drive.google.com/drive/folders/17-ChONx8hR4UFjkEBGQbYytOyEMEKg7w",
  },
   {
    title: "Culrav 2025 — Official Festival Identity",
    category: "Brand Identity & Logo Design",
    tools: "Adobe Illustrator, Vector Art, Branding",
    image: "/images/work/logo-culrav25.png",
    link: "https://drive.google.com/drive/folders/1Dy9o7RNX6C3yew4fddJ1yTlpS_S_Rpup",
  },
   {
    title: "Luxury Jewellery — Editorial Social Promo",
    category: "Commercial Brand Creatives",
    tools: "Photoshop, Retouching, Social Media",
    image: "/images/work/insta-jewellery.png",
    link: "https://drive.google.com/drive/folders/17-ChONx8hR4UFjkEBGQbYytOyEMEKg7w",
  },
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    const newIndex =
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex =
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <div className="work-header-flex">
          <h2>
            My <span>Work</span>
          </h2>
          <a
            href="https://drive.google.com/drive/folders/1sTQ5gxW3A-cl77jlGOdrru-DMCBawY70"
            target="_blank"
            rel="noreferrer"
            className="work-drive-btn"
            data-cursor="disable"
          >
            <span>Google Drive Archive</span>
            <MdArrowOutward />
          </a>
        </div>

        <div className="carousel-wrapper">
          {/* Navigation Arrows */}
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrev}
            aria-label="Previous project"
            data-cursor="disable"
          >
            <MdArrowBack />
          </button>
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
            aria-label="Next project"
            data-cursor="disable"
          >
            <MdArrowForward />
          </button>

          {/* Slides */}
          <div className="carousel-track-container">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {projects.map((project, index) => (
                <div className="carousel-slide" key={index}>
                  <div className="carousel-content">
                    <div className="carousel-info">
                      <div className="carousel-number">
                        <h3>0{index + 1}</h3>
                      </div>
                      <div className="carousel-details">
                        <h4>{project.title}</h4>
                        <p className="carousel-category">
                          {project.category}
                        </p>
                        <div className="carousel-tools">
                          <span className="tools-label">Tools & Techniques</span>
                          <p>{project.tools}</p>
                        </div>
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noreferrer"
                          className="carousel-view-link"
                          data-cursor="disable"
                        >
                          View in Drive <MdArrowOutward />
                        </a>
                      </div>
                    </div>
                    <div className="carousel-image-wrapper">
                      <WorkImage
                        image={project.image}
                        alt={project.title}
                        link={project.link}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentIndex ? "carousel-dot-active" : ""
                  }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to project ${index + 1}`}
                data-cursor="disable"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
