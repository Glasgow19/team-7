import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
    Header,
    Container,
    Image,
    Segment,
    Button,
    Form,
    TextArea,
    Input,
    Message,
} from 'semantic-ui-react';

import FormActions from '../actions/form';
import { loggedIn, getLoggedInUser, getToken } from '../AuthService';
import pollos from '../pollos.jpg';
import '../../stylesheet.css';
import logo from '/../gsc_logo.svg';
import Speech from 'react-speech';
import SpeechRecognizer from './SpeechRecognizer';
import { store } from 'react-notifications-component';

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

        const messageContainer = (
            <div>
                <Speech text="Can you explain what you need? Enter text. Submit." />
                <h1>Can you explain what you need?</h1>
            </div>
        );

        return (
            <Container>
                <Segment textAlign="center">
                    <div className="topbar">
                        <img className="logo" src={logo} />
                    </div>

                    <Message content={messageContainer} />

                    <Message>
                        <div>
                            <SpeechRecognizer></SpeechRecognizer>
                        </div>
                    </Message>
                    <Form
                        onSubmit={event => {
                            let recognised = '';
                            if (document.getElementsByClassName('.transcript')) {
                                recognised += document.getElementsByClassName('.transcript')[0]
                                    .innerHTML;
                            }
                            let details = '';
                            if (this.state.value) details += this.state.value;
                            if (recognised) details += recognised;

                            this.props.addExtraDetails(details);
                            this.nextPath('/helpsent');
                        }}
                    >
                        <TextArea
                            placeholder="Tell us more"
                            type="text"
                            name="detailInput"
                            onChange={handleChange}
                        />
                        <br />
                        <br />

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
