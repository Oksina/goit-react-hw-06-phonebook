export const addContact = value => ({
    type: 'add/AddContact',
    payload: value,
});
export const deleteContact = value => ({
    type: 'delete/DeleteContact',
    payload: value,
});
export const filter = value => ({
    type: 'filter/FilterContact',
    payload: value,
});
