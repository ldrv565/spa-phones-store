import * as React from 'react';

const Login = () => (
    <form method="POST" action="/api/login" style={{ display: 'flex' }}>
        <input type="text" name="login" />
        <input type="password" name="password" />
        <button type="submit">Log in</button>
    </form>
);

export default Login;
