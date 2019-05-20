import * as React from 'react';
import calssnames from 'classnames';

import './Aside.scss';

import Nav from '../Nav/Nav';
import Title from '../Title/Title';
import Delimetr from '../Delimetr/Delimetr';
import Icons from '../Icons/Icons';
import BurgerButton from '../BurgerButton/BurgerButton';

class Aside extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            active: false
        };

        this.handleAside = this.handleAside.bind(this);
    }

    handleAside() {
        this.setState(prevState => ({ active: !prevState.active }));
    }

    render() {
        return (
            <React.Fragment>
                <aside
                    className={calssnames('aside', {
                        '--active': this.state.active
                    })}
                >
                    <section className="aside__inner">
                        <Title h={2}>menu</Title>
                        <Delimetr modifier="short" />
                        <Nav authorized={this.props.authorized} />
                        <Delimetr modifier="short" />
                        <Icons />
                    </section>
                    {this.state.active && (
                        <BurgerButton
                            active={this.state.active}
                            onClick={this.handleAside}
                        />
                    )}
                </aside>
                {!this.state.active && (
                    <BurgerButton
                        active={this.state.active}
                        onClick={this.handleAside}
                    />
                )}
            </React.Fragment>
        );
    }
}

export default Aside;
