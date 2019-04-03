import * as React from 'react';
import classnames from 'classnames';

import './BurgerButton.scss';

const BurgerButton = props => (
    <button className={classnames('burgerButton', {'--active': props.active})} type="button" onClick={props.onClick}>
        {'☰'}
    </button>
);

export default BurgerButton;
