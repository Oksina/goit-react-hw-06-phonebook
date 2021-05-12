const allContacts = contacts => {
    return {
        type: 'ALL_CONTACTS',
        payload: {
            name: contacts.name,
            number: contacts.number,
        },
    };
};

export default { allContacts };
