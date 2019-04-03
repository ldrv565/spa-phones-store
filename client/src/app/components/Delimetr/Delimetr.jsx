import * as React from 'react';
import classnames from 'classnames';

import './Delimetr.scss';

const Delimetr = props => (
    <div className={classnames('delimetr', {[`--${props.modifier}`]: props.modifier})} />
);

export default Delimetr;
