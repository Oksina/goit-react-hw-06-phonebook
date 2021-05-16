import { createAction } from '@reduxjs/toolkit';
import { v4 as id } from 'uuid';
id();

const addContact = createAction('contacts/add', e => ({
    payload: {
        name: e.name,
        number: e.number,
        id: id(),
    },
}));
const deleteContact = createAction('contacts/delete');

export default { addContact, deleteContact };
