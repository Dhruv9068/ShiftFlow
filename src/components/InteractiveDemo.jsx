// InteractiveDemo.jsx
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const InteractiveDemo = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleDemoClick = () => {
    navigate('/VisualiseCanvas'); // Navigate to VisualiseCanvas page
  };

  return (
    <section className="relative w-full text-white py-16">
      <div className="relative z-10 px-6 lg:px-12 max-w-5xl mx-auto text-center">
      <h2 className="text-4xl text-center mb-16 font-bold text-white" style={{ fontFamily: 'Arial, sans-serif' }}>
        Try ShiftFlow Now!
      </h2>
        <p className="text-lg mb-6">
          Try out the tool yourself to see how it works. Interact with the demo to explore the features and capabilities.
        </p>
        <button 
          className="px-6 py-3 bg-blue-600 text-white  font-semibold rounded-lg shadow-lg hover:bg-yellow-400 hover:text-black transition-all"
          onClick={handleDemoClick} // Attach click handler
        >
          Start the Demo
        </button>
      </div>
     
    </section>
  );
};

export default InteractiveDemo;
