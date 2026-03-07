import { useLanguage } from "../i18n/LanguageContext";
import Button from "../components/Button.jsx";
import HeroExperience from "../components/HeroModel/HeroExperience.jsx";
import AnimatedCounter from "../components/AnimatedCounter.jsx";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const BASE_URL = import.meta.env.BASE_URL;

const words = [
  { text: "Scale", imgPath: BASE_URL + "/images/ideas.svg" },
  { text: "Speed", imgPath: BASE_URL + "/images/speed.svg" },
  { text: "Reliability", imgPath: BASE_URL + "/images/reliability.png" },
  { text: "Growth", imgPath: BASE_URL + "/images/growth.svg" },
  { text: "Scale", imgPath: BASE_URL + "/images/ideas.svg" },
  { text: "Speed", imgPath: BASE_URL + "/images/speed.svg" },
  { text: "Reliability", imgPath: BASE_URL + "/images/reliability.png" },
  { text: "Growth", imgPath: BASE_URL + "/images/growth.svg" },
];

const Hero = () => {
  const { t } = useLanguage();

  useGSAP(() => {
    gsap.fromTo(
      ".hero-text h1",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: "power2.inOut" }
    );
  });

  return (
    <section id="hero" className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-0 z-10 pointer-events-none">
        <img src={BASE_URL + "/images/bg.png"} alt="background" />
      </div>

      {/*
        Layout: trên mobile xếp dọc (ảnh dưới text),
        trên xl: 2 cột flex-row với flex-shrink kiểm soát kích thước
      */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          paddingTop: "96px",
          paddingBottom: "40px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "32px",
          minHeight: "100dvh",
          justifyContent: "center",
        }}
        className="hero-outer"
      >
        {/* LEFT — text content */}
        <div
          className="hero-left"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: "24px",
            padding: "0 20px",
            width: "100%",
            flexShrink: 1,
            minWidth: 0,
          }}
        >
          <div className="hero-badge w-fit">
            <p>{t.hero.badge}</p>
          </div>

          <div className="hero-text">
            <h1>
              {t.hero.line1}
              <span className="slide">
                <span className="wrapper">
                  {words.map((word, index) => (
                    <span
                      key={word.text + index}
                      className="flex items-center gap-1 md:gap-3 pb-2"
                    >
                      <img
                        src={word.imgPath}
                        alt={word.text}
                        className="object-contain rounded-full bg-white-50"
                        style={{
                          width: "clamp(22px, 3vw, 38px)",
                          height: "clamp(22px, 3vw, 38px)",
                          padding: "clamp(3px, 0.4vw, 7px)",
                        }}
                      />
                      <span>{word.text}</span>
                    </span>
                  ))}
                </span>
              </span>
            </h1>
            <h1>{t.hero.line2}</h1>
            <h1>{t.hero.line3}</h1>
          </div>

          <p
            className="text-white-50"
            style={{
              fontSize: "clamp(14px, 1.5vw, 18px)",
              lineHeight: 1.6,
              maxWidth: "520px",
            }}
          >
            {t.hero.description}
          </p>

          <div style={{ display: "inline-flex", paddingBottom: "4px" }}>
            <Button text={t.hero.cta} id="counter" />
          </div>
        </div>

        {/* RIGHT — flip image */}
        <div
          className="hero-right"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            width: "100%",
          }}
        >
          <HeroExperience />
        </div>
      </div>

      <AnimatedCounter />

      {/* Responsive layout styles */}
      <style>{`
        @media (min-width: 1280px) {
          .hero-outer {
            flex-direction: row !important;
            padding-left: 48px !important;
            padding-right: 48px !important;
            gap: 0 !important;
          }
          .hero-left {
            flex: 1 1 0% !important;
            max-width: 52% !important;
            padding: 0 40px 0 20px !important;
          }
          .hero-right {
            flex: 0 0 44% !important;
            width: 44% !important;
            max-width: 44% !important;
            min-height: 420px !important;
          }
        }
        @media (min-width: 768px) and (max-width: 1279px) {
          .hero-left {
            padding: 0 40px !important;
            max-width: 680px !important;
            align-self: center !important;
          }
          .hero-right {
            max-width: 360px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;