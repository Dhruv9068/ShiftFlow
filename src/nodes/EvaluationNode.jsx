// src/nodes/EvaluationNode.jsx
import BaseNode from './BaseNode';
import PropTypes from 'prop-types';

const EvaluationNode = ({ data }) => {
  return <BaseNode data={data} type="evaluation" />;
};

EvaluationNode.propTypes = {
  data: PropTypes.shape({
    label: PropTypes.string.isRequired,
    evaluationMetrics: PropTypes.string,
    setEvaluationMetrics: PropTypes.func.isRequired,
  }).isRequired,
};

export default EvaluationNode;
