import { useFetchContactsQuery } from '../../services/contactsApi';
import ContactItem from '../ContactItem/ContactItem';
import { List } from './ContactList.styled';

const ContactList = ({ filter }) => {
  const { data: contacts, isFetching } = useFetchContactsQuery();

  const getVisibleContacts = (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(item =>
      item.name.toLowerCase().includes(normalizedFilter),
    );
  };

  return (
    <>
      {isFetching && <div>Loading...</div>}
      {contacts && (
        <List>
          {getVisibleContacts(contacts, filter).map(item => (
            <ContactItem
              key={item.id}
              id={item.id}
              contactName={item.name}
              contactNumber={item.phone}
            />
          ))}
        </List>
      )}
    </>
  );
};

export default ContactList;
