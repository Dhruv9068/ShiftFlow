import BaseNode from './BaseNode';
import PropTypes from 'prop-types';

const InputNode = ({ data }) => {
  return <BaseNode data={data} type="input" />;
};

// Prop validation for InputNode
InputNode.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    nodeType: PropTypes.string,
    text: PropTypes.string,
    criteria: PropTypes.string,
    value: PropTypes.string,
    transformType: PropTypes.string,
    aggregateType: PropTypes.string,
    condition: PropTypes.string,
    eventType: PropTypes.string,
    model: PropTypes.oneOf(['GPT-3', 'GPT-4']),
  }).isRequired,
};

export default InputNode;
