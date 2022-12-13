import PropTypes from 'prop-types';

export const Contact = ({ name, number, id, onDelete }) => {
  return (
    <li>
      <p>{name}</p>
      <p>{number}</p>
      <button type="button" onClick={() => onDelete(id)}>
        Delete
      </button>
    </li>
  );
};
