import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Container, Segment, Button, Rating } from 'semantic-ui-react';

import FormActions from '../actions/form';
import logo from '/../gsc_logo.svg';

class Feedback1 extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    nextPath(path) {
        this.props.history.push(path);
    }

    ComponentDidMount() {
        this.props.addFeedbackScore(3);
    }

    render() {
        const { user } = this.state;
        const { updateUser } = this.props;
        const handleChange = (event, args) => {
            this.props.addFeedbackScore(args.rating);
        };

        return (
            <Container>
                <Segment textAlign="center">
                    <div className="topbar">
                        <img className="logo" src={logo} />
                    </div>
                    <p className="Title">Glasgow Science Center Help Portal</p>
                    <h1>How well did we help you?</h1>
                    <Rating
                        maxRating={5}
                        onRate={handleChange}
                        defaultRating={3}
                        icon="star"
                        size="massive"
                    />
                    <br />
                    <br />
                    <Button
                        fluid
                        size="huge"
                        onClick={() => {
                            this.nextPath('/feedback2');
                        }}
                    >
                        Submit
                    </Button>
                </Segment>
            </Container>
        );
    }
}

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({
    addFeedbackScore: feedbackScore => dispatch(FormActions.addFeedbackScore(feedbackScore)),
});

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps,
    )(Feedback1),
);
