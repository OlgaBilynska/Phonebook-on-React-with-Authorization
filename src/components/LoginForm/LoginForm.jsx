// import { useDispatch } from 'react-redux';

export const LoginForm = () => {
  // const dispatch = useDispatch();

  return (
    <>
      <form autoComplete="off">
        <label>
          Email
          <input />
        </label>
        <label>
          Password
          <input />
        </label>
        <button type="submit">Log In</button>
      </form>
    </>
  );
};
