import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import contactsActions from '../../../../redux/Contacts/allContactsAction';
import s from './ListItem.module.css';

const ListItem = ({ contacts, deleteContact }) => {
    return contacts.map(({ name, number, id }) => (
        <li key={id} className={s.item}>
            <p className={s.name}>{name}: </p>
            <p>{number} </p>
            <button
                type="button"
                onClick={() => deleteContact(id)}
                className={s.button}
            >
                Delete
            </button>
        </li>
    ));
};
ListItem.defaultProps = {
    name: '',
    number: '',
    id: '',
};
ListItem.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
            id: PropTypes.string.isRequired,
        }),
    ).isRequired,
    deleteContact: PropTypes.func.isRequired,
};

const getVisibleContacts = (allContacts, filter) => {
    const normalizedFilter = filter.toLowerCase();

    return allContacts.filter(contact =>
        contact.name.toLowerCase().includes(normalizedFilter),
    );
};

const mapStateToProps = ({ contacts: { items, filter } }) => ({
    contacts: getVisibleContacts(items, filter),
});

const mapDispatchToProps = dispatch => ({
    deleteContact: id => dispatch(contactsActions.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ListItem);
