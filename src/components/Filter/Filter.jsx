import PropTypes from 'prop-types';

export const Filter = ({ onChange, filter }) => {
  return (
    <>
      <label htmlFor="text">Find contacts by name</label>
      <input type="text" value={filter} id="text" onChange={onChange} />
    </>
  );
};

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};
