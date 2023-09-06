import PropTypes from 'prop-types';

export const UserMenu = ({ email }) => {
  return (
    <div>
      <p>{email}</p>
      <button>Logout</button>
    </div>
  );
};

UserMenu.propTypes = {
  email: PropTypes.string,
};
