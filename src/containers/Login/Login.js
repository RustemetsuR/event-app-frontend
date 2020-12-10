import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FacebookLogin from '../../components/FacebookLogin/FacebookLogin';
import { loginUser } from '../../store/actions/usersActions';
import './Login.css'

const Login = () => {
    const dispatch = useDispatch();

    const [loginData, setLoginData] = useState({
        username: '',
        password: '',
    });

    const error = useSelector(state => state.users.error);

    const userNameOnChange = event => {
        const value = event.target.value;
        const loginDataCopy = {...loginData, username: value};
        setLoginData(loginDataCopy);
    };

    const passwordOnChange = event => {
        const value = event.target.value;
        const loginDataCopy = {...loginData, password: value};
        setLoginData(loginDataCopy);
    };

    const loginSubmit = event => {
        event.preventDefault();
        dispatch(loginUser({...loginData}));
    };


    return (
        <div className='login-box user-sign-boxes'>
            <h2>Login</h2>
            {error ?
                <div>
                    {error.error}
                </div> : null}
            <form onSubmit={loginSubmit}>
                <input onChange={userNameOnChange} placeholder='Username' required value={loginData.username} />
                <input onChange={passwordOnChange} placeholder='Password' type='password' required value={loginData.password} />
                <button type='submit'>Login</button>
            </form>
            <FacebookLogin/>
        </div>
    );
};

export default Login;