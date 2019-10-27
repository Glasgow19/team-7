import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Header, Container, Image, Segment, Button } from 'semantic-ui-react';
import FormActions from '../actions/form';

import { createAssistanceRequest } from '../ApiService';

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
            createAssistanceRequest({ payload: assistanceRequestDetails }).then(
                createdAssistanceRequest => {
                    console.log(createdAssistanceRequest);

                    alert('done boi');
                    if (window.socket) {
                        window.socket.emit('newAssistanceRequest', createdAssistanceRequest);
                    }
                },
            );
        }
    }

    nextPath(path) {
        this.props.history.push(path);
    }

    render() {
        return (
            <Container>
                <Segment textAlign="center">
                    <h2> Thank You </h2>
                    <p>A staff member will be with you soon</p>
                    <p>Please stay in your current location</p>
                </Segment>
                <Segment textAlign="center">
                    <Button
                        onClick={() => {
                            this.props.clearFormStore();
                            this.nextPath('/home');
                        }}
                    >
                        Return to main menu
                    </Button>
                    <Button
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
