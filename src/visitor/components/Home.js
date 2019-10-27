import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Header, Container, Image, Icon, Segment, Button, Message } from 'semantic-ui-react';
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
        const buttonExplanation = (<div>
            <div style={{margin:10}}></div>
            Use <Speech text=""/> to trigger text to speech synthesis.
            <br/>
            You do not fill all information to request staff assistance.
            </div>
        );

        return (
            <Container>
                <Segment textAlign="center">
                    <div className="topbar">
                        <img className="logo" src={logo} />
                    </div>
                    <p className="Title">
                        <strong>Visitor/Carer</strong> Help App
                    </p>
                    <br />

                    <Message
                        icon='lightbulb'
                        header='A few of quick usage tips'
                        content={buttonExplanation}
                    />

                    <br />
                    <br />
                    <Message content={<Speech text="Glasgow Science Centre help portal. Want navigation aid or to request exhibit guide. Want health assistance" />} />

                    <Button
                        size="huge"
                        icon="list"
                        fluid
                        content="Struggling with navigation/information?"
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
