import { useEffect, useState } from 'react';
import 'animate.css';

const Features = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const features = [
    {
      id: 1,
      heading: 'Visualize Graphs',
      description: `Visualize your data flows with intuitive graphs, simplifying complex information. 
                    Create dynamic visualizations that enhance understanding and drive insights.`,
    },
    {
      id: 2,
      heading: 'Interactive Edits',
      description: `Make real-time edits to your workflows, with changes reflected instantly. 
                    This feature promotes agility and enhances collaboration among team members.`,
    },
    {
      id: 3,
      heading: 'Validation Checks',
      description: `Automatically validate your graphs to catch errors early in the process. 
                    Ensure data integrity and compliance with required standards seamlessly.`,
    },
    {
      id: 4,
      heading: 'Customizable Views',
      description: `Customize your graph views for optimal clarity and usability. 
                    Tailor your interface to focus on the most relevant information easily.`,
    },
  ];

  const totalFeatures = features.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % totalFeatures);
    }, 3000);

    return () => clearInterval(interval);
  }, [totalFeatures]);

  return (
    <div className="relative container p-0 md:pb-4 flex flex-col md:flex-row h-[700px] md:h-[600px] bg-black overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-black via-purple-800 to-transparent opacity-30"></div>
        <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-black via-blue-800 to-transparent opacity-30"></div>
      </div>

      <div className="w-full md:w-1/2 flex justify-center items-center mt-28 md:mt-20">
        <div
          className="relative flex justify-center items-center"
          style={{
            perspective: '800px',
          }}
        >
          <div
            className="carousel"
            style={{
              position: 'relative',
              width: '240px',
              height: '240px',
              transformStyle: 'preserve-3d',
              transform: `rotateY(${activeIndex * -90}deg) rotateX(10deg)`, // Adjusted X rotation for better angle
              transition: 'transform 1s ease',
              margin: '0 auto',
            }}
          >
            {features.map((feature, index) => (
              <div
                key={feature.id}
                className="feature-square absolute w-48 h-48 flex items-center justify-center bg-gradient-to-r from-black to-blue-950 bg-opacity-95 text-white border-4 border-gray-600 cursor-pointer shadow-lg"
                style={{
                  transform: `
                    rotateY(${index * (360 / totalFeatures)}deg)
                    translateZ(120px
                  `,
                  boxShadow: '0 0 20px rgba(255, 255, 255, 0.5)',
                  textShadow: '0 0 5px rgba(255, 255, 255, 0.5)',
                }}
              >
                <h3 className="text-md font-bold text-center">{feature.heading}</h3>
              </div>
            ))}
          </div>

        
        </div>
      </div>

      <div className="w-full md:w-1/2 mt-4 md:mt-0 md:mb-36 flex flex-col items-center justify-center text-center px-2 md:px-0">
        <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
          {features[activeIndex].heading}
        </h3>
        <p className="text-base md:text-lg text-white">
          {features[activeIndex].description}
        </p>
      </div>
    </div>
  );
};

export default Features;
