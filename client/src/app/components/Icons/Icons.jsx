import * as React from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom';

import './Icons.scss';

import facebook from '../../../assets/facebook.svg';
import instagram from '../../../assets/instagram.svg';
import github from '../../../assets/github.svg';
import twitter from '../../../assets/twitter.svg';

const Icons = () => (
    <Router>
        <section>
            <Link to="/">
                <img className="icon --left" src={facebook} alt="facebook" />
            </Link>
            <Link to="/">
                <img className="icon" src={instagram} alt="instagram" />
            </Link>
            <Link to="/">
                <img className="icon" src={github} alt="github" />
            </Link>
            <Link to="/">
                <img className="icon" src={twitter} alt="twitter" />
            </Link>
        </section>
    </Router>
);

export default Icons;
