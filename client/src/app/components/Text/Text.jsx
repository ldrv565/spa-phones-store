import * as React from 'react';
import classnames from 'classnames';

import './Text.scss';

const Text = props => (
    <p className={classnames(props.className, 'text', {[`--${props.modifier}`]: props.modifier})}>
        {props.children}
    </p>
);

export default Text;
