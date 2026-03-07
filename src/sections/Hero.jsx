import { words } from "../constants/index.js";
import Button from "../components/Button.jsx";
import HeroExperience from "../components/HeroModel/HeroExperience.jsx";
import {useGSAP} from '@gsap/react';
import gsap from 'gsap'
import AnimatedCounter from "../components/AnimatedCounter.jsx";

const BASE_URL = import.meta.env.BASE_URL;

const Hero = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".hero-text h1",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: "power2.inOut" }
    );
  });
  return (
    <>
      <section id="hero" className="relative overflow-hidden">
        <div className="absolute top-0 left-0 z-10">
          <img src={`${BASE_URL}/images/bg.png`} alt="background" />
        </div>



        <div className="hero-layout">
          {/*LEFT: HERO CONTENT */}
          <header className="flex flex-col justify-center w-full lg:flex-1 lg:max-w-[45%] px-5 md:px-10">
            <div className="flex flex-col gap-7">
              <div className="hero-text">
                <h1>
                  Building data for
                  <span className="slide">
                    <span className="wrapper">
                      {words.map((word, index) => (
                        <span key={`${word.text}-${index}`} className="flex items-center md:gap-3 gap-1 pb-2">
                          <img 
                              src={word.imgPath} 
                              alt={word.text}
                              className="xl:size-9 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50" 
                          />
                          <span>{word.text}</span>
                        </span> 
                      ))}
                    </span>
                  </span>
                </h1>
                <h1>into Real Projects</h1>
                <h1>that Deliver Results</h1>
              </div>

              <p className="text-white-50 md:text-xl relative z-10 pointer-events-none px-5 md:px-10 lg:px-10">
              Nguyễn Cao Phúc Hải — Analytics Engineer | Data Engineer | Data Analyst.
            </p>

            <div className="px-5 md:px-10 lg:px-10">
              <Button
                text="See My Work"
                className="md:w-50 md:h-16 w-60 h-12"
                id="counter"
              />
            </div>
            </div>
          </header>

          {/*RIGHT: 3D MODEL */}
          <figure className="w-full lg:w-[40%] flex items-center justify-center">
            <div className="hero-3d-layout">
              <HeroExperience/>
            </div>
          </figure>
        </div>
        <AnimatedCounter/>
      </section>
    </>
  )
}
export default Hero