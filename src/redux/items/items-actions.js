import { createAction } from '@reduxjs/toolkit';
import shortid from 'shortid';

export const addContact = createAction(
  'contacts/add',
  (contactName, contactNumber) => {
    return {
      payload: {
        id: shortid.generate(),
        contactName,
        contactNumber,
      },
    };
  },
);

export const deleteContact = createAction('contacts/delete');
