import React, { Component } from 'react';
import socketIOClient from 'socket.io-client';
import ReactNotification from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';

import { store } from 'react-notifications-component';
import apiUrl from '../apiUrl';

export default class Realtime extends Component {
    constructor() {
        super();
    }

    componentDidMount() {
        const socket = socketIOClient(apiUrl, { reconnection: true });

        socket.on('connected', payload => {
            this.setState({ response: payload });
        });

        socket.on('visitor:helpIsComing', payload => {
            const { staffMember, assistanceRequest } = payload;
            alert(staffMember.fullName);
        });

        global.socket = socket;
    }

    render() {
        return (
            <div>
                <ReactNotification />
            </div>
        );
    }
}
