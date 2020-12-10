import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

const RedirectToHome = () => {
    const user = useSelector(state => state.users.user);
    return (
        <>
            {user !== null ? 
            <Redirect to='/events'/> : 
            <Redirect to='/login'/>}
        </>
    );
};

export default RedirectToHome;