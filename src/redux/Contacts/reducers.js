const initialState = {
    contacts: {
        items: [[]],
        filter: '',
    },
};
export const contactReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case 'ADD_CONTACT':
            //const newState = payload;
            return {
                ...state,
                contacts: {
                    ...state.contacts,
                    items: state.contacts.items + payload,
                },
            };

        // case 'ADD_ALL_CONTACTS':
        //     const newStates = [...state, ...payload];
        //     return newStates;

        default:
            return state;
    }
};

// export const allContactsReducer = (state = [''], { type, payload }) => {
//     switch (type) {
//         case 'ADD_CONTACT':
//             const newState = payload;
//             return newState;

//         case 'ADD_ALL_CONTACTS':
//             const newStates = [...state, payload];
//             return newStates;

//         default:
//             return state;
//     }
// };

//export default contactReducer;
