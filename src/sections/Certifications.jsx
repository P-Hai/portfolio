import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { certifications } from "../constants";
import TitleHeader from "../components/TitleHeader";

gsap.registerPlugin(ScrollTrigger);

const Certifications = () => {
  useGSAP(() => {
    // Animate each certification card in
    gsap.utils.toArray(".certification-card").forEach((card, index) => {
      gsap.from(card, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        delay: 0.1 * index,
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
        },
      });
    });
  }, []);

  return (
    <section
      id="certifications"
      className="flex-center section-padding"
    >
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="Certifications"
          sub="📜 Qualifications"
        />
        <div className="grid-3-cols mt-16">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="certification-card card card-border rounded-xl p-8 overflow-hidden relative"
            >
              <div className="glow"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={cert.imgPath}
                    alt={cert.title}
                    className="size-16 rounded-lg object-cover"
                  />
                  <div>
                    <h3 className="font-semibold text-lg text-white">{cert.title}</h3>
                    <p className="text-blue-50 text-sm">{cert.issuer}</p>
                  </div>
                </div>
                <p className="text-white-50 text-sm mb-3">{cert.description}</p>
                <p className="text-blue-50 text-xs">Obtained: {cert.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;

