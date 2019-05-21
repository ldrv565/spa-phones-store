import * as React from 'react';
import Delimetr from './Delimetr/Delimetr';

const Login = () => (
    <>
        <form method="POST" action="/api/login" style={{ display: 'flex' }}>
            <input type="text" name="login" />
            <input type="password" name="password" />
            <button type="submit">Log in</button>
        </form>
        <Delimetr />
        <form method="POST" action="/api/register" style={{ display: 'flex' }}>
            <input type="text" name="login" />
            <input type="password" name="password" />
            <button type="submit">Register</button>
        </form>
    </>
);

export default Login;
