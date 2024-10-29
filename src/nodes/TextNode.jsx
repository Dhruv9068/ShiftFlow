// src/nodes/TextNode.jsx

import BaseNode from './BaseNode';
import PropTypes from 'prop-types';

const TextNode = ({ data }) => {
  return <BaseNode data={data} type="text" />;
};

// Prop validation for TextNode
TextNode.propTypes = {
  data: PropTypes.shape({
    label: PropTypes.string.isRequired,
    textInput: PropTypes.string.isRequired,
    setTextInput: PropTypes.func.isRequired,
  }).isRequired,
};

export default TextNode;
