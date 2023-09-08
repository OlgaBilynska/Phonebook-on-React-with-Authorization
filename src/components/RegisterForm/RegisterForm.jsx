import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authOperations';
import { FormInput, ButtonBigger, Form, Label } from './RegisterForm.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    console.log('form', form.elements.name.value);
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Label>
        Name
        <FormInput type="text" name="name" />
      </Label>
      <Label>
        Email
        <FormInput type="email" name="email" />
      </Label>
      <Label>
        Password
        <FormInput type="password" name="password" />
      </Label>
      <ButtonBigger type="submit">Register</ButtonBigger>
    </Form>
  );
};
