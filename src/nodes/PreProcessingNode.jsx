// src/nodes/PreprocessingNode.jsx
import BaseNode from './BaseNode';
import PropTypes from 'prop-types';

const PreprocessingNode = ({ data }) => {
  return <BaseNode data={data} type="preprocessing" />;
};

PreprocessingNode.propTypes = {
  data: PropTypes.shape({
    label: PropTypes.string.isRequired,
    preprocessingSteps: PropTypes.string,
    setPreprocessingSteps: PropTypes.func.isRequired,
  }).isRequired,
};

export default PreprocessingNode;
