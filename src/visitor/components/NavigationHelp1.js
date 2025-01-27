import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Header, Container, Image, Segment, Button, Message } from 'semantic-ui-react';

import FormActions from '../actions/form';
import { loggedIn, getLoggedInUser, getToken } from '../AuthService';
import pollos from '../pollos.jpg';
import '../../stylesheet.css';
import logo from '/../gsc_logo.svg';
import Speech from 'react-speech';

const EXPLANATION = 'EXPLANATION';
const FIND_EXHIBIT = 'FIND_EXHIBIT';
const OTHER = 'OTHER';

class NavigationHelp1 extends Component {
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
        const { user } = this.state;
        const { updateUser } = this.props;
        const explanation = (<h1>I want to</h1>);
        const speechContainer = (
            <div>
                <div style={{margin:10}}></div>
                <Speech text="What do you need? Request further explanation. Find particular exibit. or Other." />
                {explanation}

            </div>
        );
        return (
            <Container>
                <Segment textAlign="center">
                    <div className="topbar">
                        <img className="logo" src={logo} />
                    </div>
                    
                    <Message content={speechContainer} />
                    <Button
                        fluid
                        size="huge"
                        icon="lightbulb"
                        content="Request Further Explanation"
                        onClick={() => {
                            this.props.setCallReason(EXPLANATION);
                            this.nextPath('/moreinfo');
                        }}
                    />
                    <Button
                        fluid
                        size="huge"
                        icon="map"
                        color="grey"
                        content="Find Particular Exhibit"
                        onClick={() => {
                            this.props.setCallReason(FIND_EXHIBIT);
                            this.nextPath('/moreinfo');
                        }}
                    />
                    <Button
                        fluid
                        size="huge"
                        icon="list"
                        content="Other"
                        onClick={() => {
                            this.props.setCallReason(OTHER);
                            this.nextPath('/moreinfo');
                        }}
                    />
                </Segment>
            </Container>
        );
    }
}

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({
    setCallReason: callReason => dispatch(FormActions.setCallReason(callReason)),
});

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps,
    )(NavigationHelp1),
);
