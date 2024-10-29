// src/nodes/LLMNode.jsx

import BaseNode from './BaseNode';
import PropTypes from 'prop-types';

const LLMNode = ({ data }) => {
  return <BaseNode data={data} type="llm" />;
};

// Prop validation for LLMNode
LLMNode.propTypes = {
  data: PropTypes.shape({
    label: PropTypes.string.isRequired,
    llmPrompt: PropTypes.string.isRequired,
    setLlmPrompt: PropTypes.func.isRequired,
  }).isRequired,
};

export default LLMNode;
