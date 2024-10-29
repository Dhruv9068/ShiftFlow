import { Handle } from 'react-flow-renderer';
import PropTypes from 'prop-types';

const BaseNode = ({ data, type }) => {
  const handleChange = (field, value) => {
    if (data.setDataField) {
      data.setDataField(field, value);
    }
  };
  const handleStyle = {
    backgroundColor: '#0adcf8', // Change color as needed
    width: '10px', // Change width as needed
    height: '10px', // Change height as needed
    borderRadius: '50%', // For round handles
    border: '2px solid #fff', // Optional: Border color
    boxShadow: '0 0 5px rgba(0, 0, 0, 0.5)', // Optional: Shadow for depth
  };

  return (
    <div className=" p-2 rounded ">
      <Handle type="target" position="left" style ={handleStyle}/>
      <div className="font-bold">{data.label}</div>

      {/* Input Node */}
      {type === 'input' && (
        <>
          <input
            type="text"
            value={data.name || ''}
            onChange={(e) => handleChange('name', e.target.value)}
            placeholder="Name"
            className="w-full p-3 rounded mt-2"
          />
          <select
            value={data.inputType || ''}
            onChange={(e) => handleChange('inputType', e.target.value)}
            className="w-full p-3 mt-2"
          >
            <option value="">Type</option>
            <option value="text">Text</option>
            <option value="number">Number</option>
            <option value="email">Email</option>
            {/* Add more input types as needed */}
          </select>
          <textarea
            value={data.textInput || ''}
            onChange={(e) => handleChange('textInput', e.target.value)}
            placeholder="Type your input..."
            className="w-full p-1 rounded mt-2"
            style={{ resize: 'vertical', minHeight: '50px' }} // Allow height adjustment
          />
        </>
      )}

      {/* Text Node */}
      {type === 'text' && (
        <>
          <textarea
            value={data.textInput || ''}
            onChange={(e) => handleChange('textInput', e.target.value)}
            placeholder="Type your message..."
            className="w-full p-1 rounded mt-2"
            style={{ resize: 'vertical', minHeight: '50px' }}
          />
          {data.textInput.match(/{{\s*(\w+)\s*}}/) && (
            <Handle type="source" position="left" id={data.textInput.match(/{{\s*(\w+)\s*}}/)[1]} />
          )}
        </>
      )}

      {/* Output Node */}
      {type === 'output' && (
        <>
          <input
            type="text"
            value={data.name || ''}
            onChange={(e) => handleChange('name', e.target.value)}
            placeholder="Output Name"
            className="w-full p-2 rounded mt-2"
          />
          <select
            value={data.outputType || ''}
            onChange={(e) => handleChange('outputType', e.target.value)}
            className="w-full p-3 mt-2"
          >
            <option value="">Type</option>
            <option value="response">Response</option>
            <option value="text">Text</option>
            {/* Add more output types as needed */}
          </select>
        </>
      )}

      {/* Preprocessing Node */}
      {type === 'preprocessing' && (
        <>
          <textarea
            value={data.preprocessSteps || ''}
            onChange={(e) => handleChange('preprocessSteps', e.target.value)}
            placeholder="Describe preprocessing steps..."
            className="w-full p-1 rounded mt-2"
            style={{ resize: 'vertical', minHeight: '50px' }}
          />
        </>
      )}

      {/* Model Training Node */}
      {type === 'modelTraining' && (
        <>
          <textarea
            value={data.trainingParams || ''}
            onChange={(e) => handleChange('trainingParams', e.target.value)}
            placeholder="Training parameters..."
            className="w-full p-1 rounded mt-2"
            style={{ resize: 'vertical', minHeight: '50px' }}
          />
          <textarea
            value={data.validationData || ''}
            onChange={(e) => handleChange('validationData', e.target.value)}
            placeholder="Validation data..."
            className="w-full p-1 rounded mt-2"
            style={{ resize: 'vertical', minHeight: '50px' }}
          />
        </>
      )}

      {/* Evaluation Node */}
      {type === 'evaluation' && (
        <>
          <textarea
            value={data.evalMetrics || ''}
            onChange={(e) => handleChange('evalMetrics', e.target.value)}
            placeholder="Define evaluation metrics..."
            className="w-full p-1 rounded mt-2"
            style={{ resize: 'vertical', minHeight: '50px' }}
          />
          <textarea
            value={data.resultsSummary || ''}
            onChange={(e) => handleChange('resultsSummary', e.target.value)}
            placeholder="Results summary..."
            className="w-full p-1 rounded mt-2"
            style={{ resize: 'vertical', minHeight: '50px' }}
          />
        </>
      )}

      {/* Deployment Node */}
      {type === 'deployment' && (
        <>
          <textarea
            value={data.deployInfo || ''}
            onChange={(e) => handleChange('deployInfo', e.target.value)}
            placeholder="Deployment information..."
            className="w-full p-1 rounded mt-2"
            style={{ resize: 'vertical', minHeight: '50px' }}
          />
          <input
            type="text"
            value={data.deploymentLink || ''}
            onChange={(e) => handleChange('deploymentLink', e.target.value)}
            placeholder="Deployment URL"
            className="w-full p-1 rounded mt-2"
          />
        </>
      )}

      {/* Data Collection Node */}
      {type === 'dataCollection' && (
        <>
          <textarea
            value={data.dataSource || ''}
            onChange={(e) => handleChange('dataSource', e.target.value)}
            placeholder="Specify data source..."
            className="w-full p-1 rounded mt-2"
            style={{ resize: 'vertical', minHeight: '50px' }}
          />
          <input
            type="text"
            value={data.collectionMethod || ''}
            onChange={(e) => handleChange('collectionMethod', e.target.value)}
            placeholder="Collection method"
            className="w-full p-1 rounded mt-2"
          />
        </>
      )}

      {/* LLM Node */}
      {type === 'llm' && (
        <>
          <h3 className="text-lg font-bold mt-4">OpenAI GPT</h3>
          <select
            className="w-full p-1 px-3 mt-2"
            value={data.model || ''}
            onChange={(e) => handleChange('model', e.target.value)}
          >
            <option value="">Select Model</option>
            <option value="GPT-3">GPT-3</option>
            <option value="GPT-4">GPT-4</option>
          </select>
          <textarea
            value={data.system || ''}
            onChange={(e) => handleChange('system', e.target.value)}
            placeholder="System"
            className="w-full p-1 mt-2 px-3"
          />
          <textarea
            value={data.prompt || ''}
            onChange={(e) => handleChange('prompt', e.target.value)}
            placeholder="Prompt"
            className="w-full p-1 px-3 mt-2"
          />
        </>
      )}

      <Handle type="source" position="right" style ={handleStyle} />
    </div>
  );
};

// Prop validation for BaseNode
BaseNode.propTypes = {
  data: PropTypes.shape({
    label: PropTypes.string.isRequired,
    name: PropTypes.string,
    inputType: PropTypes.string,
    textInput: PropTypes.string,
    outputType: PropTypes.string,
    preprocessSteps: PropTypes.string,
    model: PropTypes.oneOf(['GPT-3', 'GPT-4']),
    trainingParams: PropTypes.string,
    validationData: PropTypes.string,
    evalMetrics: PropTypes.string,
    resultsSummary: PropTypes.string,
    deployInfo: PropTypes.string,
    deploymentLink: PropTypes.string,
    dataSource: PropTypes.string,
    collectionMethod: PropTypes.string,
    setDataField: PropTypes.func,
    system: PropTypes.string,
    prompt: PropTypes.string,
  }).isRequired,
  type: PropTypes.oneOf([
    'input',
    'text',
    'output',
    'preprocessing',
    'modelTraining',
    'evaluation',
    'deployment',
    'dataCollection',
    'llm',
  ]).isRequired,
};

export default BaseNode;
