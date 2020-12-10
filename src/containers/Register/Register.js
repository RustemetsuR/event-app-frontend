import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FacebookLogin from '../../components/FacebookLogin/FacebookLogin';
import { registerUser } from '../../store/actions/usersActions';
import '../Login/Login.css';
const Register = () => {
    const dispatch = useDispatch();
    const error = useSelector(state => state.users.registerError);
    const [registerData, setRegisterData] = useState({
        username: '',
        password: '',
        email: '',
        avatarImage: '',
    });

    const dataChange = event =>{
        const name = event.target.name;
        const value = event.target.value;

        const dataCopy = {...registerData, [name]: value};
        setRegisterData(dataCopy);
    }

    const registerSubmit = event => {
        event.preventDefault();
        dispatch(registerUser({ ...registerData }));
    };


    return (
        <div className='login-box user-sign-boxes'>
            <h2>Register</h2>
            {error ?
                <div>
                    {Object.keys(error.errors).map(e =>{
                        return <p key={e}>{error.errors[e].message}</p>
                    })}
                </div> : null}
            <form onSubmit={registerSubmit}>
                <input onChange={dataChange} name='username' placeholder='Username' required value={registerData.username} />
                <input onChange={dataChange} name='email' placeholder='Email' required value={registerData.email} />
                <input onChange={dataChange} name='password' placeholder='Password' type='password' required value={registerData.password} />
                <input onChange={dataChange} name='avatarImage' placeholder='Profile image' value={registerData.avatarImage}/>
                <button type='submit'>Register</button>
            </form>
            <FacebookLogin />
        </div>
    );
};

export default Register;