import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Header, Container, Image, Segment, Button, Message } from 'semantic-ui-react';
import FormActions from '../actions/form';
import '../../stylesheet.css';
import logo from '../gsc_logo.svg';
import Speech from 'react-speech';
import { createAssistanceRequest } from '../ApiService';
import { store } from 'react-notifications-component';

class HelpSent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: props.user,
        };
    }

    componentDidMount() {
        const { assistanceRequestDetails } = this.props;

        if (assistanceRequestDetails) {
            createAssistanceRequest({
                payload: { assistanceRequestDetails },
            }).then(createdAssistanceRequest => {
                alert('Someone will be with you soon.');
                if (window.socket) {
                    window.socket.emit('newAssistanceRequest', createdAssistanceRequest);
                }
            });
        }
    }

    nextPath(path) {
        this.props.history.push(path);
    }

    render() {
        const textContainer = (
            <div>
                <h1>Thank You</h1>
                <p size="big">
                    <strong>A staff member</strong> will be with you soon.
                </p>
            </div>
        );
        const descriptionContainer = (
            <div>
                <Speech text="Thank you. A staff member will be with you soon. Please stay in your current location." />
                {textContainer}
            </div>
        );

        return (
            <Container>
                <Segment textAlign="center">
                    <div className="topbar">
                        <img className="logo" src={logo} />
                    </div>

                    <Message content={descriptionContainer} />
                </Segment>
                <Segment textAlign="center">
                    <Button
                        icon="home"
                        fluid
                        size="huge"
                        onClick={() => {
                            this.props.clearFormStore();
                            this.nextPath('/home');
                        }}
                    >
                        Return to main menu
                    </Button>
                    <Button
                        fluid
                        size="huge"
                        color="grey"
                        onClick={() => {
                            this.nextPath('/feedback1');
                        }}
                    >
                        Did we solve your problem?
                    </Button>
                </Segment>
            </Container>
        );
    }
}

const mapStateToProps = state => ({ assistanceRequestDetails: state.form });
const mapDispatchToProps = dispatch => ({
    clearFormStore: () => dispatch(FormActions.clearFormStore()),
});

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps,
    )(HelpSent),
);
