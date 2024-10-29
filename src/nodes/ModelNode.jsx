// src/nodes/ModelNode.jsx
import BaseNode from './BaseNode';
import PropTypes from 'prop-types';

const ModelNode = ({ data }) => {
  return <BaseNode data={data} type="model" />;
};

ModelNode.propTypes = {
  data: PropTypes.shape({
    label: PropTypes.string.isRequired,
    modelType: PropTypes.string,
    setModelType: PropTypes.func.isRequired,
  }).isRequired,
};

export default ModelNode;
