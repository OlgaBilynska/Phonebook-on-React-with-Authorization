import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <NavLink>Home</NavLink>
      {isLoggedIn && <NavLink>Contacts</NavLink>}
    </nav>
  );
};
