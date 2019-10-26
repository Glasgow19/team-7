import React from 'react';
import { Header, Container, Segment } from 'semantic-ui-react';
import '/./feedback.css';
import logo from '/./gsc_logo.svg';
import {Pie} from 'react-chartjs-2'


const data = {
    legend:[
        

    ],
	labels: [
		'Happy',
		'Neutrel',
		'Unhappy'
	],
	datasets: [{
		data: [51, 20, 10,10,9],
		backgroundColor: [
		'#00ff00',
		'#ffff00',
		'#ff0000'
		],
		hoverBackgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
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

export default Page3
