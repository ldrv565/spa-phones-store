import * as React from 'react';
import classnames from 'classnames';

import './Title.scss';

const Title = (props) => {
    const tag = `h${props.h || 1}`;
    const className = classnames(props.className, 'title', {[`--${props.modifier}`]: props.modifier});

    return React.createElement(tag, {className}, props.children);
};

export default Title;
