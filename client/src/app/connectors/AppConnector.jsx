import { connect } from 'react-redux';

import App from '../components/App';

function mapStateToProps() {
    return {};
}

const AppConnector = connect(mapStateToProps)(App);

export default AppConnector;
