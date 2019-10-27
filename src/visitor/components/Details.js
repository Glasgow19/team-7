import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Header, Container, Image, Segment, Button, Form, Input } from 'semantic-ui-react';

import FormActions from '../actions/form';
import { loggedIn, getLoggedInUser, getToken } from '../AuthService';
import pollos from '../pollos.jpg';
import '../../stylesheet.css';
import logo from '/../gsc_logo.svg';

const EXPLANATION = 'EXPLANATION';
const FIND_EXHIBIT = 'FIND_EXHIBIT';
const OTHER = 'OTHER';

class Details extends Component {
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
        const handleChange = (event, args) => {
            this.setState({ value: args.value });
        };

        return (
            <Container>
                <Segment textAlign="center">
                    <div class="topbar">
                        <img class="logo" src={logo} />
                    </div>

                    <p class="Title">Glasgow Science Center Help Portal</p>

                    <h1>Can you explain what you need?</h1>
                    <Form
                        onSubmit={event => {
                            this.props.addExtraDetails(this.state.value);
                            this.nextPath('/helpsent');
                        }}
                    >
                        <Input fluid type="text" name="detailInput" onChange={handleChange} />
                        <Button fluid type="submit" size="huge">
                            Submit
                        </Button>
                    </Form>
                </Segment>
            </Container>
        );
    }
}

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({
    addExtraDetails: details => dispatch(FormActions.addExtraDetails(details)),
});

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps,
    )(Details),
);
