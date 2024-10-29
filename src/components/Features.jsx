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

  // Automatically move to the next item every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % totalFeatures);
    }, 3000); // Adjust timing here for faster or slower rotations

    return () => clearInterval(interval);
  }, [totalFeatures]);

  return (
    <div className="relative container mx-auto p-4 flex flex-col md:flex-row h-[600px] bg-black overflow-hidden">
      {/* Light effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-black via-purple-700 to-transparent opacity-30"></div>
        <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-black via-blue-700 to-transparent opacity-30"></div>
      </div>

      {/* Left Half with Carousel */}
      <div className="w-full md:w-1/2 flex justify-center items-center mt-20">
        <div
          className="relative flex justify-center items-center"
          style={{
            perspective: '800px',
            height: '300px', // Carousel height
          }}
        >
          <div
            className="carousel"
            style={{
              position: 'relative',
              width: '250px',
              height: '300px', // Carousel height
              transformStyle: 'preserve-3d',
              transform: `rotateY(${activeIndex * -90}deg)`, // Rotate based on active index
              transition: 'transform 1s ease',
            }}
          >
            {features.map((feature, index) => (
              <div
                key={feature.id}
                className="feature-circle absolute w-52 h-52 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-blue-950 bg-opacity-96 text-white border-4 border-white cursor-pointer"
                style={{
                  transform: `rotateY(${index * (360 / totalFeatures)}deg) translateZ(240px)`, // Adjust Z value for size
                  boxShadow: '0 0 8px white',
                  textShadow: '0 0 3px white',
                }}
              >
                <h3 className="text-lg font-bold text-center">{feature.heading}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>

  {/* Right Half with Titles and Descriptions */}
<div className="w-full md:w-1/2  md:mt-0 md:mb-36  flex flex-col items-center justify-center">
  <h3 className="text-2xl font-bold text-white text-center mb-2">
    {features[activeIndex].heading}
  </h3>
  <p className="text-lg text-white text-center">
    {features[activeIndex].description}
  </p>
</div>


    </div>
  );
};

export default Features;
