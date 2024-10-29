import PropTypes from 'prop-types';
import { useEffect, useState, useRef } from 'react';

const Parallax = ({ smallText, backgroundImage }) => {
  const [scrollY, setScrollY] = useState(0);
  const parallaxRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const { top } = parallaxRef.current.getBoundingClientRect();
        const viewportHeight = window.innerHeight;

        // Set scrollY to a value based on the component's position in the viewport
        setScrollY(top - viewportHeight / 2);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Set initial position
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div ref={parallaxRef} className="relative overflow-hidden bg-black h-[300px]">
      {/* Parallax background image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-300"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          transform: `translateY(${scrollY * -0.3}px)`, // Adjust multiplier for stronger/weaker effect
        }}
      >
        {/* Semi-transparent overlay */}
        <div className="absolute inset-0 bg-black opacity-70"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full">
        <p className="text-sm text-violet-500 mb-2">{smallText}</p>
        <h2 className="text-4xl text-white font-bold">ShiftFlow</h2>
      </div>
    </div>
  );
};

// Prop Types validation
Parallax.propTypes = {
  smallText: PropTypes.string.isRequired,
  backgroundImage: PropTypes.string.isRequired, // Allow different images for each instance
};

export default Parallax;
