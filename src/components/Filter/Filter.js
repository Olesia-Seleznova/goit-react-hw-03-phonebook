import PropTypes from 'prop-types';
import { Label, Input } from './Filter.styled';

export const Filter = ({ value, onFilter }) => {
  return (
    <Label>
      Find contacts by name
      <Input type="text" value={value} onChange={onFilter} />
    </Label>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  ononChange: PropTypes.func,
};
