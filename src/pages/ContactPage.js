import { Helmet, HelmetProvider } from 'react-helmet-async';
import ContactForm from 'components/ContactForm/ContactForm';
import Contacts from 'components/Contacts/Contacts';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getIsLoading } from 'redux/contacts/contactSelectors';
import { fetchContacts } from 'redux/contacts/contactOperations';
import { useEffect } from 'react';
import Filter from 'components/Filter/Filter';
import { ContactTotal } from 'components/App/App.styled';

export default function ContactPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const contacts = useSelector(getContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <HelmetProvider>
      <Helmet>
        <title>Your contacts</title>
      </Helmet>
      <ContactForm />
      {isLoading && <p>Request in progress...</p>}
      <Filter />
      <Contacts />
      <ContactTotal>Number of contacts: {contacts.length}</ContactTotal>
    </HelmetProvider>
  );
}
