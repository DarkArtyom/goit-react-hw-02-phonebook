import { ContactsListItem } from './ContactListItem/ContactListItem';
import PropTypes from 'prop-types';
import { List } from './ContactListItem/ContactsList.styled';

export const ContactsList = ({ visibleContacts, onDeleteContact }) => {
  return (
    <List>
      {visibleContacts.map(contact => (
        <ContactsListItem
          key={contact.id}
          visible={contact}
          onDeleteButton={onDeleteContact}
        />
      ))}
    </List>
  );
};

ContactsList.propTypes = {
  visibleContacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
