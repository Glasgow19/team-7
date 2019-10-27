import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Container, Image, Segment, Button, Form, Input } from 'semantic-ui-react';

import FormActions from '../actions/form';
import { createAssistanceRequest } from '../ApiService';

class Feedback2 extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    nextPath(path) {
        this.props.history.push(path);
    }

    render() {
        const handleChange = (event, args) => {
            this.setState({ value: args.value });
        };

        const sendFeedback = () => {
            const { assistanceRequestDetails } = this.props;

            if (assistanceRequestDetails) {
                createAssistanceRequest({ payload: assistanceRequestDetails }).then(
                    createdAssistanceRequest => {
                        console.log(createdAssistanceRequest);

                        alert('done boi feedback edition');
                        if (window.socket) {
                            window.socket.emit('newFeedback', createdAssistanceRequest);
                        }
                    },
                );
            }
        };

        return (
            <Container>
                <Segment textAlign="center">
                    <h1>Anything else you want to add?</h1>
                    <Form
                        onSubmit={event => {
                            this.props.addFeedbackDetails(this.state.value);
                            this.nextPath('/home');
                        }}
                    >
                        <Input type="text" name="detailInput" onChange={handleChange} />
                        <Button type="submit">That's it</Button>
                    </Form>
                </Segment>
            </Container>
        );
    }
}

const mapStateToProps = state => {
    const { feedbackScore, feedbackDetails } = state.form;
    return { assistanceRequestDetails: { feedbackScore, feedbackDetails } };
};
const mapDispatchToProps = dispatch => ({
    addFeedbackDetails: feedbackDetails =>
        dispatch(FormActions.addFeedbackDetails(feedbackDetails)),
    clearFormStore: () => dispatch(FormActions.clearFormStore()),
});

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps,
    )(Feedback2),
);
