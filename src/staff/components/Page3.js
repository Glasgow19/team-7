import React from 'react';
import { Header, Container, Segment } from 'semantic-ui-react';
import '/./feedback.css';
import logo from '/./gsc_logo.svg';
import {Pie} from 'react-chartjs-2'
import { List, Rating } from 'semantic-ui-react'

const data = {
	labels: [
		'Excelent(5 stars)',
		'Very Good(4 stars)',
        'Good(3 stars)',
        'Bad(2 stars)',
        'Very Bad(1 stars)'
	],
	datasets: [{
		data: [51, 20, 10,10,9],
		backgroundColor: [
        '#00ff00',
        '#afff00',
        '#ffff00',
        '#ffa500',
		'#ff0000'
		],
		hoverBackgroundColor: [
        '#00ff00',
        '#afff00',
        '#ffff00',
        '#ffa500',
        '#ff0000'
		]
	}]
};

const Page3 = () => (
    
    <Container>
        <div class = 'topbar'>
            <img class = 'logo' src={logo}/>
        </div>
        <p class = 'Title'>Feedback Center</p>

        <div class = 'piestorage'>
          <h2>Rating</h2>
          <Pie data={data} />
        </div>
        <List>
            <List.Item>
            <Rating icon='star' defaultRating={5} maxRating={5} disabled/>
                <List.Content>
                    <List.Header as='a'>Rachel</List.Header>
                    <List.Description>
                        15:12pm 12/10/2019
                    </List.Description>
                    <List.Description>
                        Loved it
                    </List.Description>
                </List.Content>
            </List.Item>
                <List.Item>
                <Rating icon='star' defaultRating={1} maxRating={5} disabled/>
                <List.Content>
                    <List.Header as='a'>Archie</List.Header>
                    <List.Description>
                        meeeh
                    </List.Description>
                </List.Content>
            </List.Item>
            <List.Item>
            <Rating icon='star' defaultRating={5} maxRating={5} disabled/>
                <List.Content>
                    <List.Header as='a'>Sam</List.Header>
                    <List.Description>
                        Very helpfull
                    </List.Description>
                </List.Content>
            </List.Item>
                <List.Item>
                <Rating icon='star' defaultRating={1} maxRating={5} disabled />
                <List.Content>
                    <List.Header as='a'>John</List.Header>
                    <List.Description>
                        Great easy to use
                    </List.Description>
                </List.Content>
            </List.Item>
        </List>
    </Container>
);

export default Page3;
