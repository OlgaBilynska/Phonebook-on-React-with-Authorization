import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/authOperations';
import { useAuth } from 'hooks';
import { Button } from 'components/Button/Button';
import { UserMenuWrapper } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useAuth();

  return (
    <UserMenuWrapper>
      <Button>Welcome, {user.user}</Button>
      <Button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </Button>
    </UserMenuWrapper>
  );
};

UserMenu.propTypes = {
  email: PropTypes.string,
};
