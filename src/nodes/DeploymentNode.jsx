// src/nodes/DeploymentNode.jsx
import BaseNode from './BaseNode';
import PropTypes from 'prop-types';

const DeploymentNode = ({ data }) => {
  return <BaseNode data={data} type="deployment" />;
};

DeploymentNode.propTypes = {
  data: PropTypes.shape({
    label: PropTypes.string.isRequired,
    deploymentConfig: PropTypes.string,
    setDeploymentConfig: PropTypes.func.isRequired,
  }).isRequired,
};

export default DeploymentNode;
