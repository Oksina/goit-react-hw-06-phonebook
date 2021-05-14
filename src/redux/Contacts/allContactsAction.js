import actionTypes from './allContactsTypes';
import { v4 as id } from 'uuid';
id();

const addContact = e => {
    return {
        type: actionTypes.ADD_CONTACT,

        payload: {
            name: e.name,
            number: e.number,
            id: id(),
        },
    };
};

const deleteContact = id => ({
    type: actionTypes.DELETE_CONTACT,
    payload: id,
});

export default { addContact, deleteContact };
