import { createStore, combineReducers } from 'redux';
import contactReducer from './Contacts/reducers/contactsReducer';
import allContactsReducer from './Contacts/reducers/allContactsReducer';

const rootReducer = combineReducers({
    contact: contactReducer,
    allcontacts: allContactsReducer,
    //filter: filterReducer,
});
// const initialState = {
//     contacts: {
//         items: [],
//         filter: '',
//     },
// };

// const reducer = (state = initialState, { type, payload }) => {
//     switch (type) {
//         case 'add/AddContact':
//             return [...state, payload];

//         case 'delete/DeleteContact':
//             return state.filter(contact => contact.id !== payload.id);

//         case 'filter/FilterContact':
//             return { filter: state.currentTarget.payload };

//         default:
//             return state;
//     }
// };

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
