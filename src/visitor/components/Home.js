import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Header, Container, Image, Segment, Button } from 'semantic-ui-react';

import UserActions from '../actions/user';
import { loggedIn, getLoggedInUser, getToken } from '../AuthService';
import pollos from '../pollos.jpg';

import SpeechRecognizer from './SpeechRecognizer';

import Speech from 'react-speech';

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
        const styles = {
                cursor: 'help',
                pointerEvents: 'none',
                outline: 'none',
                backgroundColor: '#66ff99',
                border: 'solid 1px rgba(255,255,255,1)',
                borderRadius: 6,
            
        };

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
                    <SpeechRecognizer />
                    <Speech
                        text="Do you even know what I am saying"
                        //voice="Google UK English Female"  
                    />
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
