import PropTypes from 'prop-types';
import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';
const Toolbar = ({ nodes, edges }) => {
  const [validationMessage, setValidationMessage] = useState('');
  const [messageVisible, setMessageVisible] = useState(false);

  const handleSubmit = async () => {
    try {
      // Check if nodes and edges are empty
      if (nodes.length === 0 && edges.length === 0) {
        setValidationMessage('The graph is empty. Please add nodes and edges.');
        setMessageVisible(true);
        setTimeout(() => setMessageVisible(false), 3000);
        return;
      }

      const response = await axios.post(
        'https://shiftflow-bakend-1.onrender.com/validate_dag',
        { nodes, edges },
        { headers: { 'Content-Type': 'application/json' } }
      );

      setValidationMessage(response.data.message || 'Validation completed.');
      setMessageVisible(true);
      setTimeout(() => setMessageVisible(false), 3000); // Hide message after 3 seconds
    } catch (error) {
      console.error(
        'Error validating DAG:',
        error.response ? error.response.data : error.message
      );
      setValidationMessage('Error validating DAG.');
      setMessageVisible(true);
      setTimeout(() => setMessageVisible(false), 3000); // Hide message after 3 seconds
    }
  };

  return (
    <div className="toolbar flex items-center justify-between px-6 py-4 bg-black">
      {/* Left: Back to Shiftflow */}
      

<div className="text-white text-lg cursor-pointer hover:underline">
  <Link to="/">Back to Shiftflow</Link>
</div>

      {/* Right: Validate DAG button */}
      <div className="flex items-center space-x-4">
        <button
          onClick={handleSubmit}
          className="p-2 border border-transparent text-white rounded transition-all duration-200 ease-in-out hover:border-white hover:bg-white hover:text-black active:scale-95"
        >
          Validate DAG
        </button>

        {validationMessage && (
          <div
            className={`p-2 rounded transition-opacity duration-500 ease-in-out ${
              messageVisible ? 'opacity-100' : 'opacity-0'
            } ${
              validationMessage.includes('not valid')
                ? 'bg-red-500 text-white'
                : 'bg-green-500 text-white'
            }`}
          >
            {validationMessage}
          </div>
        )}
      </div>
    </div>
  );
};

Toolbar.propTypes = {
  nodes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      data: PropTypes.shape({
        label: PropTypes.string.isRequired,
      }).isRequired,
      position: PropTypes.shape({
        x: PropTypes.number.isRequired,
        y: PropTypes.number.isRequired,
      }).isRequired,
      style: PropTypes.object.isRequired,
    })
  ).isRequired,
  edges: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      source: PropTypes.string.isRequired,
      target: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      style: PropTypes.object.isRequired,
    })
  ).isRequired,
};

export default Toolbar;
