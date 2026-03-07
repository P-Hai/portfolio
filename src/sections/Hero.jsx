import { useLanguage } from "../i18n/LanguageContext";
import Button from "../components/Button.jsx";
import HeroExperience from "../components/HeroModel/HeroExperience.jsx";
import AnimatedCounter from "../components/AnimatedCounter.jsx";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const BASE_URL = import.meta.env.BASE_URL;

const words = [
  { text: "Scale", imgPath: `${BASE_URL}/images/ideas.svg` },
  { text: "Speed", imgPath: `${BASE_URL}/images/speed.svg` },
  { text: "Reliability", imgPath: `${BASE_URL}/images/reliability.png` },
  { text: "Growth", imgPath: `${BASE_URL}/images/growth.svg` },
  { text: "Scale", imgPath: `${BASE_URL}/images/ideas.svg` },
  { text: "Speed", imgPath: `${BASE_URL}/images/speed.svg` },
  { text: "Reliability", imgPath: `${BASE_URL}/images/reliability.png` },
  { text: "Growth", imgPath: `${BASE_URL}/images/growth.svg` },
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
      <div className="absolute top-0 left-0 z-10 pointer-events-none">
        <img src={`${BASE_URL}/images/bg.png`} alt="background" />
      </div>

      <div className="hero-layout">
        {/* LEFT */}
        <header className="flex flex-col justify-center w-full xl:flex-1 xl:max-w-[50%] px-5 md:px-10 lg:px-12 z-10">
          <div className="flex flex-col gap-5 md:gap-7">
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
                        key={`${word.text}-${index}`}
                        className="flex items-center gap-1 md:gap-3 pb-2"
                      >
                        <img
                          src={word.imgPath}
                          alt={word.text}
                          className="object-contain rounded-full bg-white-50"
                          style={{
                            width: "clamp(22px, 3.5vw, 40px)",
                            height: "clamp(22px, 3.5vw, 40px)",
                            padding: "clamp(3px, 0.5vw, 8px)",
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

            <p className="text-white-50 text-sm md:text-lg lg:text-xl relative z-10 pointer-events-none">
              {t.hero.description}
            </p>

            <div className="w-full max-w-[280px] md:max-w-[220px]">
              <Button text={t.hero.cta} id="counter" />
            </div>
          </div>
        </header>

        {/* RIGHT */}
        <figure className="w-full xl:w-[45%] flex items-center justify-center z-10">
          <div className="hero-3d-layout">
            <HeroExperience />
          </div>
        </figure>
      </div>

      <AnimatedCounter />
    </section>
  );
};

export default Hero;