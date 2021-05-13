import React, { Component } from 'react';
import ListItem from './ListItem/ListItem';
import PropTypes from 'prop-types';
//import { connect } from 'react-redux';
//import allContactsAction from '../../../redux/Contacts/actions/allContactsAction';
import s from './List.module.css';

class List extends Component {
    // state = {
    //     contacts: [],
    // };
    render() {
        const { contacts } = this.props;
        console.log(contacts);
        return (
            <ul className={s.list}>
                {/* <ListItem
                contacts={contacts}
                deleteContact={this.props.deleteContact}
                /> */}
            </ul>
        );
    }
}

List.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

export default List;
