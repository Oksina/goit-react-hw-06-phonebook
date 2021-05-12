const allContactsReducer = (state = [], { type, payload }) => {
    switch (type) {
        case 'ADD_ALLCONTACTS':
            return [...state, payload];

        default:
            return state;
    }
};

export default allContactsReducer;
