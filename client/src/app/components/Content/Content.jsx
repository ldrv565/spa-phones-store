import * as React from 'react';

import './Content.scss';

const Content = props => (
    <section className="container">
        {props.children}
    </section>
);

export default Content;
