import React, { Component } from 'react';
import { Card, Icon, Button, Image } from 'semantic-ui-react';
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';
import { getLoggedInUser } from '../AuthService';
import red from '../red.png';
import other from '../other.png';

import { assist } from '../ApiService';
export default class AssistanceRequestCard extends Component {
    render() {
        const { assistanceRequest } = this.props;
        const { id, payload, status, dateReceieved } = assistanceRequest;

        const handleAssisting = () => {
            assist({
                submittedByConnectionId: assistanceRequest.connectionId,
                assistanceRequest: assistanceRequest,
                staffMember: getLoggedInUser(),
            }).then(response => {
                console.log(response);
            });
        };

        const handleDetails = () => {};

        TimeAgo.addLocale(en);
        const timeAgo = new TimeAgo('en-US');
        const timeAgoString = timeAgo.format(new Date(dateReceieved));
        const summary = `Assistance request #${id}`;

        const extraText =
            payload &&
            payload.assistanceRequestDetails &&
            payload.assistanceRequestDetails.extraDetails
                ? payload.assistanceRequestDetails.extraDetails
                : '';

        const description = (
            <div>
                <div style={{ margin: 10 }}>
                    <span className="date">
                        <b>Received</b> {timeAgoString}
                    </span>
                    <p>{payload.description}</p>
                    <p>
                        <strong>{extraText}</strong>
                    </p>
                    <br />
                </div>
                <Button icon="wifi" content={status} fluid></Button>
            </div>
        );

        const extra = (
            <div className="ui two buttons">
                <Button basic color="grey" onClick={handleAssisting}>
                    <Icon name="user"></Icon> Assist
                </Button>
                {/* <Button basic color="grey" onClick={handleDetails}>
                    <Icon name="list"></Icon> Details
                </Button> */}
            </div>
        );

        return (
            <Card
                header={summary}
                image={payload && payload.aidType == 'HEALTH' ? red : other}
                description={description}
                color={payload && payload.aidType == 'HEALTH' ? 'red' : 'grey'}
                extra={extra}
            ></Card>
        );
    }
}
