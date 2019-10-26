import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Header, Container, Image, Segment, Button } from 'semantic-ui-react';

import FormActions from '../actions/form';
import { loggedIn, getLoggedInUser, getToken } from '../AuthService';
import pollos from '../pollos.jpg';

class HelpSent extends Component {
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

        return (
            <Container>
                <Segment textAlign="center">
                    <h2> Thank You </h2>
                    <p>A staff member will be with you soon</p>
                    <p>Please stay in your current location</p>
                </Segment>
            </Container>
        );
    }
}

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({});

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps,
    )(HelpSent),
);
