import  { useState } from 'react';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PipelineUI from './PipelineUI';
import Toolbar from "./Toolbar";


const VisualiseCanvas = () => {
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);

  return (
    <div className="app-container dark:bg-gray-900 dark:text-white">
     <Toolbar nodes={nodes} edges={edges} />
      <div className="main-content">
        < PipelineUI
          nodes={nodes}
          setNodes={setNodes}
          edges={edges}
          setEdges={setEdges}
        />
      </div>
      
      <ToastContainer />
    </div>
  );
};

export default VisualiseCanvas;
