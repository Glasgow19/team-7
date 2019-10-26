import React, { Component } from 'react';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import { login } from '../AuthService';
import UserActions from '../actions/user';

import pollos from '../pollos.jpg';

class Login extends Component {
    state = {
        email: '',
        password: '',
        wasLoginSuccessfull: false,
        wasLoginTryPerformed: false,
        isDirty: false,
        isSubmitting: false,
        error: {},
    };

    setFieldValue = (_, { name, value }) => {
        this.setState({ [name]: value, isDirty: true });
    };

    submit = async () => {
        this.setState({
            isSubmitting: true,
        });

        const { email, password } = this.state;
        const { updateUser } = this.props;
        const loginResult = await login(email, password);
        const wasLoginSuccessfull = loginResult.wasSuccessfull;

        if (wasLoginSuccessfull) {
            updateUser({ email });
        }

        this.setState({
            wasLoginSuccessfull,
            wasLoginTryPerformed: true,
            isDirty: false,
            isSubmitting: false,
            error: loginResult.payload,
        });
    };

    render() {
        const {
            wasLoginSuccessfull,
            wasLoginTryPerformed,
            isDirty,
            isSubmitting,
            error,
        } = this.state;

        const RedirectToHome =
            wasLoginSuccessfull && wasLoginTryPerformed ? () => <Redirect to="/" /> : () => null;

        const ErrorMessage =
            !wasLoginSuccessfull && wasLoginTryPerformed && !isDirty
                ? () => <Message error header="There was an error :(" content={error.message} />
                : () => null;

        return (
            <Grid textAlign="center" verticalAlign="middle">
                <Grid.Column style={{ maxWidth: 450 }}>
                    <Header as="h2" color="teal" textAlign="center">
                        <Image src={pollos} /> Log-in
                    </Header>
                    <ErrorMessage />

                    <Form size="large" onSubmit={this.submit}>
                        <Segment stacked>
                            <Form.Input
                                fluid
                                icon="user"
                                iconPosition="left"
                                placeholder="E-mail address"
                                name="email"
                                onChange={this.setFieldValue}
                            />
                            <Form.Input
                                fluid
                                icon="lock"
                                iconPosition="left"
                                placeholder="Password"
                                type="password"
                                name="password"
                                onChange={this.setFieldValue}
                            />

                            <Button
                                color="teal"
                                fluid
                                size="large"
                                type="submit"
                                loading={isSubmitting}
                            >
                                {isSubmitting ? '' : 'Log in'}
                            </Button>
                            <RedirectToHome />
                        </Segment>
                    </Form>
                    <Message>
                        New to us? <Link to="/register">Register here</Link>
                    </Message>
                </Grid.Column>
            </Grid>
        );
    }
}

const mapStateToProps = state => {
    return { user: state.user.user };
};
const mapDispatchToProps = dispatch => ({
    updateUser: user => dispatch(UserActions.updateUser(user)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Login);
