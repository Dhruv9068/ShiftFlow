// src/nodes/TrainingNode.jsx
import BaseNode from './BaseNode';
import PropTypes from 'prop-types';

const TrainingNode = ({ data }) => {
  return <BaseNode data={data} type="training" />;
};

TrainingNode.propTypes = {
  data: PropTypes.shape({
    label: PropTypes.string.isRequired,
    trainingData: PropTypes.string,
    setTrainingData: PropTypes.func.isRequired,
  }).isRequired,
};

export default TrainingNode;
