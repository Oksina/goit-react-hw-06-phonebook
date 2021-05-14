import { combineReducers } from 'redux';
import actionTypes from './allContactsTypes';

const contactReducer = (state = [], { type, payload }) => {
    switch (type) {
        case actionTypes.ADD_CONTACT:
            return [...state, payload];

        case actionTypes.DELETE_CONTACT:
            return state.filter(({ id }) => id !== payload);

        default:
            return state;
    }
};

const contactsReducer = combineReducers({
    items: contactReducer,
});

export default contactsReducer;
