import React, { Component } from 'react';
import { Card, Dropdown, Form } from 'semantic-ui-react';
import AssistanceRequestCard from './AssistanceRequestCard';
import { getAssistanceRequests } from '../ApiService';
import MiniFeedback from './MiniFeedback';

const assistanceOptions = [
    { key: 'all', text: 'All', value: 'ALL' },
    { key: 'medical', text: 'Health related', value: 'HEALTH' },
    { key: 'other', text: 'Navigation and other', value: 'NAVIGATION' },
];

export default class AssistanceCardsGrid extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentWillUnmount() {}

    componentDidMount() {
        window.socket.on('staff:newAssistanceRequest', payload => {
            easyGridReload();
        });

        window.socket.on('staff:updateAssistanceStatus', () => {
            easyGridReload();
        });

        const easyGridReload = () => {
            getAssistanceRequests().then(assistanceRequests => {
                this.setState({ assistanceRequests: assistanceRequests });
            });
        };
        easyGridReload();
    }

    render() {
        let { aidType } = this.state;
        aidType = aidType ? aidType : 'ALL';

        const filterByAidType = assistanceReqs => {
            if (aidType == 'ALL') return assistanceReqs;
            return assistanceReqs.filter(
                assistanceReq =>
                    assistanceReq.payload.aidType && assistanceReq.payload.aidType == aidType,
            );
        };

        const assistanceRequests =
            this.state && this.state.assistanceRequests ? (
                filterByAidType(this.state.assistanceRequests).map((assistanceRequest, index) => (
                    <AssistanceRequestCard assistanceRequest={assistanceRequest} key={index} />
                ))
            ) : (
                <div>No assistance requests :) </div>
            );

        const handleChange = (event, args) => {
            this.setState({ aidType: args.value });
            window.socket.removeAllListeners('on');
        };

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
                        onChange={handleChange}
                        placeholder="Filter by assistance type"
                    />
                </Form>
                <Card.Group>{assistanceRequests}</Card.Group>
            </div>
        );
    }
}
