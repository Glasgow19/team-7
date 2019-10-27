import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Header, Container, Image, Segment, Button } from 'semantic-ui-react';
import FormActions from '../actions/form';
import '../../stylesheet.css';
import logo from '/../gsc_logo.svg';
import Speech from 'react-speech';

const HEALTH_AID = 'HEALTH';
const NAVIGATION_AID = 'NAVIGATION';

import { createFeedback } from '../ApiService';
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
                    <div className="topbar">
                        <img className="logo" src={logo} />
                    </div>
                    <p className="Title">Glasgow Science Center Help Portal</p>
                    <Speech className="speechbutton" text="Glasgow Science Centre help portal. Want navigation aid or to request exhibit guide. Want health assistance" />
                    <Button
                        size="huge"
                        icon="list"
                        fluid
                        content="Want navigation aid or to request a exhibit guide?"
                        onClick={() => {
                            this.nextPath('/navhelp1');
                            this.props.setAidType(NAVIGATION_AID);
                        }}
                    />
                    <Button
                        fluid
                        size="huge"
                        icon="heart"
                        color="red"
                        content="Want health assistance?"
                        onClick={() => {
                            this.nextPath('/health-assistance-details');
                            this.props.setAidType(HEALTH_AID);
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
