import { useState } from "react";

const BASE_URL = import.meta.env.BASE_URL;

const HeroExperience = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        onMouseEnter={() => setIsFlipped(true)}
        onMouseLeave={() => setIsFlipped(false)}
        style={{
          position: "relative",
          cursor: "pointer",
          perspective: "1000px",
          transformStyle: "preserve-3d",
          /* Kích thước lớn hơn — responsive bằng clamp */
          width: "clamp(220px, 38vw, 420px)",
          height: "clamp(220px, 38vw, 420px)",
          borderRadius: "50%",
          border: "4px solid #99FFCC",
          boxShadow: "0 0 40px rgba(153,255,204,0.25), 0 0 80px rgba(82,174,255,0.15)",
          flexShrink: 0,
        }}
      >
        {/* FRONT */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: "50%",
            overflow: "hidden",
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transition: "opacity 0.5s ease, transform 0.5s ease",
            opacity: isFlipped ? 0 : 1,
            transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
            zIndex: isFlipped ? 0 : 1,
          }}
        >
          <img
            src={BASE_URL + "/images/anh1.png"}
            alt="Phuc Hai"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>

        {/* BACK */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: "50%",
            overflow: "hidden",
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transition: "opacity 0.5s ease, transform 0.5s ease",
            opacity: isFlipped ? 1 : 0,
            transform: isFlipped ? "rotateY(0deg)" : "rotateY(-180deg)",
            zIndex: isFlipped ? 1 : 0,
          }}
        >
          <img
            src={BASE_URL + "/images/anh2.jpg"}
            alt="Phuc Hai alt"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroExperience;