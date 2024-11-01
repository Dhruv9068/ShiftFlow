import { Handle } from 'react-flow-renderer';
import PropTypes from 'prop-types';


const BaseNode = ({ data, type }) => {
  const handleChange = (field, value) => {
    if (data.setDataField) {
      data.setDataField(field, value);
    }
  };

  const handleStyle = {
    backgroundColor: '#0adcf8',
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    border: '2px solid #fff',
    boxShadow: '0 0 5px rgba(0, 0, 0, 0.5)',
  };

  // Function to auto-resize textarea
  const autoResize = (event) => {
    event.target.style.height = 'auto'; // Reset height
    event.target.style.height = `${event.target.scrollHeight}px`; // Set to scroll height
  };

  return (
    <div className="p-2 rounded">
      <Handle type="target" position="left" style={handleStyle} />
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
            <option value="date">Date</option>
          </select>
          
          
          {data.additionalInputs && data.additionalInputs.map((input, index) => (
            <input
              key={index}
              type="text"
              value={input}
              onChange={(e) => {
                const newInputs = [...data.additionalInputs];
                newInputs[index] = e.target.value;
                handleChange('additionalInputs', newInputs);
              }}
              placeholder={`Additional Input ${index + 1}`}
              className="w-full p-1 rounded mt-2"
            />
          ))}
        </>
      )}

      {/* Text Node */}
      {type === 'text' && (
        <>
          <textarea
            value={data.textInput || ''}
            onChange={(e) => {
              handleChange('textInput', e.target.value);
              autoResize(e); // Call autoResize on change
            }}
            placeholder="Type your message..."
            className="w-full p-1 rounded mt-2"
            style={{ resize: 'none', minHeight: '50px' }}
            onInput={autoResize} // Resize on input
          />
          <select
            value={data.textFormat || ''}
            onChange={(e) => handleChange('textFormat', e.target.value)}
            className="w-full p-3 mt-2"
          >
            <option value="">Format</option>
            <option value="plain">Plain Text</option>
            <option value="markdown">Markdown</option>
          </select>
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
            <option value="json">JSON</option>
            <option value="xml">XML</option>
          </select>
        </>
      )}

      {/* Preprocessing Node */}
      {type === 'preprocessing' && (
        <>
          <textarea
            value={data.preprocessSteps || ''}
            onChange={(e) => {
              handleChange('preprocessSteps', e.target.value);
              autoResize(e); // Call autoResize on change
            }}
            placeholder="Describe preprocessing steps..."
            className="w-full p-1 rounded mt-2"
            style={{ resize: 'none', minHeight: '50px' }}
            onInput={autoResize} // Resize on input
          />
          <select
            value={data.transformationType || ''}
            onChange={(e) => handleChange('transformationType', e.target.value)}
            className="w-full p-3 mt-2"
          >
            <option value="">Transformation Type</option>
            <option value="normalization">Normalization</option>
            <option value="encoding">Encoding</option>
          </select>
        </>
      )}

      {/* Model Training Node */}
      {type === 'modelTraining' && (
        <>
          <textarea
            value={data.trainingParams || ''}
            onChange={(e) => {
              handleChange('trainingParams', e.target.value);
              autoResize(e); // Call autoResize on change
            }}
            placeholder="Training parameters..."
            className="w-full p-1 rounded mt-2"
            style={{ resize: 'none', minHeight: '50px' }}
            onInput={autoResize} // Resize on input
          />
          <input
            type="text"
            value={data.batchSize || ''}
            onChange={(e) => handleChange('batchSize', e.target.value)}
            placeholder="Batch Size"
            className="w-full p-1 rounded mt-2"
          />
          <textarea
            value={data.validationData || ''}
            onChange={(e) => {
              handleChange('validationData', e.target.value);
              autoResize(e); // Call autoResize on change
            }}
            placeholder="Validation data..."
            className="w-full p-1 rounded mt-2"
            style={{ resize: 'none', minHeight: '50px' }}
            onInput={autoResize} // Resize on input
          />
        </>
      )}

      {/* Evaluation Node */}
      {type === 'evaluation' && (
        <>
          <textarea
            value={data.evalMetrics || ''}
            onChange={(e) => {
              handleChange('evalMetrics', e.target.value);
              autoResize(e); // Call autoResize on change
            }}
            placeholder="Define evaluation metrics..."
            className="w-full p-1 rounded mt-2"
            style={{ resize: 'none', minHeight: '50px' }}
            onInput={autoResize} // Resize on input
          />
          <textarea
            value={data.resultsSummary || ''}
            onChange={(e) => {
              handleChange('resultsSummary', e.target.value);
              autoResize(e); // Call autoResize on change
            }}
            placeholder="Results summary..."
            className="w-full p-1 rounded mt-2"
            style={{ resize: 'none', minHeight: '50px' }}
            onInput={autoResize} // Resize on input
          />
          <button onClick={() => handleChange('showGraph', !data.showGraph)} className="mt-2 p-2 bg-green-500 text-white rounded">Toggle Graph</button>
          {data.showGraph && <div className="graph-placeholder">Graph goes here</div>}
        </>
      )}

      {/* Deployment Node */}
      {type === 'deployment' && (
        <>
          <input
            type="text"
            value={data.environmentVariables || ''}
            onChange={(e) => handleChange('environmentVariables', e.target.value)}
            placeholder="Environment Variables"
            className="w-full p-1 rounded mt-2"
          />
          <button onClick={() => handleChange('rollback', true)} className="mt-2 p-2 bg-blue-500 text-white rounded">Rollback</button>
        </>
      )}
         {type === 'llm' && (
        <>
          <h3 className="text-lg font-bold mt-4">OpenAI GPT-4</h3>
          <select
            className="w-full p-1 bg-transparent border-b border-gray-400 mt-2"
            value={data.model || ''}
            onChange={(e) => (data.model = e.target.value)}
          >
            <option value="">Select Model</option>
            <option value="GPT-3">GPT-3</option>
            <option value="GPT-4">GPT-4</option>
          </select>
          <textarea
            value={data.system || ''}
            onChange={(e) => (data.system = e.target.value)}
            placeholder="System"
            className="w-full p-1 bg-transparent border-b border-gray-400 mt-2"
          />
          <textarea
            value={data.prompt || ''}
            onChange={(e) => (data.prompt = e.target.value)}
            placeholder="Prompt"
            className="w-full p-1 bg-transparent border-b border-gray-400 mt-2"
          />
        </>
      )}



      {/* Data Collection Node */}
      {type === 'dataCollection' && (
        <>
          <input
            type="text"
            value={data.apiEndpoint || ''}
            onChange={(e) => handleChange('apiEndpoint', e.target.value)}
            placeholder="API Endpoint"
            className="w-full p-1 rounded mt-2"
          />
          <input
            type="text"
            value={data.collectionMethod || ''}
            onChange={(e) => handleChange('collectionMethod', e.target.value)}
            placeholder="Collection Method"
            className="w-full p-1 rounded mt-2"
          />
        </>
      )}

      <Handle type="source" position="right" style={handleStyle} />
    </div>
  );
};

BaseNode.propTypes = {
  data: PropTypes.shape({
    label: PropTypes.string,
    name: PropTypes.string,
    inputType: PropTypes.string,
    textInput: PropTypes.string,
    textFormat:PropTypes.string,
    additionalInputs: PropTypes.arrayOf(PropTypes.string),
    outputType: PropTypes.string,
    preprocessSteps: PropTypes.string,
    transformationType: PropTypes.string,
    trainingParams: PropTypes.string,
    batchSize: PropTypes.string,
    validationData: PropTypes.string,
    evalMetrics: PropTypes.string,
    resultsSummary: PropTypes.string,
    showGraph: PropTypes.bool,
    environmentVariables: PropTypes.string,
    apiEndpoint: PropTypes.string,
    collectionMethod: PropTypes.string,
    setDataField: PropTypes.func,
  }).isRequired,
  type: PropTypes.string.isRequired,
};

export default BaseNode;
