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
    <div
      className="relative w-full h-[500px] flex justify-center items-center overflow-hidden"
      style={{
        backgroundImage: 'url("https://img.freepik.com/free-vector/black-faded-gradient-background-vector-with-blue-border_53876-125750.jpg")', // Replace with your background image path
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay for better text contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-purple-700 opacity-50 z-10"></div>


      <style>{`
        .hero-heading {
          background-image: url("https://giffiles.alphacoders.com/324/32493.gif");
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
          background-size: 50%;
          transition: background-size 0.3s ease;
        }
        .hero-heading:hover {
          background-size: 100%;
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
        <h1 className="hero-heading text-[40px] md:text-[60px] lg:text-[80px] font-bold">
          {displayedText}
        </h1>
        {headings[currentHeading].subtext && (
          <h3 className="mt-4 text-[20px] md:text-[24px] lg:text-[28px] text-white">
            {headings[currentHeading].subtext}
          </h3>
        )}
      </div>
    </div>
  );
};

export default Hero;
