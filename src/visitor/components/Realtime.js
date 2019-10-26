import React, { Component } from 'react';
import socketIOClient from 'socket.io-client';

export default class Realtime extends Component {
    constructor() {
        super();
        this.state = {
            response: false,
            endpoint: 'http://localhost:5678',
            reconnection: true,
            reconnectionAttempts: Infinity,
        };
    }

    componentDidMount() {
        const { endpoint } = this.state;
        const socket = socketIOClient(endpoint);

        socket.on('connected', payload => {
            console.log(payload.hello);
            this.setState({ response: payload });
        });

        socket.on('helpReceived', payload => {
            console.log(payload);
            alert('help received');
        });

        window.socket = socket;
    }

    render() {
        return <div></div>;
    }
}
