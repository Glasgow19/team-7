import React, { Component } from 'react';
import { Card, Icon, Button } from 'semantic-ui-react';

export default class AssistanceRequestCard extends Component {
    render() {
        const { assistanceRequest } = this.props;

        console.log(assistanceRequest);

        const { id, payload } = assistanceRequest;
        const { summary, description } = payload;

        return (
            <Card>
                <Card.Content header={summary} />
                <Card.Content>
                    <p>{description}</p>
                    <span className="date">5 minutes ago</span>
                </Card.Content>
                <Card.Content extra>
                    <div className="ui two buttons">
                        <Button basic color="grey">
                            <Icon name="user"></Icon> Assist
                        </Button>
                        <Button basic color="grey">
                            <Icon name="list"></Icon> Details
                        </Button>
                    </div>
                </Card.Content>
            </Card>
        );
    }
}
