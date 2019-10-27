import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Header, Container, Image, Grid, Comment } from 'semantic-ui-react';
import UserActions from '../actions/user';
import { loggedIn, getLoggedInUser, getToken } from '../AuthService';
import pollos from '../pollos.jpg';
import AssistanceCardsGrid from './AssistanceCardsGrid';
import { getFeedbacks } from '../ApiService';
import MiniFeedback from './MiniFeedback';
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: props.user,
            loadedFeedbacks: false,
        };
    }

    componentDidMount() {
        getFeedbacks().then(feedbacks => {
            this.setState({ feedbacks, loadedFeedbacks: true });
        });
    }

    render() {
        const { loadedFeedbacks, feedbacks } = this.state;
        const renderedFeedbacks = loadedFeedbacks ? (
            this.state && this.state.feedbacks ? (
                feedbacks.map((feedback, i) => (
                    <MiniFeedback
                        key={i}
                        score={feedback.score}
                        text={feedback.text}
                        dateReceieved={feedback.dateReceieved}
                    />
                ))
            ) : (
                <div>No feedback entries :(</div>
            )
        ) : (
            <div>No feedback entries :(</div>
        );

        return (
            <Container>
                <h1>Assistance Requests</h1>
                <Grid divided="vertically">
                    <Grid.Row columns={2}>
                        <Grid.Column width="13">
                            <AssistanceCardsGrid />
                        </Grid.Column>
                        <Grid.Column width="3">
                            <Comment.Group>
                                <Header as="h3" dividing>
                                    Feedback
                                </Header>
                                {renderedFeedbacks}
                            </Comment.Group>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
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
)(Home);
