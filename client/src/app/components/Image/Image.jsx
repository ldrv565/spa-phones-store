import * as React from 'react';

import './Image.scss';

const Icons = props => (
    <img className="image" src={props.src} alt={props.alt} />
);

export default Icons;
