import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Container, Image, Segment, Button, Form, Input } from 'semantic-ui-react';

import logo from '/../gsc_logo.svg';
import FormActions from '../actions/form';
import { createFeedback } from '../ApiService';

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
            const { feedback } = this.props;

            if (feedback) {
                createFeedback(feedback).then(createdFeedback => {
                    console.log(createdFeedback);

                    alert('done boi feedback');
                    if (window.socket) {
                        window.socket.emit('newFeedback', createdFeedback);
                    }
                });
            }
        };

        return (
            <Container>
                <Segment textAlign="center">
                    <div className="topbar">
                        <img className="logo" src={logo} />
                    </div>
                    <p className="Title">Glasgow Science Center Help Portal</p>
                    <h1>Anything else you want to add?</h1>
                    <Form
                        onSubmit={event => {
                            this.props.addFeedbackDetails(this.state.value);
                            console.log(this.props.feedback);
                            //sendFeedback();
                            this.nextPath('/home');
                        }}
                    >
                        <Input fluid type="text" name="detailInput" onChange={handleChange} />
                        <Button fluid size="huge" type="submit">
                            That's it
                        </Button>
                    </Form>
                </Segment>
            </Container>
        );
    }
}

const mapStateToProps = state => {
    const { feedbackScore, feedbackDetails } = state.form;
    return { feedback: { feedbackScore, feedbackDetails } };
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
