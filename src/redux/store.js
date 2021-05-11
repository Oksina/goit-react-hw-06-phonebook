import { createStore, combineReducers } from 'redux';
import contactReducer from './reducers';

const rootReducer = combineReducers({
    contact: contactReducer,
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
