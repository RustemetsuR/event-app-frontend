import React from 'react';
import './EventListItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';

const EventListItem = props => {
    const todaysDate = new Date();
    const eventDate = new Date(props.date);
    if (eventDate.getTime() >= todaysDate.getTime()) {
        return (
            <div className='event-list-item'>
                <h3>{props.title}</h3>
                <p>{props.description}</p>
                <span>Date: {props.date.slice(0, 15)}</span>

                <button onClick={props.clicked}><FontAwesomeIcon icon={faTrashAlt} size='1x' /></button>
            </div>
        );
    }else{
        return <></>
    }
};

export default EventListItem;