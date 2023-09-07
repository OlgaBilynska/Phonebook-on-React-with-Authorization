import { Helmet } from 'react-helmet';
import ContactForm from 'components/ContactForm/ContactForm';
import Contacts from 'components/Contacts/Contacts';
import { useDispatch, useSelector } from 'react-redux';
import { getIsLoading } from 'redux/contacts/contactSelectors';
import { fetchContacts } from 'redux/contacts/contactOperations';
import { useEffect } from 'react';

export default function ContactPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);

  useEffect(() => dispatch(fetchContacts()), [dispatch]);

  return (
    <>
      <Helmet>
        <title>Your contacts</title>
      </Helmet>
      <ContactForm />
      {isLoading && <p>Request in progress...</p>}
      <Contacts />
    </>
  );
}
