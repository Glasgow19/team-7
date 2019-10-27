import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Header, Container, Image, Segment, Button } from 'semantic-ui-react';
import '../../stylesheet.css';
import logo from '/../gsc_logo.svg';

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
    render() {
        return (
            <Container>
                <Segment textAlign="center">
                <div class = 'topbar'>
                <img class = 'logo' src={logo}/>
            </div>
            <p class = 'Title'>Glasgow Science Center Help Portal</p>
                    <h2> Thank You </h2>
                    <p>A staff member will be with you soon</p>
                    <p>Please stay in your current location</p>
                </Segment>
            </Container>
        );
    }
}

const mapStateToProps = state => ({ assistanceRequestDetails: state.form });
const mapDispatchToProps = dispatch => ({});

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps,
    )(HelpSent),
);
