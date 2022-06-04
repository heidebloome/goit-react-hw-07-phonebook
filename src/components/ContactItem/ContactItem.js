import React from 'react';
import { useDispatch } from 'react-redux';
import * as actions from '../../redux/items/items-actions';
import propTypes from 'prop-types';
import toast from 'react-hot-toast';
import { Button } from '../common';
import { Item, Wrapper, Text } from './ContactItem.styled';

const ContactItem = ({ id, contactName, contactNumber }) => {
  const dispatch = useDispatch();

  const onContactDelete = (id, contactName) => {
    dispatch(actions.deleteContact(id));
    toast.error(`${contactName} was deleted from your contacts!`);
  };

  return (
    <Item>
      <Wrapper>
        <Text fwb>{contactName}</Text>
        <Text>{contactNumber}</Text>
      </Wrapper>
      <Button onClick={() => onContactDelete(id, contactName)}>Delete</Button>
    </Item>
  );
};

ContactItem.propTypes = {
  id: propTypes.string.isRequired,
  contactName: propTypes.string.isRequired,
  contactNumber: propTypes.string.isRequired,
};

export default ContactItem;
