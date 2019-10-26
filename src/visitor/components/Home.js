import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Header, Container, Image, Segment, Button } from 'semantic-ui-react';

import UserActions from '../actions/user';
import pollos from '../pollos.jpg';
import { createAssistanceRequest } from '../ApiService';
import SpeechRecognizer from './SpeechRecognizer';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: props.user,
        };
    }

    render() {
        const payload = {
            summary: 'Minor issue dynamic',
            description: 'Minor issue #1dynamic',
            category: 'other',
            location: {
                latitude: 123,
                longitude: 23,
            },
        };

        return (
            <Container>
                <h1>Visitor</h1>

                <Segment>
                    <Image src={pollos} centered className="medium" />
                    <p>
                        Los Pollos Hermanos was a fast-food restaurant chain that specialized in
                        fried chicken operating across the southwestern United States. The name,
                        pronounced [los ˈpo.ʝos eɾˈma.nos], is ungrammatical Spanish for "The
                        Chicken Brothers."
                    </p>
                    <SpeechRecognizer />
                    <Button
                        content="Send it"
                        onClick={(event, args) => {
                            const socket = window.socket;

                            createAssistanceRequest({ payload }).then(response => {
                                console.log(response);
                                const { assistanceRequest } = response;
                                socket.emit('newAssistanceRequest', { assistanceRequest });
                            });
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
