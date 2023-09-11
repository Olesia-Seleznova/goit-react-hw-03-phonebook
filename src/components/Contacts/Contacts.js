import PropTypes from 'prop-types';
import { List, Contact, Button } from './Contacts.styled';

export const Contacts = ({ contacts, onDelete }) => {
  return (
    <List>
      {contacts.map(({ name, id, number }) => {
        return (
          <Contact key={id}>
            <p>
              {name}: {number}
            </p>
            <Button type="button" onClick={() => onDelete(id)}>
              Delete
            </Button>
          </Contact>
        );
      })}
    </List>
  );
};

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
  onDelete: PropTypes.func,
};
