const addContact = items => {
    return {
        type: 'ADD_CONTACT',
        payload: {
            name: items.name,
            number: items.number,
        },
    };
};

const allContacts = allContacts => {
    return {
        type: 'ADD_ALL_CONTACTS',
        payload: allContacts,
    };
};

export default { addContact, allContacts };
