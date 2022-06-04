import React from 'react';
import { useSelector } from 'react-redux';
import { getVisibleItems } from '../../redux/items/items-selectors';
import ContactItem from '../ContactItem/ContactItem';
import { List } from './ContactList.styled';

const ContactList = () => {
  const items = useSelector(getVisibleItems);

  return (
    <List>
      {items.map(item => (
        <ContactItem
          key={item.id}
          id={item.id}
          contactName={item.contactName}
          contactNumber={item.contactNumber}
        />
      ))}
    </List>
  );
};

export default ContactList;
