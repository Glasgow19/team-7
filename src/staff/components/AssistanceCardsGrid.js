import React, { Component } from 'react';
import { Card, Dropdown, Form } from 'semantic-ui-react';
import AssistanceRequestCard from './AssistanceRequestCard';

const assistanceOptions = [
    { key: 'all', text: 'all', value: 'all' },
    { key: 'medical', text: 'medical', value: 'medical' },
    { key: 'other', text: 'other', value: 'other' },
];

export default class AssistanceCardsGrid extends Component {
    render() {
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
                <Card.Group>
                    <AssistanceRequestCard />
                    <AssistanceRequestCard />
                    <AssistanceRequestCard />
                    <AssistanceRequestCard />
                    <AssistanceRequestCard />
                    <AssistanceRequestCard />
                    <AssistanceRequestCard />
                    <AssistanceRequestCard />
                    <AssistanceRequestCard />
                </Card.Group>
            </div>
        );
    }
}
