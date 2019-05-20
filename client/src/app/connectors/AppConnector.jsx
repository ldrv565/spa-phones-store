import { connect } from 'react-redux';

import { getLogged } from '../actions';

import App from '../components/App';

function mapStateToProps(state) {
    return {
        authorized: state.authorized,
        fetching: state.fetching
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getLogged: () => dispatch(getLogged())
    };
}
const AppConnector = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

export default AppConnector;
