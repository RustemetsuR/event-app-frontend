import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch, useSelector } from 'react-redux';
import { addEvent } from '../../store/actions/eventsActions';
import './AddEvent.css';

const AddEvent = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.users.user)
    const [startDate, setStartDate] = useState(new Date());
    const [data, setData] = useState({
        title: '',
        description: '',
    });

    const changeData = event => {
        const name = event.target.name;
        const value = event.target.value;

        const dataCopy = {
            ...data,
            [name]: value,
        };

        setData(dataCopy);
    };

    const add = event => {
        event.preventDefault();
        const dataToAdd = {
            date: startDate.toString(),
            title: data.title,
            description: data.description
        };
        dispatch(addEvent(dataToAdd, user.token));
    };

    return (
        <div>
            <form className='add-event-form' onSubmit={add}>
                <h2>Add Your New Event!</h2>
                <input placeholder='Title' name='title' value={data.title} required onChange={changeData} />
                <input placeholder='Description' name='description' value={data.description} required onChange={changeData} />
                <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
                <button type='submit'>Add</button>
            </form>
        </div>
    );
};

export default AddEvent;