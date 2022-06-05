import { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { Title } from './components/Title/Title.styled';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter';

export default function App() {
  const [filter, setFilter] = useState('');
  console.log(filter);

  return (
    <>
      <Title>Phonebook</Title>
      <ContactForm />
      <Title mt={7}>Contacts</Title>
      <Filter setFilter={setFilter} />
      <ContactList filter={filter} />
      <Toaster />
    </>
  );
}
