import { useLanguage } from "../i18n/LanguageContext";
import Button from "../components/Button.jsx";
import HeroExperience from "../components/HeroModel/HeroExperience.jsx";
import AnimatedCounter from "../components/AnimatedCounter.jsx";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const BASE_URL = import.meta.env.BASE_URL;

const words = [
  { text: "Scale",       imgPath: BASE_URL + "/images/ideas.svg" },
  { text: "Speed",       imgPath: BASE_URL + "/images/speed.svg" },
  { text: "Reliability", imgPath: BASE_URL + "/images/reliability.png" },
  { text: "Growth",      imgPath: BASE_URL + "/images/growth.svg" },
  { text: "Scale",       imgPath: BASE_URL + "/images/ideas.svg" },
  { text: "Speed",       imgPath: BASE_URL + "/images/speed.svg" },
  { text: "Reliability", imgPath: BASE_URL + "/images/reliability.png" },
  { text: "Growth",      imgPath: BASE_URL + "/images/growth.svg" },
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

      {/* Layout wrapper */}
      <div className="hero-layout">

        {/* LEFT — text */}
        <header className="hero-left-col">
          <div className="flex flex-col gap-5 md:gap-6">

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
                            width: "clamp(20px, 2.4vw, 36px)",
                            height: "clamp(20px, 2.4vw, 36px)",
                            padding: "clamp(3px, 0.35vw, 7px)",
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

            <p className="text-white-50 text-sm md:text-base lg:text-lg relative z-10 pointer-events-none"
               style={{ maxWidth: "480px" }}>
              {t.hero.description}
            </p>

            <div style={{ display: "inline-flex", paddingBottom: "4px" }}>
              <Button text={t.hero.cta} id="counter" />
            </div>

          </div>
        </header>

        {/* RIGHT — flip image */}
        <figure className="hero-right-col">
          <HeroExperience />
        </figure>

      </div>

      <AnimatedCounter />

      <style>{`
        /* Base: mobile stacked */
        .hero-left-col {
          width: 100%;
          padding: 0 20px;
          z-index: 10;
          min-width: 0;
        }
        .hero-right-col {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 10;
          margin: 0;
        }

        /* Tablet */
        @media (min-width: 768px) {
          .hero-left-col {
            padding: 0 40px;
          }
        }

        /* Desktop xl — side by side */
        @media (min-width: 1280px) {
          .hero-left-col {
            flex: 0 0 55% !important;
            max-width: 55% !important;
            padding: 0 32px 0 48px !important;
          }
          .hero-right-col {
            flex: 0 0 45% !important;
            max-width: 45% !important;
            min-height: 420px;
          }
          /* Font scale down so 3 lines stay in 55% column */
          .hero-text {
            font-size: clamp(24px, 2.9vw, 46px) !important;
          }
          .hero-text .slide {
            height: clamp(34px, 4.2vw, 60px) !important;
            padding-bottom: clamp(16px, 2.2vw, 28px) !important;
          }
        }

        /* 2xl — allow slightly bigger */
        @media (min-width: 1536px) {
          .hero-text {
            font-size: clamp(32px, 3.2vw, 58px) !important;
          }
          .hero-text .slide {
            height: clamp(44px, 4.8vw, 72px) !important;
            padding-bottom: clamp(20px, 2.8vw, 34px) !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;