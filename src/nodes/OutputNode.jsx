// src/nodes/OutputNode.jsx

import BaseNode from './BaseNode';
import PropTypes from 'prop-types';

const OutputNode = ({ data }) => {
  return <BaseNode data={data} type="output" />;
};

// Prop validation for OutputNode
OutputNode.propTypes = {
  data: PropTypes.shape({
    label: PropTypes.string.isRequired,
    output: PropTypes.string,
  }).isRequired,
};

export default OutputNode;
