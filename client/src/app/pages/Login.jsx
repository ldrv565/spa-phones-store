import * as React from 'react';

import Content from '../components/Content/Content';
// import Title from '../components/Title/Title';

const About = () => (
    <React.Fragment>
        <Content>
            <form method="POST" action="/api/login">
                <input type="text" name="login" />
                <input type="password" name="password" />
                <button type="submit">Log in</button>
            </form>
        </Content>
    </React.Fragment>
);

export default About;
