import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Header, Container, Image, Grid, Comment } from 'semantic-ui-react';
import UserActions from '../actions/user';
import { loggedIn, getLoggedInUser, getToken } from '../AuthService';
import pollos from '../pollos.jpg';
import AssistanceCardsGrid from './AssistanceCardsGrid';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: props.user,
        };
    }

    render() {
        const { user } = this.state;
        const { updateUser } = this.props;
        const header = loggedIn() ? (
            <Header>Home : {getLoggedInUser().email} </Header>
        ) : (
            <Header>Home</Header>
        );

        return (
            <Container>
                <h1>Staff</h1>
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

                                <Comment>
                                    <Comment.Content>
                                        <Comment.Author as="a">Matt</Comment.Author>
                                        <Comment.Metadata>
                                            <div>Today at 5:42PM</div>
                                        </Comment.Metadata>
                                        <Comment.Text>How artistic!</Comment.Text>
                                        <Comment.Actions>
                                            <Comment.Action>Which card?</Comment.Action>
                                        </Comment.Actions>
                                    </Comment.Content>
                                    <Comment.Content>
                                        <Comment.Author as="a">Matt</Comment.Author>
                                        <Comment.Metadata>
                                            <div>Today at 5:42PM</div>
                                        </Comment.Metadata>
                                        <Comment.Text>How artistic!</Comment.Text>
                                        <Comment.Actions>
                                            <Comment.Action>Which card?</Comment.Action>
                                        </Comment.Actions>
                                    </Comment.Content>
                                    <Comment.Content>
                                        <Comment.Author as="a">Matt</Comment.Author>
                                        <Comment.Metadata>
                                            <div>Today at 5:42PM</div>
                                        </Comment.Metadata>
                                        <Comment.Text>How artistic!</Comment.Text>
                                        <Comment.Actions>
                                            <Comment.Action>Which card?</Comment.Action>
                                        </Comment.Actions>
                                    </Comment.Content>
                                    <Comment.Content>
                                        <Comment.Author as="a">Matt</Comment.Author>
                                        <Comment.Metadata>
                                            <div>Today at 5:42PM</div>
                                        </Comment.Metadata>
                                        <Comment.Text>How artistic!</Comment.Text>
                                        <Comment.Actions>
                                            <Comment.Action>Which card?</Comment.Action>
                                        </Comment.Actions>
                                    </Comment.Content>
                                </Comment>
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
