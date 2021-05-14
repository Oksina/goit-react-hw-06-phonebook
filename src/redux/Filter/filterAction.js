import filterTypes from './filterTypes.js';

const changeFilter = value => ({
    type: filterTypes.CHANGE_FILTER,
    payload: value,
});

export default { changeFilter };
