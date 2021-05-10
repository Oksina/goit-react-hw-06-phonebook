import { createStore } from 'redux';

const initialState = { name: '', value: '' };

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'add/AddContact':
            return { contactValue: state.contactValue + 1 };
    }
    return state;
};

const store = createStore(reducer);

export default store;
