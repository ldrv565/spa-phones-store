import * as React from 'react';
import classnames from 'classnames';

import './Image.scss';

const Image = props => (
    <img
        className={classnames(props.className, 'image', {
            [`--${props.modifier}`]: props.modifier
        })}
        src={props.src}
        alt={props.alt}
    />
);

export default Image;
