import React, { Component } from 'react';
import socketIOClient from 'socket.io-client';
import ReactNotification from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import { Button, Modal, Header, Image, Content } from 'semantic-ui-react';
import imagesrc from '../../api/pic.jpg';

import { store } from 'react-notifications-component';
import apiUrl from '../apiUrl';

export default class Realtime extends Component {
    constructor() {
        super();
        this.state = {};
    }

    componentDidMount() {
        const socket = socketIOClient(apiUrl, { reconnection: true });

        socket.on('connected', payload => {
            this.setState({ response: payload });
        });

        socket.on('visitor:helpIsComing', payload => {
            const { staffMember, assistanceRequest } = payload;
            console.log(staffMember);
            alert(staffMember.fullName);
            this.setState({ isModalOpen: true, staffMember });
        });

        global.socket = socket;
    }

    render() {
        return (
            <div>
                <ReactNotification />
                <Modal open={this.state.isModalOpen} size="large">
                    <Modal.Header>Help is coming!</Modal.Header>
                    <Modal.Content image>
                        <Image wrapped size="medium" src={imagesrc} />
                        <Modal.Description>
                            <Header>
                                {this.state.staffMember ? this.state.staffMember.fullName : ''}
                            </Header>
                            <p>This is the employee that will be attending your request</p>
                        </Modal.Description>
                    </Modal.Content>
                </Modal>
            </div>
        );
    }
}
