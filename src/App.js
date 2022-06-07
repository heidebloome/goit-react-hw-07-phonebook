import { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { Title } from './components/Title/Title.styled';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter';

export default function App() {
  // We don't need a filter value in Redux store, so let's make it a local state
  const [filter, setFilter] = useState('');

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
