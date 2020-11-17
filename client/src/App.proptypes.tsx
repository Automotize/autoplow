import PropTypes from 'prop-types';

export const propTypes = {
  checkUserSessionFunc: PropTypes.func.isRequired,
  match: PropTypes.shape({
    isExact: PropTypes.bool,
    params: PropTypes.objectOf(PropTypes.any),
    path: PropTypes.string,
    url: PropTypes.string,
  }).isRequired,
};

export default propTypes;
