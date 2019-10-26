import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Header, Container, Image, Segment, Button } from 'semantic-ui-react';

import FormActions from '../actions/form';
import { loggedIn, getLoggedInUser, getToken } from '../AuthService';
import pollos from '../pollos.jpg';

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
        const { user } = this.state;
        const { updateUser } = this.props;

        return (
            <Container>
                <Segment textAlign="center">
                    <p>Do you want a navigation aid or to request a exhibit guide?</p>
                    <Button
                        fluid
                        content="Yes"
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
