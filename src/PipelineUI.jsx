import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  applyNodeChanges,
  applyEdgeChanges,
  addEdge,
  MarkerType,
} from 'react-flow-renderer';
import { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { FiPlus, FiSave, FiTrash, FiUpload, FiFolder, FiX } from 'react-icons/fi'; // Relevant Icons
import BaseNode from './nodes/BaseNode'; // Custom Node Component

// Registering custom node types
const nodeTypes = {
  llm: BaseNode,
  preprocessing: BaseNode,
  modelTraining: BaseNode,
  evaluation: BaseNode,
  deployment: BaseNode,
  dataCollection: BaseNode,
  input: BaseNode,
  output: BaseNode,
  text: BaseNode,
};

// Node options with labels and types
const nodeOptions = [
  { type: 'input', label: 'Input' },
  { type: 'llm', label: 'LLM' },
  { type: 'text', label: 'Text' },
  { type: 'output', label: 'Output' },
  { type: 'preprocessing', label: 'Preprocessing' },
  { type: 'modelTraining', label: 'Training' },
  { type: 'evaluation', label: 'Evaluation' },
  { type: 'deployment', label: 'Deployment' },
  { type: 'dataCollection', label: 'Data Collection' },
];

const PipelineUI = ({ nodes = [], setNodes, edges = [], setEdges }) => {
  const [showMore, setShowMore] = useState(false);
  const [nodeColor] = useState('#fff');
  const [edgeColor] = useState('#0adcf8');
  const [showSidebar, setShowSidebar] = useState(false); // State for sidebar visibility
  const [history, setHistory] = useState([]); // State for undo/redo history
  const [currentStep, setCurrentStep] = useState(-1); // Track current step in history

  const handleAddNode = useCallback((type, position) => {
    const formatLabel = (type) => {
      return type.replace(/([a-z])([A-Z])/g, '$1 $2') // Add space before uppercase letters in camelCase
                 .replace(/([a-z])(_)/g, '$1 ') // Add space after underscores
                 .replace(/_/g, ' ') // Replace underscores with spaces
                 .toUpperCase(); // Convert to uppercase
    };

    const defaultData = {
      label: formatLabel(type),
      textInput: '',
      model: '',
      system: '',
      prompt: '',
      output: '',
      preprocessSteps: '',
      trainingParams: '',
      validationData: '',
      evalMetrics: '',
      resultsSummary: '',
      deployInfo: '',
      deploymentLink: '',
      dataSource: '',
      collectionMethod: '',
      setDataField: (field, value) => {
        setNodes((prevNodes) => {
          const nodeIndex = prevNodes.findIndex((node) => node.id === newNode.id);
          if (nodeIndex === -1) return prevNodes;

          const updatedNode = {
            ...prevNodes[nodeIndex],
            data: {
              ...prevNodes[nodeIndex].data,
              [field]: value,
            },
          };
          return [...prevNodes.slice(0, nodeIndex), updatedNode, ...prevNodes.slice(nodeIndex + 1)];
        });
      },
    };

    const newNode = {
      id: `${type}-${new Date().getTime()}`, // Unique ID for each node
      type: type, // Type of the node
      position: position, // Position where the node will be placed
      data: defaultData, // Node data
      style: {
        backgroundColor: nodeColor,
        width: 200,
      }, // Node background color
    };

    // Update nodes and history
    setNodes((prevNodes) => {
      const updatedNodes = prevNodes.concat(newNode);
      setHistory((prevHistory) => {
        const newHistory = [...prevHistory.slice(0, currentStep + 1), updatedNodes];
        setCurrentStep(newHistory.length - 1);
        return newHistory;
      });
      return updatedNodes;
    });
  }, [setNodes, nodeColor, history, currentStep]);

  const onConnect = (params) => {
    const edgeWithLabel = {
      ...params,
      type: 'step',
      style: { stroke: edgeColor, strokeDasharray: '8' },
      label: params.sourceHandle,
      markerEnd: { type: MarkerType.ArrowClosed, color: edgeColor },
    };
    setEdges((prev) => addEdge(edgeWithLabel, prev));
  };

  // Handle JSON file upload
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const json = JSON.parse(e.target.result);
          setNodes(json.nodes || []);
          setEdges(json.edges || []);
          setHistory([]); // Clear history on new upload
          setCurrentStep(-1); // Reset current step
        } catch (error) {
          console.error("Invalid JSON file", error);
        }
      };
      reader.readAsText(file);
    }
  };

  // Download current nodes and edges as JSON
  const downloadJSON = (data, filename = 'pipeline.json') => {
    const json = JSON.stringify({ nodes: data.nodes, edges: data.edges }, null, 2);
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  // Undo function
  const handleUndo = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      setNodes(history[currentStep - 1]);
      setEdges(edges);
    }
  };

  // Redo function
  const handleRedo = () => {
    if (currentStep < history.length - 1) {
      setCurrentStep(currentStep + 1);
      setNodes(history[currentStep + 1]);
      setEdges(edges);
    }
  };

  return (
    <div className="flex flex-col h-[88vh] w-full overflow-hidden">
      {/* Node Buttons at the Top */}
      <div className="flex flex-col sm:flex-row justify-between items-center py-2 px-4 space-y-2 sm:space-y-0">
        <div className="flex flex-wrap justify-center space-x-2">
          {(showMore ? nodeOptions : nodeOptions.slice(0, 5)).map((node, index) => (
            <button
              key={index}
              className="py-3 px-4 sm:px-6 text-white border border-white hover:bg-blue-950 hover:border-white transition-all duration-200 rounded text-sm sm:text-base"
              onClick={(e) => handleAddNode(node.type, { x: e.clientX, y: e.clientY })}
            >
              <FiPlus className="mr-1" />
              {node.label}
            </button>
          ))}
          {!showMore && (
            <button
              className="p-1 text-white underline hover:text-opacity-80 transition-all duration-200"
              onClick={() => setShowMore(true)}
            >
              More...
            </button>
          )}
        </div>

        {/* Undo/Redo/Clear/Save/Sidebar Toggle Buttons */}
        <div className="flex space-x-2">
          <button
            className="p-2 bg-gray-900 border border-gray-600 rounded hover:bg-gray-700 text-white"
            onClick={handleUndo}
            disabled={currentStep <= 0} // Disable if there's nothing to undo
          >
            Undo
          </button>
          <button
            className="p-2 bg-gray-900 border border-gray-600 rounded hover:bg-gray-700 text-white"
            onClick={handleRedo}
            disabled={currentStep >= history.length - 1} // Disable if there's nothing to redo
          >
            Redo
          </button>
          <button
            className="p-2 bg-gray-900 border border-gray-600 rounded hover:bg-gray-700"
            onClick={() => {
              setNodes([]);
              setEdges([]);
              setHistory([]); // Clear history on clear
              setCurrentStep(-1); // Reset current step
            }}
          >
            <FiTrash className="text-white" />
          </button>
          <button
            className="p-2 bg-gray-900 border border-gray-600 rounded hover:bg-gray-700"
            onClick={() => {
              const savedGraph = { nodes, edges };
              localStorage.setItem('savedGraph', JSON.stringify(savedGraph));
            }}
          >
            <FiSave className="text-white" />
          </button>
          <button
            className="p-2 bg-gray-900 border border-gray-600 rounded hover:bg-gray-700"
            onClick={() => setShowSidebar(!showSidebar)} // Toggle sidebar visibility
          >
            <FiFolder className="text-white" />
          </button>
        </div>
      </div>

      {/* Sidebar for Upload/Download Options */}
      {showSidebar && (
        <div className="fixed right-0 top-0 h-full w-64 bg-black bg-opacity-80 text-white p-4 shadow-lg z-50">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">File Options</h2>
            <button onClick={() => setShowSidebar(false)}>
              <FiX className="text-white" />
            </button>
          </div>
          <div className="mb-4 mt-10">
            <input
              type="file"
              accept=".json"
              onChange={handleFileUpload}
              className="mb-2"
            />
            <button
              className="w-full bg-blue-950 text-white py-10 rounded"
              onClick={() => downloadJSON({ nodes, edges })}
            >
              Download JSON
            </button>
          </div>
        </div>
      )}

   {/* ReactFlow Graph */}
   <div className="w-full h-full relative bg-gradient-to-b from-black to-blue-950">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={(changes) => setNodes((prev) => applyNodeChanges(changes, prev))}
          onEdgesChange={(changes) => setEdges((prev) => applyEdgeChanges(changes, prev))}
          onConnect={onConnect}
          fitView
          nodeTypes={nodeTypes} // Register node types
        >
          <MiniMap
            nodeStrokeColor={(node) => node.style.backgroundColor || '#fff'}
            nodeColor={(node) => (node.type === 'output' ? '#0adcf8' : '#ff0072')}
            style={{
              backgroundColor: '#1a1a1a',
              border: '2px solid #0adcf8',
              borderRadius: '12px',
            }}
          />
          <Controls />
          <Background />
        </ReactFlow>
      </div>
    </div>
  );
};

PipelineUI.propTypes = {
  nodes: PropTypes.array.isRequired,
  setNodes: PropTypes.func.isRequired,
  edges: PropTypes.array.isRequired,
  setEdges: PropTypes.func.isRequired,
};

export default PipelineUI;
