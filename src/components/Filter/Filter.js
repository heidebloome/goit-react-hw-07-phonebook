import propTypes from 'prop-types';
import { Label, Input } from '../common';

const Filter = ({ setFilter }) => {
  const onChange = e => {
    setFilter(e.target.value.trim());
  };
  return (
    <Label>
      Find contacts by name
      <Input type="text" onChange={onChange}></Input>
    </Label>
  );
};

Filter.propTypes = {
  setFilter: propTypes.func.isRequired,
};

export default Filter;
