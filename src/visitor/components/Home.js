import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Header, Container, Image, Segment, Button } from 'semantic-ui-react';

import FormActions from '../actions/form';
import { loggedIn, getLoggedInUser, getToken } from '../AuthService';
import pollos from '../pollos.jpg';
import { createAssistanceRequest } from '../ApiService';
import SpeechRecognizer from './SpeechRecognizer';

const HEALTH_AID = 'HEALTH';
const NAVIGATION_AID = 'NAVIGATION';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: props.user,
        };
    }

    nextPath(path) {
        this.props.history.push(path);
    }

    render() {
        return (
            <Container>
                <Segment textAlign="center">
                    <Button
                        icon="list"
                        fluid
                        content="Do you want a navigation aid or to request a exhibit guide?"
                        onClick={() => {
                            this.nextPath('/navhelp1');
                            this.props.setAidType(NAVIGATION_AID);
                        }}
                    />
                    <Button
                        fluid
                        icon="heart"
                        color="red"
                        content="Do you want a health assistance?"
                        onClick={() => {
                            this.nextPath('/navhelp1');
                            this.props.setAidType(NAVIGATION_AID);
                        }}
                    />
                </Segment>
            </Container>
        );
    }
}

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({
    setAidType: aidType => dispatch(FormActions.setAidType(aidType)),
});

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps,
    )(Home),
);
