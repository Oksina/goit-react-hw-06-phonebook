import filterTypes from './filterTypes.js';

const filterReducer = (state = '', { type, payload }) => {
    switch (type) {
        case filterTypes.CHANGE_FILTER:
            return payload;

        default:
            return state;
    }
};

export default filterReducer;
