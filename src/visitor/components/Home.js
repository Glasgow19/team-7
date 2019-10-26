import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Header, Container, Image, Segment, Button } from 'semantic-ui-react';

import UserActions from '../actions/user';
import { loggedIn, getLoggedInUser, getToken } from '../AuthService';
import pollos from '../pollos.jpg';

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
            <Header>Home </Header>
        );

        return (
            <Container>
                <h1>Visitor</h1>

                <Segment>
                    {header}
                    <Image src={pollos} centered className="medium" />
                    <p>
                        Los Pollos Hermanos was a fast-food restaurant chain that specialized in
                        fried chicken operating across the southwestern United States. The name,
                        pronounced [los ˈpo.ʝos eɾˈma.nos], is ungrammatical Spanish for "The
                        Chicken Brothers."
                    </p>
                    <Button
                        content="Send it"
                        onClick={(event, args) => {
                            const socket = window.socket;
                            console.log(socket);

                            socket.emit('help', { form: { a: '1', b: 23 } });
                        }}
                    />
                </Segment>
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
