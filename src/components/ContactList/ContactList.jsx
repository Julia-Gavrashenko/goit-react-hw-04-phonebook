import PropTypes from 'prop-types';
import { ContactItem } from 'components/ContactItem/ContactItem';
import { ContactContainer, List } from './ContactList.styled';
import { nanoid } from 'nanoid';

export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ContactContainer>
      <List>
        {contacts.map(contact => (
          <ContactItem
            key={nanoid()}
            info={contact}
            onDeleteContact={onDeleteContact}
          ></ContactItem>
        ))}
      </List>
    </ContactContainer>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
