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

class MoreInfo extends Component {
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

        const title = <h1>Can you give us more details?</h1>;

        const speechContainer = (
            <div>
                <div style={{ margin: 10 }}></div>
                <Speech text="Can you give us more details? Yes. or No." />
                {title}
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
                        content="Yes"
                        size="huge"
                        icon="thumbs up outline"
                        onClick={() => {
                            this.nextPath('/details');
                        }}
                    />
                    <Button
                        fluid
                        content="No"
                        icon="thumbs down outline"
                        color="grey"
                        size="huge"
                        onClick={() => {
                            this.nextPath('/helpsent');
                        }}
                    />
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
    )(MoreInfo),
);
