import { useState } from 'react';
import {
  useAddContactMutation,
  useFetchContactsQuery,
} from '../../services/contactsApi';
import toast from 'react-hot-toast';
import { Button, Label, Input } from '../common';
import { Form } from './ContactForm.styled';

export default function ContactForm() {
  const [contactName, setContactName] = useState('');
  const [contactNumber, setContactNumber] = useState('');

  const { data: contacts } = useFetchContactsQuery();
  const [addContact] = useAddContactMutation();

  const onChange = e => {
    e.target.name === 'contactName'
      ? setContactName(e.target.value)
      : setContactNumber(e.target.value);
  };

  const resetState = () => {
    setContactName('');
    setContactNumber('');
  };

  const onSubmit = e => {
    e.preventDefault();

    const normalizedContactName = contactName.toLowerCase();
    const savedContactName = contacts.some(
      item => item.name.toLowerCase() === normalizedContactName,
    );
    if (savedContactName) {
      toast.error(`${contactName} is already in contacts!`);
      return;
    }

    addContact({ name: contactName, phone: contactNumber });
    toast.success(`${contactName} was added to your contacts!`);

    resetState();
  };

  return (
    <Form onSubmit={onSubmit}>
      <Label>
        Name
        <Input
          type="text"
          name="contactName"
          value={contactName}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={onChange}
        />
      </Label>
      <Label>
        Number
        <Input
          type="tel"
          name="contactNumber"
          value={contactNumber}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={onChange}
        />
      </Label>
      <Button type="submit">Add contact</Button>
    </Form>
  );
}
