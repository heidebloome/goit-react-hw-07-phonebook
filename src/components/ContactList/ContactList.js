import React from 'react';
import ContactItem from '../ContactItem/ContactItem';
import { List } from './ContactList.styled';
import { useFetchContactsQuery } from '../../services/contactsApi';

const ContactList = ({ filter }) => {
  const { data } = useFetchContactsQuery();
  console.log('data', data);
  console.log('filter', filter);

  return (
    <List>
      {data.map(item => (
        <ContactItem
          key={item.id}
          id={item.id}
          contactName={item.name}
          contactNumber={item.phone}
        />
      ))}
    </List>
  );
};

export default ContactList;
