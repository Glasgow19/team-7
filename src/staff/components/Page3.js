import React from 'react';
import { Header, Container, Segment } from 'semantic-ui-react';
import '/./feedback.css';
import logo from '/./gsc_logo.svg';
import {Pie} from 'react-chartjs-2'


const data = {
    legend:[
        

    ],
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
        <div>
          <h2>Rating</h2>
          <Pie data={data} />
        </div>
    </Container>
);

export default Page3;
