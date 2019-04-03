import * as React from 'react';
import classnames from 'classnames';

import './BackgroundImage.scss';


const BackgroundImage = props => (
    <section style={{backgroundImage: `url(${props.src})`}} className={classnames([props.className, 'backgroundImage', {[`--${props.modifier}`]: props.modifier}])} />
);

export default BackgroundImage;
