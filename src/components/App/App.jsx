import React from 'react';
import ContactForm from '../ContactForm/ContactForm';
import Contacts from '../Contacts/Contacts';
import Filter from '../Filter/Filter';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import {
  Container,
  PhonebookTitle,
  ContactTitle,
  ContactTotal,
} from './App.styled';
import { contactOperations, contactSelectors } from 'redux/contacts';
// import { fetchContacts } from 'redux/contacts/contactOperations';

export function App() {
  const contacts = useSelector(contactSelectors.getContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactOperations.fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <PhonebookTitle>Phonebook</PhonebookTitle>
      <ContactForm />
      <ContactTitle>Contacts</ContactTitle>
      <Filter />
      <Contacts />
      <ContactTotal>Number of contacts: {contacts.length}</ContactTotal>
    </Container>
  );
}
