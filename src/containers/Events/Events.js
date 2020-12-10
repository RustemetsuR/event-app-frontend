import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import EventListItem from '../../components/EventListItem/EventListItem';
import { deleteEvent, getEvents } from '../../store/actions/eventsActions';
import './Events.css';

const Events = props => {

    const dispatch = useDispatch();
    const events = useSelector(state => state.events.events);
    const user = useSelector(state => state.users.user);

    useEffect(() => {
        if (user === null) {
            props.history.replace("/register");
        } else {
            dispatch(getEvents(user.token));
        }
    }, [dispatch, user, props.history]);

    const deleteItem = id => {
        dispatch(deleteEvent(user.token, id));
        dispatch(getEvents(user.token));
    };


    return (
        <div>
            <div className='event-list'>

                {events && events.map(e => {
                    return <EventListItem key={e._id} description={e.description} title={e.title} date={e.date} clicked={() => deleteItem(e._id)} />
                })}
            </div>
        </div>
    );
};

export default Events;