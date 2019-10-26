import React, { Component } from 'react';
import { Card, Dropdown, Form } from 'semantic-ui-react';
import AssistanceRequestCard from './AssistanceRequestCard';
import { getAssistanceRequests } from '../ApiService';

const assistanceOptions = [
    { key: 'all', text: 'all', value: 'all' },
    { key: 'medical', text: 'medical', value: 'medical' },
    { key: 'other', text: 'other', value: 'other' },
];

export default class AssistanceCardsGrid extends Component {
    componentDidMount() {
        const easyGridReload = () => {
            getAssistanceRequests().then(assistanceRequests => {
                this.setState({ assistanceRequests });
                console.log(assistanceRequests);
            });
        };

        easyGridReload();

        window.socket.on('staff:newAssistanceRequest', payload => {
            console.log('new help needed', payload);
            easyGridReload();
            alert('hi');
        });
    }
    render() {
        const state = this.state;

        const assistanceRequests =
            this.state && this.state.assistanceRequests ? (
                this.state.assistanceRequests.map((assistanceRequest, index) => (
                    <AssistanceRequestCard assistanceRequest={assistanceRequest} key={index} />
                ))
            ) : (
                <div>No assistance requests :) </div>
            );

        return (
            <div>
                <Form>
                    <Dropdown
                        button
                        className="icon"
                        floating
                        labeled
                        selection
                        icon="filter"
                        options={assistanceOptions}
                        placeholder="Filter by assistance type"
                    />
                </Form>
                <Card.Group>{assistanceRequests}</Card.Group>
            </div>
        );
    }
}
