import React, { Component } from 'react';
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';
import { Comment, Rating } from 'semantic-ui-react';

export default class MiniFeedback extends Component {
    render() {
        const { score, text, dateReceieved } = this.props;
        TimeAgo.addLocale(en);
        const timeAgo = new TimeAgo('en-US');
        const timeAgoString = timeAgo.format(new Date(dateReceieved));

        return (
            <Comment>
                <Comment.Content>
                    <Comment.Author as="a">
                        {<Rating icon="star" defaultRating={score} maxRating={5} disabled />}
                    </Comment.Author>
                    <Comment.Metadata>
                        <div>{`Submitted ${timeAgoString}`}</div>
                    </Comment.Metadata>
                    <Comment.Text>{text}</Comment.Text>
                </Comment.Content>
            </Comment>
        );
    }
}
