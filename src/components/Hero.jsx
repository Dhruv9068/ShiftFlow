import { useState, useEffect } from "react";

const Hero = () => {
  const headings = [
    { h1: "ShiftFlow", subtext: "Streamline Your Workflow" },
    { h1: "Elevate Your Productivity", subtext: "Experience a new level of efficiency and focus." },
    { h1: "Pipeline Insights", subtext: "Create and monitor pipelines with intuitive visual tools." },
    { h1: "Visualize and Validate", subtext: "Effortlessly Visualize and Validate Your Workflows with Ease" },
  ];

  const [currentHeading, setCurrentHeading] = useState(0);
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let timeoutId;
    const heading = headings[currentHeading].h1;

    const typeText = (text, i) => {
      if (i < text.length) {
        setDisplayedText((prev) => prev + text[i]);
        timeoutId = setTimeout(() => typeText(text, i + 1), 100);
      } else {
        setTimeout(() => changeHeading(), 2000); // Pause for 2 seconds after typing
      }
    };

    setDisplayedText(""); // Clear the text before typing
    typeText(heading, 0); // Start typing the new heading

    return () => clearTimeout(timeoutId); // Cleanup timeout
  }, [currentHeading]);

  const changeHeading = () => {
    setCurrentHeading((prev) => (prev + 1) % headings.length); // Cycle through headings
  };

  return (
    <div className="relative w-full h-[500px] flex justify-center items-center bg-black overflow-hidden">
  

      <style>{`
        .hero-heading {
          background-image: url("https://64.media.tumblr.com/3614deac85fc805abf6f39d0be278714/tumblr_orf486SAlV1uzwgsuo1_400.gif");
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
          background-size: 50%;
          transition: background-size 0.3s ease;
        }
        .hero-heading:hover {
          background-size: 100%;
        }

        @keyframes fill {
          0% {
            transform: translateY(100%);
          }
          50% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(100%);
          }
        }

        /* Glow effect for neon lighting */
        .glow-effect {
          box-shadow: 0 0 15px rgba(0, 0, 255, 0.8), 0 0 30px rgba(0, 0, 255, 0.5);
          animation: glow 1.5s infinite alternate;
        }

        @keyframes glow {
          0% {
            box-shadow: 0 0 15px rgba(0, 0, 255, 0.8), 0 0 30px rgba(0, 0, 255, 0.5);
          }
          50% {
            box-shadow: 0 0 20px rgba(0, 204, 255, 1), 0 0 40px rgba(0, 204, 255, 0.5);
          }
          100% {
            box-shadow: 0 0 15px rgba(0, 0, 255, 0.8), 0 0 30px rgba(0, 0, 255, 0.5);
          }
        }
      `}</style>

      {/* Text Content */}
      <div className="relative z-20 text-center">
        <h1 className="hero-heading text-[60px] lg:text-[80px] font-bold">
          {displayedText}
        </h1>
        {headings[currentHeading].subtext && (
          <h3 className="mt-4 text-[24px] lg:text-[28px] text-white">
            {headings[currentHeading].subtext}
          </h3>
        )}
      </div>
    </div>
  );
};

export default Hero;
