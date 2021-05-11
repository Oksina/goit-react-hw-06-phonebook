export const addContact = contact => {
    return {
        type: 'ADD_QUERY',
        payload: {
            id: contact.id,
            name: contact.name,
            number: contact.number,
        },
    };
};

export const deleteContact = contact => {
    return {
        type: 'DELETE_CONTACT',
        payload: contact,
    };
};

export const filter = value => {
    return {
        type: 'FILTER_CONTACT',
        payload: value,
    };
};
