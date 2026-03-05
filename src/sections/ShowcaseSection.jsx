import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);

  // Handle mouse move for glow effect
  const handleMouseMove = (index) => (e) => {
    const card = cardRefs.current[index];
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const mouseX = e.clientX - rect.left - rect.width / 2;
    const mouseY = e.clientY - rect.top - rect.height / 2;

    let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);
    angle = (angle + 360) % 360;

    card.style.setProperty("--start", angle + 60);
  };

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each app showcase
    const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          <div 
            ref={(el) => {
              rydeRef.current = el;
              cardRefs.current[0] = el;
            }} 
            onMouseMove={handleMouseMove(0)}
            className="first-project-wrapper card card-border rounded-xl p-8"
          >
            <div className="glow"></div>
            <a 
              href="https://github.com/Marcus0175/User-Recommendation-System" 
              target="_blank" 
              rel="noopener noreferrer"
              className="image-wrapper hover:opacity-80 transition-opacity duration-300"
            >
              <img src="/images/project1.png" alt="Ryde App Interface" />
            </a>
            <div className="text-content">
              <h2>
                User Recommendation System
              </h2>
              <p className="text-white-50 md:text-xl">
                Built a scalable user recommendation system powered by automated data pipelines, 
                transforming raw behavioral data into personalized predictions.
              </p>
            </div>
          </div>

          <div className="project-list-wrapper">
            <div 
              className="project card card-border rounded-xl p-8"
              ref={(el) => {
                libraryRef.current = el;
                cardRefs.current[1] = el;
              }}
              onMouseMove={handleMouseMove(1)}
            >
              <div className="glow"></div>
              <div className="image-wrapper bg-[#FFEFDB]">
                <img
                  src="/images/project2.png"
                  alt="Library Management Platform"
                />
              </div>
              <h2>The Library Management Platform</h2>
            </div>

            <div 
              className="project card card-border rounded-xl p-8"
              ref={(el) => {
                ycDirectoryRef.current = el;
                cardRefs.current[2] = el;
              }}
              onMouseMove={handleMouseMove(2)}
            >
              <div className="glow"></div>
              <div className="image-wrapper bg-[#FFE7EB]">
                <img src="/images/project3.png" alt="YC Directory App" />
              </div>
              <h2>YC Directory - A Startup Showcase App</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;