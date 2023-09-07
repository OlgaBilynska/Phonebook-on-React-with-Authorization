import React, { lazy } from 'react';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useAuth } from 'hooks';
import { Layout } from 'components/Layout';
import { RestrictedRoute } from 'components/RestrictedRoute';
import { PrivateRoute } from 'components/PrivateRoute';
import { refreshUser } from 'redux/auth/authOperations';

const HomePage = lazy(() => import('./../../pages/HomePage'));
const RegisterPage = lazy(() => import('./../../pages/RegisterPage'));
const LoginPage = lazy(() => import('./../../pages/LoginPage'));
const ContactPage = lazy(() => import('./../../pages/ContactPage'));

export function App() {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />

        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<RegisterPage />}
            />
          }
        />

        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
      </Route>

      <Route
        path="/contacts"
        element={
          <PrivateRoute redirectTo="/login" component={<ContactPage />} />
        }
      />
    </Routes>

    // <Container>
    //   <PhonebookTitle>Phonebook</PhonebookTitle>
    //   <ContactForm />
    //   <ContactTitle>Contacts</ContactTitle>
    //   <Filter />
    //   <Contacts />
    //   <ContactTotal>Number of contacts: {contacts.length}</ContactTotal>
    // </Container>
  );
}
