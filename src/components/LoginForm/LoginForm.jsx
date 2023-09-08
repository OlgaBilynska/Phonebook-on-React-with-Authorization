import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/authOperations';
import { FormInput, Label, Form, ButtonBigger } from './LoginForm.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };
  return (
    <Form autoComplete="off" onSubmit={handleSubmit}>
      <Label>
        Email
        <FormInput type="email" name="email" />
      </Label>
      <Label>
        Password
        <FormInput type="password" name="password" />
      </Label>
      <ButtonBigger type="submit">Log In</ButtonBigger>
    </Form>
  );
};
