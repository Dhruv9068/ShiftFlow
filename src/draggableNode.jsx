import PropTypes from 'prop-types';
import { memo } from 'react';
import { Handle } from 'react-flow-renderer';

const DraggableNode = ({ data }) => {
  return (
    <div
      className={`p-4 rounded shadow-lg bg-${data.color || 'gray-700'} text-white`}
      style={{ transition: 'transform 0.3s ease-in-out' }}
    >
      <div className="font-bold">{data.label}</div>
      <Handle type="source" position="right" />
      <Handle type="target" position="left" />
    </div>
  );
};

DraggableNode.propTypes = {
  data: PropTypes.shape({
    color: PropTypes.string,
    label: PropTypes.string.isRequired,
  }).isRequired,
};

export default memo(DraggableNode);
