import PropTypes from 'prop-types';

export const Notification = ({ filter }) => {
  return <p>{filter} not found</p>;
};

Notification.propTypes = {
  filter: PropTypes.string.isRequired,
};
