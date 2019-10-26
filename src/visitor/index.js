import 'semantic-ui-css/semantic.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { connect, Provider } from 'react-redux';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import ProtectedRoute from './components/ProtectedRoute';
import Navigation from './components/common/Navigation';
import Home from './components/Home';
import NavigationHelp1 from './components/NavigationHelp1';
import HelpSent from './components/HelpSent';
import MoreInfo from './components/MoreInfo';
import Details from './components/Details';
import Page2 from './components/Page2';
import Page3 from './components/Page3';
import Login from './components/Login';
import Realtime from './components/Realtime';
import Register from './components/Register';
import RunOnLoad from './components/common/RunOnLoad';
import configureStore from './store';

const App = props => {
    const { isAuthenticated } = props;
    return (
        <BrowserRouter>
            <div className="App">
                <RunOnLoad />
                <Container>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <ProtectedRoute
                            exact
                            path="/page2"
                            component={Page2}
                            isAuthenticated={isAuthenticated}
                        />
                        <Route exact path="/navhelp1" component={NavigationHelp1} />
                        <Route exact path="/helpsent" component={HelpSent} />
                        <Route exact path="/details" component={Details} />
                        <Route exact path="/moreinfo" component={MoreInfo} />
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/register" component={Register} />
                        <Redirect to="/" />
                    </Switch>
                </Container>
            </div>
        </BrowserRouter>
    );
};
const mapStateToProps = state => ({
    isAuthenticated: !!state.user.user,
});
const mapDispatchToProps = () => ({});

const AppWithRedux = connect(
    mapStateToProps,
    mapDispatchToProps,
)(App);

ReactDOM.render(
    <Provider store={configureStore()}>
        <AppWithRedux />
    </Provider>,
    document.getElementById('root'),
);

if (module.hot) {
    module.hot.accept();
}
