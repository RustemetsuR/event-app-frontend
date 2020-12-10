import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-regular-svg-icons';
import './Layout.css';
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../store/actions/usersActions';
import noAvatar from '../../assets/images/no-avatar-image.png';


const Layout = props => {
    const user = useSelector(state => state.users.user);
    const dispatch = useDispatch();

    const logout = () => {
        dispatch(logoutUser());
    };

    const logo = (
        <div>
            <FontAwesomeIcon id='logo' icon={faCalendarAlt} size='3x' color='white'/>
            <h2 className='logo-title'>Event App</h2>
        </div>
    )
    return (
        <>
            <header className='main-header'>
                <div className='header-content'>
                    <div className='logo-box'>
                        {user !== null ?
                            <NavLink to='/events'>
                                {logo}
                            </NavLink> :
                            <>
                                {logo}
                            </>}
                    </div>
                    <div className='users-menu'>
                        {user === null ?
                            <>
                                <NavLink to='/register'>Sign Up</NavLink>
                                <NavLink to='/login'>Sign In</NavLink>
                            </> :
                            <>
                                <div className='mini-info-profile-box'>
                                    {user.avatarImage ? <img className='avatar-image' src={user.avatarImage} alt={user.displayName} /> :
                                        <img className='avatar-image' src={noAvatar} alt={user.displayName} />}
                                    <h4>Hello , {user.displayName ? user.displayName : user.username}!</h4>
                                </div>
                                {user !== null &&
                                    <>
                                        <NavLink to='/addEvent'>Add Event</NavLink>
                                    </>}
                                <NavLink to='/login' onClick={logout}>Log Out</NavLink>
                            </>}

                    </div>
                </div>
            </header>
            {props.children}
        </>
    );
};

export default withRouter(Layout);