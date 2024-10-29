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
import { FiSave, FiTrash, FiUpload } from 'react-icons/fi'; // Icons
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

  const handleAddNode = useCallback((type, position) => {
    const defaultData = {
      label: `${type.toUpperCase()}`,
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

    setNodes((prevNodes) => prevNodes.concat(newNode));
  }, [setNodes, nodeColor]);

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

        {/* Save/Load/Clear Buttons */}
        <div className="flex space-x-2">
          <button
            className="p-2 bg-gray-900 border border-gray-600 rounded hover:bg-gray-700"
            onClick={() => {
              setNodes([]);
              setEdges([]);
            }}
          >
            <FiTrash className="text-white" />
          </button>
          <button
            className="p-2 bg-gray-900 border border-gray-600 rounded hover:bg-gray-700"
            onClick={() => localStorage.setItem('savedGraph', JSON.stringify({ nodes, edges }))}
          >
            <FiSave className="text-white" />
          </button>
          <button
            className="p-2 bg-gray-900 border border-gray-600 rounded hover:bg-gray-700"
            onClick={() => {
              const savedGraph = JSON.parse(localStorage.getItem('savedGraph'));
              if (savedGraph) {
                setNodes(savedGraph.nodes);
                setEdges(savedGraph.edges);
              }
            }}
          >
            <FiUpload className="text-white" />
          </button>
        </div>
      </div>

      {/* ReactFlow Graph */}
      <div className="w-full h-full relative">
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
