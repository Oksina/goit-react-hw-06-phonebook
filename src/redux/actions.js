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
