import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

import { counterItems } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const AnimatedCounter = () => {
  const counterRef = useRef(null);
  const countersRef = useRef([]);

  useEffect(() => {
    const counters = countersRef.current;
    if (!counters.length) return;

    counters.forEach((counter, index) => {
      const numberElement = counter?.querySelector(".counter-number");
      const item = counterItems[index];

      if (!numberElement || !item) return;

      // Create a timeline for each counter
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: counterRef.current,
          start: "top 80%",
          once: true,
        },
      });

      tl.to(
        { value: 0 },
        {
          value: item.value,
          duration: 2.5,
          ease: "power2.out",
          snap: { value: 1 },
          onUpdate: function () {
            const currentValue = Math.round(this.targets()[0].value);
            numberElement.textContent = `${currentValue}${item.suffix}`;
          },
          onComplete: () => {
            numberElement.textContent = `${item.value}${item.suffix}`;
          },
        }
      );
    });

    return () => {
      // Cleanup ScrollTrigger instances
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div id="counter" ref={counterRef} className="padding-x-lg xl:mt-0 mt-32">
      <div className="mx-auto grid-4-cols">
        {counterItems.map((item, index) => (
          <div
            key={index}
            ref={(el) => el && (countersRef.current[index] = el)}
            className="bg-zinc-900 rounded-lg p-10 flex flex-col justify-center"
          >
            <div className="counter-number text-white-50 text-5xl font-bold mb-2">
              0
            </div>
            <div className="text-white-50 text-lg">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedCounter;