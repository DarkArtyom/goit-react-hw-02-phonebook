import PropTypes from 'prop-types';

import { Item, BtnDelete } from './ContactsList.styled';

export const ContactsListItem = ({ visible, onDeleteButton }) => {
  return (
    <Item>
      {visible.name}: {visible.number}
      <BtnDelete type="button" onClick={() => onDeleteButton(visible.id)}>
        Delete
      </BtnDelete>
    </Item>
  );
};

ContactsListItem.propTypes = {
  visible: PropTypes.object.isRequired,
  onDeleteButton: PropTypes.func.isRequired,
};
