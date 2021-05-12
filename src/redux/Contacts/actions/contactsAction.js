const addContact = contact => {
    return {
        type: 'ADD_CONTACT',
        payload: {
            name: contact.name,
            number: contact.number,
        },
    };
};

export default { addContact };
