import { createStore, combineReducers } from 'redux';
import * as reducers from './Contacts/reducers';

// const initialState = {
//     contacts: {
//         items: [],
//         filter: '',
//     },
// };

const rootReducer = combineReducers({
    items: reducers.contactReducer,
    //contacts: reducers.allContactsReducer,
    //filter: filterReducer,
});

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
