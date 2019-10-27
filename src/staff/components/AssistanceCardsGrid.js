import React, { Component } from 'react';
import { Card, Dropdown, Form } from 'semantic-ui-react';
import AssistanceRequestCard from './AssistanceRequestCard';
import { getAssistanceRequests } from '../ApiService';

import ReactNotification from 'react-notifications-component';
import { store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';

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

    componentDidMount() {
        window.socket.on('staff:newAssistanceRequest', payload => {
            // store.addNotification({
            //     title: 'New Assistance request received!',
            //     message: `${payload.id}`,
            //     type: 'danger',
            //     insert: 'top',
            //     container: 'top-right',
            //     animationIn: ['animated', 'fadeIn'],
            //     animationOut: ['animated', 'fadeOut'],
            //     dismiss: {
            //         duration: 20000,
            //         onScreen: true,
            //     },
            //     onRemoval: (id, removedBy) => {
            //         if (removedBy == 'click') {
            //             console.log('handle open details for this notification');
            //         }
            //     },
            // });

            this.setState({ easyGridReload });
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
                <ReactNotification />
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
