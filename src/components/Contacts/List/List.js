import React from 'react';
import ListItem from './ListItem/ListItem';
import s from './List.module.css';

const List = () => {
    return (
        <ul className={s.list}>
            <ListItem />
        </ul>
    );
};

export default List;
