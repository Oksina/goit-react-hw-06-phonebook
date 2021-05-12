const contactReducer = (state = [''], { type, payload }) => {
    switch (type) {
        case 'ADD_CONTACT':
            const newState = payload;
            return newState;

        case 'DELETE_CONTACT':
            const deleteState = payload;
            return deleteState;

        default:
            return state;
    }
};

export default contactReducer;
