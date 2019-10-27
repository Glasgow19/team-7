import { Card, List, Rating, Grid, Header, Container, Segment, Statistic } from 'semantic-ui-react';
import { Pie } from 'react-chartjs-2';
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';

import { getFeedbacks } from '../ApiService';

import React, { Component } from 'react';

export default class Page3 extends Component {
    constructor(props) {
        super(props);
        this.state = { loaded: false };
    }

    componentDidMount() {
        getFeedbacks().then(feedbacks => {
            const allFeedbacks = feedbacks;
            const positiveFeedbacks = feedbacks.filter(feedback => feedback.score >= 3).length;
            const negativeFeedbacks = feedbacks.filter(feedback => feedback.score < 3).length;

            const ones = feedbacks.filter(feedback => feedback.score == 1).length;
            const twos = feedbacks.filter(feedback => feedback.score == 2).length;
            const threes = feedbacks.filter(feedback => feedback.score == 3).length;
            const fours = feedbacks.filter(feedback => feedback.score == 4).length;
            const fives = feedbacks.filter(feedback => feedback.score == 5).length;

            const chartData = {
                labels: [
                    'Excelent(5 stars)',
                    'Very Good(4 stars)',
                    'Good(3 stars)',
                    'Bad(2 stars)',
                    'Very Bad(1 stars)',
                ],
                datasets: [
                    {
                        data: [fives, fours, threes, twos, ones],
                        backgroundColor: ['#1ba39c', '#16a085', '#2abb9b', '#4ecdc4', '#36d7b7'],
                        hoverBackgroundColor: [
                            '#1ba39c',
                            '#16a085',
                            '#2abb9b',
                            '#4ecdc4',
                            '#36d7b7',
                        ],
                    },
                ],
            };
            this.setState({
                allFeedbacks,
                positiveFeedbacks,
                negativeFeedbacks,
                chartData,
                loaded: true,
            });
        });
    }

    renderFeedback({ text, score, dateReceieved }) {
        TimeAgo.addLocale(en);
        const timeAgo = new TimeAgo('en-US');
        const timeAgoString = timeAgo.format(new Date(dateReceieved));
        return (
            <Card
                meta={`Submitted ${timeAgoString}`}
                extra={<Rating icon="star" defaultRating={score} maxRating={5} disabled />}
                description={text}
            />
        );
    }

    render() {
        const {
            loaded,
            allFeedbacks,
            positiveFeedbacks,
            negativeFeedbacks,
            chartData,
        } = this.state;

        if (!loaded) return <div></div>;

        const renderedFeedbacks = allFeedbacks.map(feedback => this.renderFeedback(feedback));

        return (
            <Container>
                <Segment centered>
                    <Header>Rating Stats</Header>
                    <Grid>
                        <Grid.Row columns={2}>
                            <Grid.Column fluid>
                                <div class="piestorage">
                                    <Pie data={chartData} />
                                </div>
                            </Grid.Column>
                            <Grid.Column>
                                <Statistic>
                                    <Statistic.Value>{allFeedbacks.length}</Statistic.Value>
                                    <Statistic.Label>Feedback entries</Statistic.Label>
                                </Statistic>
                                <Statistic>
                                    <Statistic.Value>{positiveFeedbacks}</Statistic.Value>
                                    <Statistic.Label>Positive Feedback entries</Statistic.Label>
                                </Statistic>
                                <Statistic>
                                    <Statistic.Value>{negativeFeedbacks}</Statistic.Value>
                                    <Statistic.Label>Negative Feedback entries</Statistic.Label>
                                </Statistic>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>
                <div centered>
                    <Card.Group>{renderedFeedbacks}</Card.Group>
                </div>
            </Container>
        );
    }
}
