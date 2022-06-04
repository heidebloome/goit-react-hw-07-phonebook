import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from '../../redux/filter/filter-selectors';
import * as actions from '../../redux/filter/filter-actions';
import { Label, Input } from '../common';

const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  const onChange = e => {
    dispatch(actions.changeFilter(e.target.value));
  };
  return (
    <Label>
      Find contacts by name
      <Input type="text" value={filter} onChange={onChange}></Input>
    </Label>
  );
};

export default Filter;
