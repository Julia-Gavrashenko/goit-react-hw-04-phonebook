import PropTypes from 'prop-types';
import { ListItem, Item, ItemButton, ItemSpan } from './ContactItem.styled';

export const ContactItem = ({
  info: { name, number, id },
  onDeleteContact,
}) => {
  return (
    <Item>
      <ListItem>
        <ItemSpan>{name} :</ItemSpan> {number}
      </ListItem>
      <ItemButton type="button" onClick={() => onDeleteContact(id)}>
        Delete contact
      </ItemButton>
    </Item>
  );
};

ContactItem.propTypes = {
  info: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
