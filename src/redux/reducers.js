const contactReducer = (state = '', { type, payload }) => {
    switch (type) {
        case 'ADD_QUERY':
            const newState = payload;
            return newState;
        default:
            return state;
    }
};

const filterReducer = (state = '', { type, payload }) => {
    switch (type) {
        case 'FILTER_CONTACT':
            return payload;
        default:
            return state;
    }
};

export default contactReducer;
