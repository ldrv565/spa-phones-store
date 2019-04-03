import * as React from 'react';
import {Link} from 'react-router-dom';
import classnames from 'classnames';

import './LinkButton.scss';

class LinkButton extends React.PureComponent {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        if (this.props.onClick) {
            this.props.onClick(event);
        }
    }

    render() {
        return (
            <Link
                to={this.props.link}
                className={classnames('linkButton', {[`--${this.props.modifier}`]: this.props.modifier})}
                onClick={this.handleClick}
            >
                {this.props.children}
            </Link>
        );
    }
}

export default LinkButton;
