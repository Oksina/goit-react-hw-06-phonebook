import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import contactsReducer from './Contacts/allContactsReducer';
import filterReducer from './Filter/filterReducer';

const rootReducer = combineReducers({
    contacts: contactsReducer,
    filter: filterReducer,

    // contacts: {
    //     items: [],
    //     filter: '',
    // },
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;
