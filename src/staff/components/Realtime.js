import React, { Component } from 'react';
import socketIOClient from 'socket.io-client';
import apiUrl from '../apiUrl';
import ReactNotification from 'react-notifications-component';
import { store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';

export default class Realtime extends Component {
    constructor() {
        super();
    }

    componentDidMount() {
        const socket = socketIOClient(apiUrl, { reconnection: true });

        socket.on('connected', payload => {
            console.log(payload.hello);
            console.log(socket);

            this.setState({ response: payload });
        });

        socket.on('staff:newAssistanceRequest', event => {
            const assistanceRequestType =
                event.assistanceRequest &&
                event.assistanceRequest.payload &&
                event.assistanceRequest.payload.assistanceRequestDetails &&
                event.assistanceRequest.payload.assistanceRequestDetails.aidType
                    ? event.assistanceRequest.payload.assistanceRequestDetails.aidType.toLowerCase()
                    : '';

            store.addNotification({
                title: 'New Assistance request received!',
                message: `It is of ${assistanceRequestType} request type.`,
                type: 'danger',
                insert: 'top',
                container: 'top-right',
                animationIn: ['animated', 'fadeIn'],
                animationOut: ['animated', 'fadeOut'],
                dismiss: {
                    duration: 20000,
                    onScreen: true,
                },
                onRemoval: (id, removedBy) => {
                    if (removedBy == 'click') {
                        console.log('handle open details for this notification');
                    }
                },
            });
        });

        window.socket = socket;
    }

    render() {
        return <ReactNotification />;
    }
}
