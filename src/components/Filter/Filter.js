import { Label, Input } from '../common';

const Filter = ({ setFilter }) => {
  const onChange = e => {
    setFilter(e.target.value);
  };
  return (
    <Label>
      Find contacts by name
      <Input type="text" onChange={onChange}></Input>
    </Label>
  );
};

export default Filter;
