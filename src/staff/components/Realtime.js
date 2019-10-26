import React, { Component } from 'react';
import socketIOClient from 'socket.io-client';
import apiUrl from '../apiUrl';

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

        window.socket = socket;
    }

    render() {
        return <div></div>;
    }
}
