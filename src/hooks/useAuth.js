import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth/authSelectors.js';

export const useAuth = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const isRefreshing = useSelector(authSelectors.getIsRefreshing);
  const user = useSelector(authSelectors.getUsername);

  return {
    isLoggedIn,
    isRefreshing,
    user,
  };
};
