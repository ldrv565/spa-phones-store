import {connect} from 'react-redux';

import {getPosts} from '../actions';
import App from '../components/App';

function mapStateToProps() {
    return {};
}

function mapDispatchToProps(dispatch) {
    return {
        getPosts: () => dispatch(getPosts()),
    };
}

const AppConnector = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppConnector;
