const filterReducer = (state = '', { type, payload }) => {
    switch (type) {
        case 'FILTER_CONTACT':
            return payload;
        default:
            return state;
    }
};
