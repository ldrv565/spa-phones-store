import * as React from 'react';
import {Link} from 'react-router-dom';

import './Nav.scss';

const Nav = () => (
    <nav className="nav">
        <ul className="nav__list">
            <li className="nav__item">
                <Link to="/" className="nav__link">
                    {'Home'}
                </Link>
            </li>
            <li className="nav__item">
                <Link to="/about" className="nav__link">
                    {'About'}
                </Link>
            </li>
        </ul>
    </nav>
);

export default Nav;
