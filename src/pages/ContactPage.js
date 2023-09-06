import { Helmet } from 'react-helmet';
import ContactForm from 'components/ContactForm/ContactForm';
import Contacts from 'components/Contacts/Contacts';

export default function ContactPage() {
  return (
    <>
      <Helmet>
        <title>Your contacts</title>
      </Helmet>
      <ContactForm />
      <Contacts />
    </>
  );
}
